import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WhyChooseUs from "./sections/WhyChooseUs";
import Products from "./sections/Products";
import Innovation from "./sections/Innovation";
import Industries from "./sections/Industries";
import Challenges from "./sections/Challenges";
import Sustainability from "./sections/Sustainability";
import FutureExpansion from "./sections/FutureExpansion";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import VideoSection from "./sections/VideoSection";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <VideoSection />
      <Products />
      <Innovation />
      <Industries />
      <Challenges />
      <Sustainability />
      <FutureExpansion />
      <Contact />
      <ScrollProgress />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;