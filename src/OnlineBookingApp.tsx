import Header from './components/Header';
import Hero from './components/Hero';
import DemoVideo from './components/DemoVideo';
import Benefits from './components/Benefits';
import Screenshots from './components/Screenshots';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function OnlineBookingApp() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <DemoVideo />
        <Benefits />
        <Screenshots />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
