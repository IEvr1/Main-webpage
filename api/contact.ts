type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  botcheck?: string;
  sourcePage?: string;
  lang?: string;
};

type ZohoLead = {
  name: string;
  email: string;
  phone: string;
  message: string;
  sourcePage: string;
  lang: string;
};

type ZohoTokenCache = {
  accessToken: string;
  expiresAt: number;
};

type ZohoMailAccount = {
  accountId?: string | number;
  primaryEmailAddress?: string;
  type?: string;
};

let tokenCache: ZohoTokenCache | null = null;
let mailAccountIdCache: string | null = null;

function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(' ');

  if (spaceIndex === -1) {
    return { firstName: '', lastName: trimmed };
  }

  return {
    firstName: trimmed.slice(0, spaceIndex).trim(),
    lastName: trimmed.slice(spaceIndex + 1).trim() || trimmed,
  };
}

function leadDescription(lead: ZohoLead): string {
  const lines = [lead.message.trim()];

  if (lead.sourcePage) {
    lines.push('', `Page: ${lead.sourcePage}`);
  }

  if (lead.lang) {
    lines.push(`Language: ${lead.lang}`);
  }

  return lines.join('\n');
}

function zohoAccountsUrl(): string {
  return process.env.ZOHO_ACCOUNTS_URL?.replace(/\/$/, '') ?? 'https://accounts.zoho.eu';
}

function zohoApiDomain(): string {
  return process.env.ZOHO_API_DOMAIN?.replace(/\/$/, '') ?? 'https://www.zohoapis.eu';
}

function zohoMailApiDomain(): string {
  return process.env.ZOHO_MAIL_API_DOMAIN?.replace(/\/$/, '') ?? 'https://mail.zoho.eu';
}

function contactNotifyEmail(): string {
  return process.env.CONTACT_NOTIFY_EMAIL?.trim() || 'info@nexaipla.com';
}

function hasZohoCrmConfig(): boolean {
  return Boolean(
    process.env.ZOHO_CLIENT_ID &&
      process.env.ZOHO_CLIENT_SECRET &&
      process.env.ZOHO_REFRESH_TOKEN,
  );
}

function isZohoConfigured(): boolean {
  return hasZohoCrmConfig() || Boolean(process.env.ZOHO_FLOW_WEBHOOK_URL?.trim());
}

function hasZohoMailConfig(): boolean {
  return hasZohoCrmConfig();
}

function contactEmailSubject(): string {
  return process.env.CONTACT_EMAIL_SUBJECT?.trim() || 'Επικοινωνία — NexAI';
}

function contactEmailBody(lead: ZohoLead): string {
  const lines = [
    'Νέο μήνυμα από τη φόρμα επικοινωνίας του nexaipla.com',
    '',
    `Όνομα: ${lead.name}`,
    `Email: ${lead.email}`,
    `Τηλέφωνο: ${lead.phone.trim() || '—'}`,
    '',
    'Μήνυμα:',
    lead.message.trim(),
  ];

  if (lead.sourcePage) {
    lines.push('', `Σελίδα: ${lead.sourcePage}`);
  }

  if (lead.lang) {
    lines.push(`Γλώσσα: ${lead.lang}`);
  }

  lines.push('', `Υποβλήθηκε: ${new Date().toISOString()}`);

  return lines.join('\n');
}

async function getZohoMailAccountId(accessToken: string): Promise<string> {
  const configuredId = process.env.ZOHO_MAIL_ACCOUNT_ID?.trim();
  if (configuredId) {
    return configuredId;
  }

  if (mailAccountIdCache) {
    return mailAccountIdCache;
  }

  const notifyEmail = contactNotifyEmail().toLowerCase();
  const response = await fetch(`${zohoMailApiDomain()}/api/accounts`, {
    headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
  });

  const data = (await response.json()) as {
    data?: ZohoMailAccount[];
    status?: { code?: number; description?: string };
  };

  if (!response.ok) {
    const detail = data.status?.description ?? 'Failed to list Zoho Mail accounts';
    throw new Error(detail);
  }

  const accounts = data.data ?? [];
  const preferred =
    accounts.find((account) => account.primaryEmailAddress?.toLowerCase() === notifyEmail) ??
    accounts.find((account) => account.type === 'ZOHO_ACCOUNT') ??
    accounts[0];

  if (!preferred?.accountId) {
    throw new Error('Zoho Mail account not found for contact notifications');
  }

  mailAccountIdCache = String(preferred.accountId);
  return mailAccountIdCache;
}

async function sendContactNotificationEmail(lead: ZohoLead): Promise<boolean> {
  if (!hasZohoMailConfig()) {
    return false;
  }

  const accessToken = await getZohoAccessToken();
  const accountId = await getZohoMailAccountId(accessToken);
  const notifyEmail = contactNotifyEmail();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || notifyEmail;

  const response = await fetch(`${zohoMailApiDomain()}/api/accounts/${accountId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fromAddress: fromEmail,
      toAddress: notifyEmail,
      subject: contactEmailSubject(),
      content: contactEmailBody(lead),
      mailFormat: 'plaintext',
      askReceipt: 'no',
    }),
  });

  const data = (await response.json()) as {
    status?: { code?: number; description?: string };
    data?: { errorCode?: string; message?: string };
  };

  if (!response.ok || data.status?.code !== 200) {
    const detail =
      data.data?.message ??
      data.status?.description ??
      `Zoho Mail send failed (${response.status})`;
    throw new Error(detail);
  }

  return true;
}

async function getZohoAccessToken(): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60_000) {
    return tokenCache.accessToken;
  }

  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Zoho CRM credentials are not configured');
  }

  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'refresh_token',
  });

  const response = await fetch(`${zohoAccountsUrl()}/oauth/v2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = (await response.json()) as {
    access_token?: string;
    expires_in?: number;
    error?: string;
  };

  if (!response.ok || !data.access_token) {
    throw new Error(data.error ?? 'Failed to refresh Zoho access token');
  }

  tokenCache = {
    accessToken: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000,
  };

  return data.access_token;
}

async function createZohoCrmLead(lead: ZohoLead): Promise<void> {
  if (!hasZohoCrmConfig()) {
    return;
  }

  const accessToken = await getZohoAccessToken();
  const { firstName, lastName } = splitName(lead.name);
  const leadSource = process.env.ZOHO_CRM_LEAD_SOURCE?.trim() || 'Website';

  const record: Record<string, string> = {
    Last_Name: lastName,
    Email: lead.email,
    Description: leadDescription(lead),
    Lead_Source: leadSource,
  };

  if (firstName) {
    record.First_Name = firstName;
  }

  if (lead.phone.trim()) {
    record.Phone = lead.phone.trim();
  }

  const response = await fetch(`${zohoApiDomain()}/crm/v2/Leads`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: [record] }),
  });

  const data = (await response.json()) as {
    data?: Array<{ code?: string; message?: string; status?: string }>;
  };

  if (!response.ok) {
    const message = data.data?.[0]?.message ?? 'Failed to create Zoho CRM lead';
    throw new Error(message);
  }

  const result = data.data?.[0];
  if (result?.status === 'error') {
    throw new Error(result.message ?? 'Failed to create Zoho CRM lead');
  }
}

async function sendLeadToZohoFlow(lead: ZohoLead): Promise<void> {
  const webhookUrl = process.env.ZOHO_FLOW_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return;
  }

  const payload = JSON.stringify({
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    message: lead.message,
    source_page: lead.sourcePage,
    language: lead.lang,
    submitted_at: new Date().toISOString(),
  });

  const headers = { 'Content-Type': 'application/json' };

  let response = await fetch(webhookUrl, { method: 'POST', headers, body: payload });

  if (!response.ok && (response.status === 405 || response.status === 404)) {
    response = await fetch(webhookUrl, { method: 'PUT', headers, body: payload });
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Zoho Flow webhook returned ${response.status}${detail ? `: ${detail}` : ''}`);
  }
}

async function syncLeadToZoho(lead: ZohoLead): Promise<boolean> {
  const tasks: Promise<void>[] = [];

  if (hasZohoCrmConfig()) {
    tasks.push(createZohoCrmLead(lead));
  }

  if (process.env.ZOHO_FLOW_WEBHOOK_URL?.trim()) {
    tasks.push(sendLeadToZohoFlow(lead));
  }

  if (tasks.length === 0) {
    return false;
  }

  const results = await Promise.allSettled(tasks);

  for (const result of results) {
    if (result.status === 'rejected') {
      console.error('Zoho sync step failed:', result.reason);
    }
  }

  return results.some((result) => result.status === 'fulfilled');
}

export default async function handler(
  req: { method?: string; body?: ContactPayload },
  res: {
    status: (code: number) => { json: (body: unknown) => void };
  },
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message, botcheck, sourcePage, lang } = (req.body ?? {}) as ContactPayload;

  if (typeof botcheck === 'string' && botcheck.trim()) {
    return res.status(200).json({ success: true });
  }

  const trimmedName = name?.trim() ?? '';
  const trimmedEmail = email?.trim() ?? '';
  const trimmedMessage = message?.trim() ?? '';

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const lead: ZohoLead = {
    name: trimmedName,
    email: trimmedEmail,
    phone: phone?.trim() ?? '',
    message: trimmedMessage,
    sourcePage: sourcePage?.trim() || '/',
    lang: lang?.trim() || 'el',
  };

  const tasks: Promise<{ kind: 'email' | 'zoho'; ok: boolean }>[] = [
    sendContactNotificationEmail(lead)
      .then((ok) => ({ kind: 'email' as const, ok }))
      .catch((error) => {
        console.error('Contact email failed:', error);
        return { kind: 'email' as const, ok: false };
      }),
  ];

  if (isZohoConfigured()) {
    tasks.push(
      syncLeadToZoho(lead)
        .then((ok) => ({ kind: 'zoho' as const, ok }))
        .catch((error) => {
          console.error('Zoho sync failed:', error);
          return { kind: 'zoho' as const, ok: false };
        }),
    );
  }

  const results = await Promise.all(tasks);
  const emailSent = results.some((result) => result.kind === 'email' && result.ok);
  const zohoSynced = results.some((result) => result.kind === 'zoho' && result.ok);

  if (emailSent || zohoSynced) {
    return res.status(200).json({ success: true, emailSent, zohoSynced });
  }

  console.error('Contact handler error: no delivery channel succeeded');
  return res.status(500).json({ error: 'Failed to deliver contact message' });
}
