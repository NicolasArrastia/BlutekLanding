import Header from "./components/Header";
import AboutUsSection from "./sections/AboutUsSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";
import ProcessSection from "./sections/ProcessSection";
import ServicesSection from "./sections/ServicesSection";

const App = () => {
  return (
    <div className="[&>section]:flex [&>section]:flex-col [&>section]:items-center [&>section]:py-20 [&>section]:px-5">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default App;
