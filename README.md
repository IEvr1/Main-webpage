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

Η φόρμα στέλνει μηνύματα στο `info@nexaipla.com` μέσω [Web3Forms](https://web3forms.com) και Vercel serverless function ([`api/contact.ts`](api/contact.ts)).

1. Δημιουργήστε λογαριασμό στο Web3Forms με το email `info@nexaipla.com`
2. Αντιγράψτε το access key
3. Προσθέστε το στο Vercel: **Settings → Environment Variables → `WEB3FORMS_ACCESS_KEY`**
4. Κάντε redeploy

Για τοπικό testing με API: `npx vercel dev` (το `npm run dev` χρησιμοποιεί fallback mailto όταν το API δεν είναι διαθέσιμο).

### SEO automation

- **Internal links:** κάθε σελίδα προϊόντος εμφανίζει `RelatedApps` με συνδέσμους προς άλλες εφαρμογές
- **Sitemap:** ανανεώνεται αυτόματα στο `npm run build` (`scripts/generate-sitemap.mjs`)
- **GA4:** προαιρετικά — ορίστε `VITE_GA_MEASUREMENT_ID` στο Vercel (π.χ. `G-XXXXXXXXXX`)
- **CI:** `npm run seo:check` ελέγχει meta tags και sitemap (GitHub Actions)

### Zoho lead automation (CRM)

Μετά την αποστολή email μέσω Web3Forms, η φόρμα μπορεί να δημιουργεί αυτόματα lead στο **Zoho CRM** (και προαιρετικά να καλεί **Zoho Flow** για επιπλέον ενέργειες).

Οδηγίες ρύθμισης: [`docs/ZOHO-SETUP.md`](docs/ZOHO-SETUP.md)

Σύντομα:

1. Δημιουργήστε OAuth client στο [Zoho API Console](https://api-console.zoho.eu)
2. Προσθέστε στο Vercel: `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN`
3. (Προαιρετικά) Ρυθμίστε φίλτρο στο Zoho Mail για φάκελο **Website Leads**
4. Redeploy

## Σύνδεση με chat app

Το κουμπί «Δοκιμή demo» δείχνει στο `/chat`. Συνδέστε το chat app στο ίδιο domain ή αλλάξτε το href στο [`src/components/Hero.tsx`](src/components/Hero.tsx).
