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

let tokenCache: ZohoTokenCache | null = null;

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

async function syncLeadToZoho(lead: ZohoLead): Promise<void> {
  const tasks: Promise<void>[] = [];

  if (hasZohoCrmConfig()) {
    tasks.push(createZohoCrmLead(lead));
  }

  if (process.env.ZOHO_FLOW_WEBHOOK_URL?.trim()) {
    tasks.push(sendLeadToZohoFlow(lead));
  }

  if (tasks.length === 0) {
    return;
  }

  const results = await Promise.allSettled(tasks);

  for (const result of results) {
    if (result.status === 'rejected') {
      console.error('Zoho sync step failed:', result.reason);
    }
  }
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

  try {
    if (isZohoConfigured()) {
      const lead: ZohoLead = {
        name: trimmedName,
        email: trimmedEmail,
        phone: phone?.trim() ?? '',
        message: trimmedMessage,
        sourcePage: sourcePage?.trim() || '/',
        lang: lang?.trim() || 'el',
      };

      await syncLeadToZoho(lead);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact handler error:', error);
    return res.status(500).json({ error: 'Failed to sync lead' });
  }
}
