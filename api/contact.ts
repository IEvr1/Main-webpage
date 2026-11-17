import { hasVoiceStorageConfig, uploadVoiceRecording } from './lib/voice-storage.js';

const DEFAULT_CONTACT_EMAIL = 'contact@nexaipla.com';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  botcheck?: string;
  sourcePage?: string;
  lang?: string;
  inquiryType?: string;
  company?: string;
  industry?: string;
  teamSize?: string;
  goals?: string[];
  timeline?: string;
  inputMode?: string;
  responseLanguage?: string;
  audioBase64?: string;
  audioMimeType?: string;
  audioDurationSec?: number;
  audioUrl?: string;
};

type ContactLead = {
  name: string;
  email: string;
  phone: string;
  message: string;
  sourcePage: string;
  lang: string;
  inquiryType?: string;
  company?: string;
  industry?: string;
  teamSize?: string;
  goals?: string[];
  timeline?: string;
  inputMode?: string;
  responseLanguage?: string;
  audioBase64?: string;
  audioMimeType?: string;
  audioDurationSec?: number;
  audioUrl?: string;
};

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

function voiceRecordingLine(lead: ContactLead): string | null {
  if (lead.audioUrl) {
    const duration = lead.audioDurationSec ? `${lead.audioDurationSec}s` : 'unknown duration';
    return `Voice recording (${duration}): ${lead.audioUrl}`;
  }

  if (lead.audioBase64) {
    const duration = lead.audioDurationSec ? `${lead.audioDurationSec}s` : 'unknown duration';
    const mime = lead.audioMimeType ?? 'audio/webm';
    return `Voice recording: ${duration} (${mime}) — storage upload unavailable`;
  }

  return null;
}

function leadExtraDetails(lead: ContactLead): string[] {
  const lines: string[] = [];

  if (lead.inquiryType) lines.push(`Inquiry type: ${lead.inquiryType}`);
  if (lead.company) lines.push(`Company: ${lead.company}`);
  if (lead.industry) lines.push(`Industry: ${lead.industry}`);
  if (lead.teamSize) lines.push(`Team size: ${lead.teamSize}`);
  if (lead.timeline) lines.push(`Timeline: ${lead.timeline}`);
  if (lead.inputMode) lines.push(`Input mode: ${lead.inputMode}`);
  if (lead.responseLanguage) lines.push(`Response language: ${lead.responseLanguage}`);
  if (lead.goals?.length) lines.push(`Goals: ${lead.goals.join(', ')}`);

  const voiceLine = voiceRecordingLine(lead);
  if (voiceLine) lines.push(voiceLine);

  if (lead.sourcePage) lines.push(`Page: ${lead.sourcePage}`);
  if (lead.lang) lines.push(`Language: ${lead.lang}`);

  return lines;
}

function contactNotifyEmail(): string {
  return process.env.CONTACT_NOTIFY_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;
}

function contactFromEmail(): string {
  return process.env.CONTACT_FROM_EMAIL?.trim() || contactNotifyEmail();
}

function contactFromAddress(): string {
  const from = contactFromEmail();
  if (from.includes('<')) return from;
  const name = process.env.CONTACT_FROM_NAME?.trim() || 'NexAIpla';
  return `${name} <${from}>`;
}

function hasResendConfig(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

function contactEmailSubject(inquiryType?: string): string {
  if (inquiryType === 'ai-score-results') {
    return 'AI Readiness Score results — nexaipla.com';
  }
  return process.env.CONTACT_EMAIL_SUBJECT?.trim() || 'Επικοινωνία — NexAI';
}

function contactEmailBody(lead: ContactLead): string {
  const header =
    lead.inquiryType === 'ai-score-results'
      ? 'Νέα αποστολή αποτελεσμάτων AI Readiness Score από nexaipla.com'
      : 'Νέο μήνυμα από τη φόρμα επικοινωνίας του nexaipla.com';

  const lines = [
    header,
    '',
    `Όνομα: ${lead.name}`,
    `Email: ${lead.email}`,
    `Τηλέφωνο: ${lead.phone.trim() || '—'}`,
    '',
    lead.inquiryType === 'ai-score-results' ? 'Περίληψη αποτελεσμάτων:' : 'Μήνυμα:',
    lead.message.trim(),
  ];

  const extra = leadExtraDetails(lead);
  if (extra.length > 0) {
    lines.push('', ...extra);
  }

  lines.push('', `Υποβλήθηκε: ${new Date().toISOString()}`);

  return lines.join('\n');
}

function contactAutoReplySubject(lang: string, inquiryType?: string): string {
  if (inquiryType === 'ai-score-results') {
    if (lang === 'en') {
      return 'Your AI Readiness Score results | NexAIpla';
    }
    return 'Τα αποτελέσματα του AI Readiness Score σας | NexAIpla';
  }

  if (lang === 'en') {
    return process.env.CONTACT_AUTOREPLY_SUBJECT_EN?.trim() || 'Thanks for contacting NexAIpla';
  }

  return process.env.CONTACT_AUTOREPLY_SUBJECT_EL?.trim() || 'Ευχαριστούμε που επικοινωνήσατε με την NexAIpla';
}

function contactAutoReplyBody(lead: ContactLead): string {
  const { firstName } = splitName(lead.name);
  const greetingName = firstName || lead.name.trim().split(/\s+/)[0] || '';
  const isAiConsultation = lead.inquiryType === 'ai-consultation';
  const isAiScoreResults = lead.inquiryType === 'ai-score-results';
  const supportEmail = contactNotifyEmail();

  if (isAiScoreResults) {
    if (lead.lang === 'en') {
      const hello = greetingName ? `Hello ${greetingName},` : 'Hello,';
      return `${hello}

Thank you for completing the AI Readiness Score. Here is your summary:

${lead.message.trim()}

If you would like a custom AI solution based on these results, visit https://www.nexaipla.com/ai/ or reply to this email.

NexAIpla Team
${supportEmail}`;
    }

    const hello = greetingName ? `Γεια σας ${greetingName},` : 'Γεια σας,';
    return `${hello}

Ευχαριστούμε που ολοκληρώσατε το AI Readiness Score. Ακολουθεί η περίληψη των αποτελεσμάτων σας:

${lead.message.trim()}

Αν θέλετε εξατομικευμένη λύση AI με βάση αυτά τα αποτελέσματα, επισκεφτείτε το https://www.nexaipla.com/ai/ ή απαντήστε σε αυτό το email.

Ομάδα NexAIpla
${supportEmail}`;
  }

  if (lead.lang === 'en') {
    const hello = greetingName ? `Hello ${greetingName},` : 'Hello,';
    const replyWindow = isAiConsultation
      ? 'We received your AI consultation request and will reply within 48 hours with feasibility %, an indicative implementation cost, and an estimated implementation timeline.'
      : 'We received your message and will reply within 48 hours.';
    return `${hello}

Thank you for contacting NexAIpla. ${replyWindow}

NexAIpla Team
${supportEmail}`;
  }

  const hello = greetingName ? `Γεια σας ${greetingName},` : 'Γεια σας,';
  const replyWindow = isAiConsultation
    ? 'Λάβαμε το αίτημά σας για AI συμβουλευτική και θα απαντήσουμε εντός 48 ωρών με ποσοστό εφικτότητας, ενδεικτικό κόστος και εκτιμώμενη διάρκεια υλοποίησης.'
    : 'Λάβαμε το μήνυμά σας και θα απαντήσουμε εντός 48 ωρών.';
  return `${hello}

Ευχαριστούμε που επικοινωνήσατε με την NexAIpla. ${replyWindow}

Ομάδα NexAIpla
${supportEmail}`;
}

async function sendResendEmail(options: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return false;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: contactFromAddress(),
      to: [options.to],
      subject: options.subject,
      text: options.text,
      reply_to: options.replyTo,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Resend send failed (${response.status})${detail ? `: ${detail}` : ''}`);
  }

  return true;
}

async function sendContactNotificationEmail(lead: ContactLead): Promise<boolean> {
  return sendResendEmail({
    to: contactNotifyEmail(),
    subject: contactEmailSubject(lead.inquiryType),
    text: contactEmailBody(lead),
    replyTo: lead.email,
  });
}

async function sendContactAutoReplyEmail(lead: ContactLead): Promise<boolean> {
  return sendResendEmail({
    to: lead.email,
    subject: contactAutoReplySubject(lead.lang, lead.inquiryType),
    text: contactAutoReplyBody(lead),
    replyTo: contactNotifyEmail(),
  });
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

  const {
    name,
    email,
    phone,
    message,
    botcheck,
    sourcePage,
    lang,
    inquiryType,
    company,
    industry,
    teamSize,
    goals,
    timeline,
    inputMode,
    responseLanguage,
    audioBase64,
    audioMimeType,
    audioDurationSec,
  } = (req.body ?? {}) as ContactPayload;

  if (typeof botcheck === 'string' && botcheck.trim()) {
    return res.status(200).json({ success: true });
  }

  const trimmedName = name?.trim() ?? '';
  const trimmedEmail = email?.trim() ?? '';
  const trimmedMessage = message?.trim() ?? '';

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!hasResendConfig()) {
    console.error('Contact handler error: RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Failed to deliver contact message' });
  }

  const maxAudioBase64Length = 4_000_000;
  const trimmedAudioBase64 = audioBase64?.trim() ?? '';
  if (trimmedAudioBase64.length > maxAudioBase64Length) {
    return res.status(400).json({ error: 'Audio attachment is too large' });
  }

  let audioUrl: string | undefined;
  if (trimmedAudioBase64) {
    if (!hasVoiceStorageConfig()) {
      console.error('Voice recording received but BLOB_READ_WRITE_TOKEN is not configured');
    } else {
      try {
        audioUrl = await uploadVoiceRecording({
          audioBase64: trimmedAudioBase64,
          mimeType: audioMimeType?.trim() || 'audio/webm',
          submitterEmail: trimmedEmail,
        });
      } catch (error) {
        console.error('Voice recording upload failed:', error);
      }
    }
  }

  const lead: ContactLead = {
    name: trimmedName,
    email: trimmedEmail,
    phone: phone?.trim() ?? '',
    message: trimmedMessage,
    sourcePage: sourcePage?.trim() || '/',
    lang: lang?.trim() || 'en',
    inquiryType: inquiryType?.trim(),
    company: company?.trim(),
    industry: industry?.trim(),
    teamSize: teamSize?.trim(),
    goals: Array.isArray(goals) ? goals.filter((goal) => typeof goal === 'string') : undefined,
    timeline: timeline?.trim(),
    inputMode: inputMode?.trim(),
    responseLanguage: responseLanguage?.trim(),
    audioUrl,
    audioBase64: audioUrl ? undefined : trimmedAudioBase64 || undefined,
    audioMimeType: audioMimeType?.trim(),
    audioDurationSec:
      typeof audioDurationSec === 'number' && Number.isFinite(audioDurationSec)
        ? Math.max(0, Math.round(audioDurationSec))
        : undefined,
  };

  const results = await Promise.all([
    sendContactNotificationEmail(lead)
      .then((ok) => ({ kind: 'notify' as const, ok }))
      .catch((error) => {
        console.error('Contact notification email failed:', error);
        return { kind: 'notify' as const, ok: false };
      }),
    sendContactAutoReplyEmail(lead)
      .then((ok) => ({ kind: 'autoReply' as const, ok }))
      .catch((error) => {
        console.error('Contact auto-reply email failed:', error);
        return { kind: 'autoReply' as const, ok: false };
      }),
  ]);

  const emailSent = results.some((result) => result.kind === 'notify' && result.ok);
  const autoReplySent = results.some((result) => result.kind === 'autoReply' && result.ok);

  if (emailSent) {
    return res.status(200).json({ success: true, emailSent, autoReplySent });
  }

  console.error('Contact handler error: notification email was not sent');
  return res.status(500).json({ error: 'Failed to deliver contact message' });
}
