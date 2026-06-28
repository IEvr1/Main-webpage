# Booking App — Marketing Webpage

Επαγγελματική landing page για την προώθηση της εφαρμογής online κρατήσεων (chat + SMS).

## Εκκίνηση

```bash
npm install
npm run dev
```

Ανοίγει στο [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Τα static αρχεία βρίσκονται στον φάκελο `dist/`.

## Δομή σελίδας

1. **Hero** — τίτλος, υπότιτλος, CTAs (demo → `/chat`, επικοινωνία → `#contact`)
2. **Demo video** — responsive 16:9 player ή placeholder
3. **Οφέλη** — 3 κάρτες με icons
4. **Screenshots** — gallery με lazy loading
5. **Επικοινωνία** — φόρμα με validation + αποστολή email στο info@nexaipla.com

## Αντικατάσταση assets

Τοποθετήστε τα δικά σας αρχεία στον φάκελο `public/landing/`:

| Αρχείο | Περιγραφή |
|---|---|
| `demo.mp4` | Demo video (όταν προστεθεί, εμφανίζεται αυτόματα αντί για placeholder) |
| `demo-poster.jpg` | Poster image για το video (ενημερώστε το path στο `DemoVideo.tsx`) |
| `screenshot-chat.png` | Screenshot chat UI |
| `screenshot-dashboard.png` | Screenshot dashboard |
| `screenshot-sms.png` | Screenshot SMS επιβεβαίωσης |

Μετά την αντικατάσταση, ενημερώστε τα paths στα components `DemoVideo.tsx` και `Screenshots.tsx` αν χρησιμοποιείτε `.jpg`/`.png` αντί για τα τρέχοντα `.svg` placeholders.

## Επικοινωνία — ρύθμιση

Τα στοιχεία επικοινωνίας βρίσκονται στο [`src/constants/contact.ts`](src/constants/contact.ts).

### Αποστολή email από τη φόρμα

Η φόρμα στέλνει μηνύματα στο `info@nexaipla.com` μέσω **Zoho Mail API** στο [`api/contact.ts`](api/contact.ts) (server-side). Παράλληλα δημιουργεί lead στο Zoho CRM και καλεί προαιρετικά Zoho Flow.

1. Ρυθμίστε Zoho CRM + Mail — [`docs/ZOHO-SETUP.md`](docs/ZOHO-SETUP.md)
2. Δημιουργήστε refresh token με scopes CRM **και** Mail:
   ```bash
   npm run zoho:token -- --write
   ```
3. Προσθέστε στο Vercel (Production + Preview):
   - `ZOHO_*` credentials
   - `CONTACT_NOTIFY_EMAIL=info@nexaipla.com`
   - `ZOHO_MAIL_API_DOMAIN=https://mail.zoho.eu`
4. Κάντε redeploy

> **Σημείο:** Το Web3Forms αντικαταστάθηκε — τα emails από `notify@web3forms.com` συχνά δεν φτάνουν στο Zoho Mail (spam/bounce). Η αποστολή γίνεται πλέον απευθείας από το Zoho Mail σας.

Για τοπικό testing με API: `npx vercel dev` (το `npm run dev` ανοίγει mailto fallback όταν το API δεν είναι διαθέσιμο).

### SEO automation

- **Internal links:** κάθε σελίδα προϊόντος εμφανίζει `RelatedApps` με συνδέσμους προς άλλες εφαρμογές
- **Sitemap:** ανανεώνεται αυτόματα στο `npm run build` (`scripts/generate-sitemap.mjs`)
- **GA4:** προαιρετικά — ορίστε `VITE_GA_MEASUREMENT_ID` στο Vercel (π.χ. `G-XXXXXXXXXX`)
- **CI:** `npm run seo:check` ελέγχει meta tags και sitemap (GitHub Actions)

### Zoho lead automation (CRM)

Μετά την αποστολή email μέσω Web3Forms, η φόρμα μπορεί να δημιουργεί αυτόματα lead στο **Zoho CRM** (και προαιρετικά να καλεί **Zoho Flow** για επιπλέον ενέργειες).

Οδηγίες ρύθμισης: [`docs/ZOHO-SETUP.md`](docs/ZOHO-SETUP.md)

Σύντομα:

1. Δημιουργήστε OAuth client στο [Zoho API Console](https://api-console.zoho.eu) (Server-based)
2. Προσθέστε στο `.env`: `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`
3. Τρέξτε `npm run zoho:token` για να πάρετε το `ZOHO_REFRESH_TOKEN` (browser + paste code)
4. Προσθέστε τις ίδιες μεταβλητές στο Vercel και κάντε redeploy

## Σύνδεση με chat app

Το κουμπί «Δοκιμή demo» δείχνει στο `/chat`. Συνδέστε το chat app στο ίδιο domain ή αλλάξτε το href στο [`src/components/Hero.tsx`](src/components/Hero.tsx).
