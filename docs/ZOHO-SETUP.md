# Zoho lead automation setup — NexAIpla

This guide connects the website contact form to **Zoho Mail**, **Zoho CRM**, and optionally **Zoho Flow**.

**What happens after setup:**

```
Visitor submits form on nexaipla.com
        ↓
Vercel API (/api/contact)
        ↓
   ┌────┴────┐
   ↓         ↓
Web3Forms   Zoho CRM (+ optional Zoho Flow)
   ↓
Email to info@nexaipla.com (Zoho Mail inbox)
```

The customer still gets the normal success message even if Zoho sync fails. Email via Web3Forms is the primary channel; Zoho is added on top.

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

1. In the API Console, open your client
2. **Generate Code** with scope:
   ```
   ZohoCRM.modules.leads.CREATE,ZohoCRM.modules.leads.READ
   ```
3. Approve access and copy the **grant token** (valid ~2 minutes)
4. Exchange it for a refresh token:

```bash
curl -X POST "https://accounts.zoho.eu/oauth/v2/token" \
  -d "grant_type=authorization_code" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=https://www.nexaipla.com" \
  -d "code=YOUR_GRANT_TOKEN"
```

5. Save the `refresh_token` from the response (it does not expire unless revoked)

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

Redeploy after saving.

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
