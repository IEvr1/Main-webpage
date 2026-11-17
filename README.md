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
5. **Επικοινωνία** — φόρμα με validation + αποστολή email στο support@nexaipla.com

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

Η φόρμα στέλνει μηνύματα στο `support@nexaipla.com` μέσω **Resend** στο [`api/contact.ts`](api/contact.ts) (server-side). Στέλνει ειδοποίηση στην ομάδα και αυτόματη απάντηση στον επισκέπτη.

1. Επαληθεύστε το domain `nexaipla.com` στο [Resend](https://resend.com) ώστε η αποστολή να γίνεται από `support@nexaipla.com`.
2. Προσθέστε στο `.env` και στο Vercel (Production + Preview + Development):
   - `RESEND_API_KEY`
   - `CONTACT_NOTIFY_EMAIL=support@nexaipla.com`
   - `CONTACT_FROM_EMAIL=support@nexaipla.com`
3. Κάντε redeploy

Για τοπικό testing με API: `npx vercel dev` (το `npm run dev` ανοίγει mailto fallback όταν το API δεν είναι διαθέσιμο).

### SEO automation

- **Internal links:** κάθε σελίδα προϊόντος εμφανίζει `RelatedApps` με συνδέσμους προς άλλες εφαρμογές
- **Sitemap:** ανανεώνεται αυτόματα στο `npm run build` (`scripts/generate-sitemap.mjs`)
- **GA4:** προαιρετικά — ορίστε `VITE_GA_MEASUREMENT_ID` στο Vercel (π.χ. `G-XXXXXXXXXX`)
- **CI:** `npm run seo:check` ελέγχει meta tags και sitemap (GitHub Actions)

## Σύνδεση με chat app

Το κουμπί «Δοκιμή demo» δείχνει στο `/chat`. Συνδέστε το chat app στο ίδιο domain ή αλλάξτε το href στο [`src/components/Hero.tsx`](src/components/Hero.tsx).
