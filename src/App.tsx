import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUsSection from "./sections/AboutUsSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";
import ProcessSection from "./sections/ProcessSection";
import ServicesSection from "./sections/ServicesSection";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
