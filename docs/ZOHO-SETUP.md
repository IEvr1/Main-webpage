# Zoho lead automation setup — NexAIpla

This guide connects the website contact form to **Zoho Mail**, **Zoho CRM**, and optionally **Zoho Flow**.

**What happens after setup:**

```
Visitor submits form on nexaipla.com
        ↓
Vercel API (/api/contact)
        ↓
   ┌────┼────┐
   ↓    ↓    ↓
Zoho Mail  Zoho CRM  Zoho Flow (optional)
   ↓
Email to info@nexaipla.com (Zoho Mail inbox)
```

The customer gets a success message when email delivery or Zoho sync succeeds. Email via Zoho Mail API is the primary channel; CRM/Flow run in parallel.

---

## Step 1 — Organize leads in Zoho Mail (5 minutes)

Create a filter so form emails are easy to find.

1. Log in to [Zoho Mail](https://mail.zoho.eu) as `info@nexaipla.com`
2. **Settings → Filters → New filter**
3. Configure:
   - **Subject** contains: `Επικοινωνία`
   - **Action:** Move to folder `Website Leads`
   - **Action:** Mark as important (optional)
   - **Action:** Forward a copy to your mobile email (optional)
4. Save

---

## Step 2 — Create Zoho CRM (if you don't have it)

1. Go to [Zoho CRM](https://www.zoho.com/crm/)
2. Sign up with the same Zoho account as your mail
3. **Free plan** works for 1–3 users

Suggested pipeline stages:

- New → Contacted → Demo scheduled → Won / Lost

---

## Step 3 — Choose an integration method

You can use **one or both**:

| Method | Best for | Code env vars |
|--------|----------|---------------|
| **A. Zoho CRM API** (recommended) | Direct lead creation in CRM | `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN` |
| **B. Zoho Flow webhook** | Extra automations (tasks, emails, Cliq alerts) | `ZOHO_FLOW_WEBHOOK_URL` |

---

## Method A — Zoho CRM API (recommended)

### A1. Create a Zoho API client

1. Open [Zoho API Console](https://api-console.zoho.eu) (use `.com` if your account is US-based)
2. **Add Client → Server-based Applications**
3. Set:
   - **Client Name:** NexAIpla Website
   - **Homepage URL:** `https://www.nexaipla.com`
   - **Redirect URI:** `https://www.nexaipla.com` (required; not used by server refresh flow)
4. Copy **Client ID** and **Client Secret**

### A2. Generate a refresh token

**Server-based clients do not have a "Generate Code" tab.** That button exists only on **Self Client** apps. For Server-based apps, use the browser flow below (or run `npm run zoho:token`).

#### Option 1 — Helper script (easiest)

1. Put `ZOHO_CLIENT_ID` and `ZOHO_CLIENT_SECRET` in `.env` (lines 6–7)
2. From the project folder run:

```bash
npm run zoho:token
```

3. Browser opens → log in to Zoho → click **Accept**
4. You are redirected to `https://www.nexaipla.com/?code=...` (404 on the page is OK)
5. Copy the full URL or just the `code` value into the terminal prompt
6. Script prints `ZOHO_REFRESH_TOKEN` — paste into `.env` line 8

To write line 8 automatically:

```bash
node scripts/zoho-get-refresh-token.mjs --write
```

#### Option 2 — Manual browser URL

1. Open this URL in your browser (replace `YOUR_CLIENT_ID`):

```
https://accounts.zoho.eu/oauth/v2/auth?scope=ZohoCRM.modules.leads.CREATE,ZohoCRM.modules.leads.READ&client_id=YOUR_CLIENT_ID&response_type=code&access_type=offline&redirect_uri=https://www.nexaipla.com&prompt=consent
```

2. Approve access → copy `code` from the redirect URL
3. Exchange it for a refresh token:

```bash
curl -X POST "https://accounts.zoho.eu/oauth/v2/token" \
  -d "grant_type=authorization_code" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=https://www.nexaipla.com" \
  -d "code=YOUR_GRANT_CODE"
```

4. Save the `refresh_token` from the response (it does not expire unless revoked)

#### Option 3 — Self Client (has "Generate Code" in console)

If you prefer the in-console UI: create a **Self Client** instead of Server-based, use **Generate Code** there, then exchange via the script or curl. Update `.env` lines 6–7 with the Self Client ID/secret.

### A3. Add Vercel environment variables

In **Vercel → Project → Settings → Environment Variables**:

| Variable | Value |
|----------|-------|
| `ZOHO_CLIENT_ID` | From API Console |
| `ZOHO_CLIENT_SECRET` | From API Console |
| `ZOHO_REFRESH_TOKEN` | From token exchange |
| `ZOHO_ACCOUNTS_URL` | `https://accounts.zoho.eu` (or `.com` for US) |
| `ZOHO_API_DOMAIN` | `https://www.zohoapis.eu` (or `.com` for US) |
| `ZOHO_CRM_LEAD_SOURCE` | `Website` (optional) |
| `ZOHO_MAIL_API_DOMAIN` | `https://mail.zoho.eu` (or `.com` for US) |
| `CONTACT_NOTIFY_EMAIL` | `info@nexaipla.com` |
| `CONTACT_FROM_EMAIL` | `info@nexaipla.com` (optional) |
| `ZOHO_MAIL_ACCOUNT_ID` | Optional — auto-discovered if omitted |

Redeploy after saving.

> **Mail OAuth scope:** The refresh token must include `ZohoMail.messages.CREATE` and `ZohoMail.accounts.READ`. Re-run `npm run zoho:token -- --write` after updating the script if email delivery fails with `INVALID_OAUTHSCOPE`.

### A4. Test

1. Submit the contact form on https://www.nexaipla.com
2. Check **Zoho CRM → Leads** for a new record
3. Lead **Description** includes the message, page path (e.g. `/foodorder`), and language

---

## Method B — Zoho Flow webhook (optional extras)

Use this if you want Flow to create tasks, send auto-replies, or notify Cliq.

### B1. Create the Flow

1. Open [Zoho Flow](https://flow.zoho.eu)
2. **Create Flow**
3. **Trigger:** Webhooks by Zoho Flow → **Catch hook**
4. Copy the webhook URL
5. **Action:** Zoho CRM → **Create module entry** → Leads
6. Map fields:
   - `Last Name` ← `name`
   - `Email` ← `email`
   - `Phone` ← `phone`
   - `Description` ← `message` + `source_page` + `language`
   - `Lead Source` ← `Website`
7. Optional extra actions:
   - Send email from Zoho Mail (thank-you to customer)
   - Create CRM task: "Follow up within 24h"
   - Send Cliq/email alert to yourself
8. Turn the flow **ON**

### B2. Add webhook URL to Vercel

| Variable | Value |
|----------|-------|
| `ZOHO_FLOW_WEBHOOK_URL` | Webhook URL from Zoho Flow |

Redeploy.

> If you use **both** Method A and B, each form submit may create two CRM leads unless you disable lead creation in Flow and use Flow only for notifications/tasks.

---

## Step 4 — CRM workflows (optional, in Zoho UI)

In **Zoho CRM → Setup → Workflow Rules**:

**Example: auto thank-you email**

- **Module:** Leads
- **When:** Lead is created
- **Condition:** Lead Source = Website
- **Action:** Send email from `info@nexaipla.com`
  - Subject: `Thanks for contacting NexAIpla`
  - Body: short thank-you + "We'll reply within 24 hours"

**Example: follow-up task**

- **When:** Lead is created
- **Action:** Create task, due in 1 day, assigned to you

---

## Data sent to Zoho

| Field | Source |
|-------|--------|
| Name | Form |
| Email | Form |
| Phone | Form |
| Message | Form |
| Page | URL path (`/onlinebooking`, `/foodorder`, etc.) |
| Language | `el` or `en` |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Email works, no CRM lead | Check Vercel env vars; confirm EU vs US Zoho domain |
| `invalid oauth token` | Regenerate refresh token; verify client ID/secret |
| Duplicate leads | Use CRM API **or** Flow lead creation, not both |
| Wrong Zoho region | Cyprus/EU accounts usually use `*.zoho.eu` |
| Form still succeeds, no CRM | Expected if Zoho fails — check Vercel function logs |

---

## Environment reference

See [`.env.example`](../.env.example) for all variables.

**Minimum for Zoho CRM:**

```
ZOHO_CLIENT_ID=
ZOHO_CLIENT_SECRET=
ZOHO_REFRESH_TOKEN=
ZOHO_ACCOUNTS_URL=https://accounts.zoho.eu
ZOHO_API_DOMAIN=https://www.zohoapis.eu
```

**Optional Flow webhook:**

```
ZOHO_FLOW_WEBHOOK_URL=
```
