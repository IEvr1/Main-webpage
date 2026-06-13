const base = import.meta.env.BASE_URL;

const screenshots = [
  {
    src: `${base}landing/screenshot-chat.svg`,
    caption: 'Διεπαφή chat κράτησης',
    alt: 'Οθόνη chat για online κράτηση ραντεβού',
  },
  {
    src: `${base}landing/screenshot-dashboard.svg`,
    caption: 'Dashboard επιχείρησης',
    alt: 'Πίνακας ελέγχου με ραντεβού και KPIs',
  },
  {
    src: `${base}landing/screenshot-sms.svg`,
    caption: 'SMS επιβεβαίωση',
    alt: 'Μήνυμα SMS με link διαχείρισης ραντεβού',
  },
];

export default function Screenshots() {
  return (
    <section className="screenshots-section" aria-labelledby="screenshots-title">
      <div className="container">
        <h2 id="screenshots-title" className="section-title">
          Ρίξτε μια ματιά
        </h2>
        <p className="section-subtitle">
          Από την εμπειρία του πελάτη μέχρι τα εργαλεία διαχείρισης της επιχείρησής σας.
        </p>

        <div className="screenshots-grid">
          {screenshots.map((shot) => (
            <figure key={shot.src} className="screenshot-item">
              <div className="screenshot-item__frame">
                <img src={shot.src} alt={shot.alt} loading="lazy" width={360} height={640} />
              </div>
              <figcaption className="screenshot-item__caption">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
