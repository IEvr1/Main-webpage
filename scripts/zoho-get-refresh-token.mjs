#!/usr/bin/env node
/**
 * One-time helper: get ZOHO_REFRESH_TOKEN for Server-based Zoho API clients.
 *
 * Usage (from project root, after ZOHO_CLIENT_ID + ZOHO_CLIENT_SECRET are in .env):
 *   node scripts/zoho-get-refresh-token.mjs
 *   node scripts/zoho-get-refresh-token.mjs --write   # also updates .env line 8
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createInterface } from 'node:readline';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const envPath = resolve(root, '.env');

const SCOPE = 'ZohoCRM.modules.leads.CREATE,ZohoCRM.modules.leads.READ';
const REDIRECT_URI = 'https://www.nexaipla.com';
const shouldWrite = process.argv.includes('--write');

function loadEnv(path) {
  const values = {};

  if (!existsSync(path)) {
    return values;
  }

  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separator = trimmed.indexOf('=');
    if (separator === -1) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();
    values[key] = value;
  }

  return values;
}

function ask(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  return new Promise((resolveAnswer) => {
    rl.question(question, (answer) => {
      rl.close();
      resolveAnswer(answer.trim());
    });
  });
}

function openBrowser(url) {
  const platform = process.platform;
  const command =
    platform === 'win32'
      ? `start "" "${url}"`
      : platform === 'darwin'
        ? `open "${url}"`
        : `xdg-open "${url}"`;

  exec(command, () => {});
}

function buildAuthUrl(clientId, accountsUrl) {
  const params = new URLSearchParams({
    scope: SCOPE,
    client_id: clientId,
    response_type: 'code',
    access_type: 'offline',
    redirect_uri: REDIRECT_URI,
    prompt: 'consent',
  });

  return `${accountsUrl.replace(/\/$/, '')}/oauth/v2/auth?${params.toString()}`;
}

function extractCode(input) {
  const trimmed = input.trim();

  if (!trimmed) {
    return '';
  }

  if (trimmed.includes('code=')) {
    try {
      const url = new URL(trimmed);
      return url.searchParams.get('code') ?? '';
    } catch {
      const match = trimmed.match(/[?&]code=([^&]+)/);
      return match ? decodeURIComponent(match[1]) : trimmed;
    }
  }

  return trimmed;
}

function updateEnvRefreshToken(path, refreshToken) {
  if (!existsSync(path)) {
    throw new Error(`.env not found at ${path}`);
  }

  const lines = readFileSync(path, 'utf8').split('\n');
  let replaced = false;

  const updated = lines.map((line) => {
    if (line.startsWith('ZOHO_REFRESH_TOKEN=')) {
      replaced = true;
      return `ZOHO_REFRESH_TOKEN=${refreshToken}`;
    }

    return line;
  });

  if (!replaced) {
    updated.push(`ZOHO_REFRESH_TOKEN=${refreshToken}`);
  }

  writeFileSync(path, updated.join('\n'), 'utf8');
}

const env = loadEnv(envPath);
const clientId = env.ZOHO_CLIENT_ID;
const clientSecret = env.ZOHO_CLIENT_SECRET;
const accountsUrl = env.ZOHO_ACCOUNTS_URL || 'https://accounts.zoho.eu';

if (!clientId || !clientSecret) {
  console.error('\nMissing ZOHO_CLIENT_ID or ZOHO_CLIENT_SECRET in .env');
  console.error('Fill lines 6–7 first, then run this script again.\n');
  process.exit(1);
}

const authUrl = buildAuthUrl(clientId, accountsUrl);

console.log('\n=== Zoho refresh token helper ===\n');
console.log('Server-based clients do NOT have "Generate Code" in the console.');
console.log('You approve access once in the browser instead.\n');
console.log('Step 1 — Opening this URL in your browser (or copy/paste it):\n');
console.log(authUrl);
console.log('\nStep 2 — Log in to Zoho, click Accept.');
console.log('Step 3 — Browser will redirect to nexaipla.com with ?code=... in the address bar.');
console.log('        The page may show 404 — that is OK. Copy the FULL URL or just the code.\n');

openBrowser(authUrl);

const pasted = await ask('Paste the code or full redirect URL here: ');
const code = extractCode(pasted);

if (!code) {
  console.error('\nNo code found. Run the script again and paste quickly (code expires in ~2 min).\n');
  process.exit(1);
}

const body = new URLSearchParams({
  grant_type: 'authorization_code',
  client_id: clientId,
  client_secret: clientSecret,
  redirect_uri: REDIRECT_URI,
  code,
});

const response = await fetch(`${accountsUrl.replace(/\/$/, '')}/oauth/v2/token`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: body.toString(),
});

const data = await response.json();

if (!response.ok || !data.refresh_token) {
  console.error('\nToken exchange failed:\n', JSON.stringify(data, null, 2));
  console.error('\nCommon fixes:');
  console.error('- Generate a new code (old one expired or was already used)');
  console.error('- Redirect URI in API Console must be exactly: https://www.nexaipla.com');
  console.error('- Use accounts.zoho.eu for Cyprus/EU accounts\n');
  process.exit(1);
}

console.log('\nSuccess! Your refresh token:\n');
console.log(data.refresh_token);
console.log('\nAdd to .env line 8:');
console.log(`ZOHO_REFRESH_TOKEN=${data.refresh_token}`);

if (data.api_domain) {
  console.log(`\n(api_domain from Zoho: ${data.api_domain})`);
}

if (shouldWrite) {
  updateEnvRefreshToken(envPath, data.refresh_token);
  console.log('\nUpdated .env → ZOHO_REFRESH_TOKEN');
}

console.log('\nAlso add the same value in Vercel env vars, then redeploy.\n');
