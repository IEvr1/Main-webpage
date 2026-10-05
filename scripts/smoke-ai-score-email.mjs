#!/usr/bin/env node
/**
 * Smoke test for AI Score results email via /api/contact.
 * Usage: node scripts/smoke-ai-score-email.mjs [baseUrl]
 */

const baseUrl = (process.argv[2] ?? 'https://www.nexaipla.com').replace(/\/$/, '');

const payload = {
  name: 'AI Score Email Smoke Test',
  email: 'smoke-test@example.com',
  phone: '',
  message: [
    'I completed the AI Readiness Score and would like to discuss a custom AI solution.',
    '',
    'Overall score: 61/100',
    'Band: Partially ready',
    '',
    'Weakest areas:',
    '- Data readiness (33/100)',
    '- People & skills (50/100)',
    '- Governance & change (50/100)',
    '',
    'Recommendations:',
    '- Data readiness: Consolidate the data for your top workflow.',
    '- People & skills: Assign an internal owner with weekly capacity.',
    '- Governance & change: Get leadership sponsorship and basic rules.',
  ].join('\n'),
  botcheck: '',
  sourcePage: '/ai-score/',
  lang: 'en',
  inquiryType: 'ai-score-results',
};

const response = await fetch(`${baseUrl}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});

const text = await response.text();
let data;

try {
  data = JSON.parse(text);
} catch {
  data = { raw: text };
}

console.log(`POST ${baseUrl}/api/contact (ai-score-results) → ${response.status}`);
console.log(JSON.stringify(data, null, 2));

if (!response.ok || !data.success) {
  process.exit(1);
}

if (data.autoReplySent !== true) {
  console.error('Expected autoReplySent=true so the user receives the results email.');
  process.exit(1);
}

console.log('AI Score email smoke test passed (auto-reply sent).');
if (data.emailSent === false) {
  console.warn('Warning: notify email to inbox was not sent.');
}
