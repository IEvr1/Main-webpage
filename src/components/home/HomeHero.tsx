export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container home-hero__content">
        <h1 className="home-hero__title">Έξυπνες λύσεις τεχνολογίας για την επιχείρησή σας</h1>
        <p className="home-hero__subtitle">
          Η NexAIpla δημιουργεί εφαρμογές που απλοποιούν την καθημερινότητα — από online κρατήσεις
          μέχρι αυτοματοποίηση επικοινωνίας με πελάτες.
        </p>
        <div className="home-hero__actions">
          <a href="#apps" className="btn btn-primary">
            Δείτε τις εφαρμογές
          </a>
          <a href="#contact" className="btn btn-secondary">
            Επικοινωνία
          </a>
        </div>
      </div>
    </section>
  );
}
