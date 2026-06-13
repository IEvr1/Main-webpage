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
5. **Επικοινωνία** — φόρμα με client-side validation + mailto

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

Επεξεργαστείτε τα στοιχεία στο [`src/constants/contact.ts`](src/constants/contact.ts):

```ts
export const CONTACT = {
  email: 'info@example.com',
  phone: '+30 210 000 0000',
} as const;
```

## Σύνδεση με chat app

Το κουμπί «Δοκιμή demo» δείχνει στο `/chat`. Συνδέστε το chat app στο ίδιο domain ή αλλάξτε το href στο [`src/components/Hero.tsx`](src/components/Hero.tsx).
