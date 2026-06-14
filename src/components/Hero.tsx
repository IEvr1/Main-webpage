export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="hero__title">
          Online Γραφέας 24/7 — με SMS επιβεβαίωση και υπενθύμιση
        </h1>
        <p className="hero__subtitle">
          Σκανάρετε QR, κλείστε ραντεβού μέσω chat και διαχειριστείτε την κράτησή σας
          από link στο SMS. Ιδανικό για κάθε επιχείρηση που δουλεύει με ραντεβού.
        </p>
        <div className="hero__actions">
          <a href="/chat" className="btn btn-primary">
            Δοκιμή demo
          </a>
          <a href="#contact" className="btn btn-secondary">
            Επικοινωνία
          </a>
        </div>
      </div>
    </section>
  );
}
