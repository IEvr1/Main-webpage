import { isZohoConfigured, syncLeadToZoho, type ZohoLead } from './lib/zoho';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  botcheck?: string;
  sourcePage?: string;
  lang?: string;
};

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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: 'Επικοινωνία — NexAI',
      from_name: trimmedName,
      email: trimmedEmail,
      phone: phone?.trim() || '—',
      message: trimmedMessage,
      replyto: trimmedEmail,
    }),
  });

  const data = (await response.json()) as { success?: boolean };

  if (!response.ok || !data.success) {
    return res.status(502).json({ error: 'Failed to send message' });
  }

  if (isZohoConfigured()) {
    const lead: ZohoLead = {
      name: trimmedName,
      email: trimmedEmail,
      phone: phone?.trim() ?? '',
      message: trimmedMessage,
      sourcePage: sourcePage?.trim() || '/',
      lang: lang?.trim() || 'el',
    };

    try {
      await syncLeadToZoho(lead);
    } catch (error) {
      console.error('Zoho lead sync failed:', error);
    }
  }

  return res.status(200).json({ success: true });
}
