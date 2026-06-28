#!/usr/bin/env node
/**
 * Smoke test for /api/contact on a deployed URL.
 * Usage: node scripts/smoke-contact-api.mjs [baseUrl]
 */

const baseUrl = (process.argv[2] ?? 'https://www.nexaipla.com').replace(/\/$/, '');

const payload = {
  name: 'API Smoke Test',
  email: 'smoke-test@example.com',
  phone: '',
  message: 'Automated smoke test — please ignore this lead.',
  botcheck: '',
  sourcePage: '/',
  lang: 'en',
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

console.log(`POST ${baseUrl}/api/contact → ${response.status}`);
console.log(JSON.stringify(data, null, 2));

if (!response.ok) {
  process.exit(1);
}

if (!data.success) {
  process.exit(1);
}

if (data.emailSent === false && data.autoReplySent === false && data.zohoSynced === false) {
  console.error('Notification, auto-reply, and Zoho sync all failed.');
  process.exit(1);
}

console.log('Contact API smoke test passed.');
if (data.autoReplySent === false) {
  console.warn('Warning: auto-reply was not sent.');
}
