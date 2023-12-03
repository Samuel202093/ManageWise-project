import FAQ from "./components/FAQ/FAQ.JSX";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero-Section/HeroSection";
import Integration from "./components/Integration/Integration";
import MoreFeatures from "./components/More-Features/MoreFeatures";
import Navbar from "./components/Navbar/Navbar";
import PremierFeature from "./components/Premier-Features/PremierFeature";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import TryitOut from "./components/Try-It-Out/TryitOut";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PremierFeature />
      <MoreFeatures />
      <Integration />
      <FAQ />
      <Pricing />
      <Testimonials />
      <TryitOut />
      <Footer />
    </>
  );
}

export default App;
