export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="hero__title">
          Online κρατήσεις κομμωτηρίου μέσω chat — με SMS επιβεβαίωση
        </h1>
        <p className="hero__subtitle">
          Σκανάρετε QR, κλείστε ραντεβού μέσω chat, επιλέξτε υπηρεσία, τεχνικό και
          ώρα — και διαχειριστείτε το ραντεβού σας από link στο SMS.
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
