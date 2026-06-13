import Header from './components/Header';
import HomeHero from './components/home/HomeHero';
import AppCards from './components/home/AppCards';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomeApp() {
  return (
    <>
      <Header />
      <HomeHero />
      <main>
        <AppCards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
