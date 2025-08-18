import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";
import OverlayButtons from "./components/OverlayButtons";
import Header from "./components/Header";
import OverlayButtonsMobile from "./components/OverlayButtonsMobile";
import WhyChooseUs from "./components/WhyChooseUs";
import PrivacyRefundSection from "./components/PrivacyRefundSection";
// import WebsiteChatbot from "./components/modals/WebsiteChatbot";

const App = () => {
  return (
    <div className="relative overflow-hidden scroll-smooth">
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <section className="flex items-center justify-center w-full min-h-screen">
          <HeroSection />
        </section>

        {/* Portfolio Section */}
        <section className="flex items-center justify-center w-full min-h-screen">
          <PortfolioSection />
        </section>

        {/* Why Choose Us Section */}
        <section className="flex items-center justify-center w-full min-h-screen">
          <WhyChooseUs />
        </section>

        {/* Services Section */}
        <section className="flex items-center justify-center w-full min-h-screen">
          <ServicesSection />
        </section>

        {/* Privacy & Refund Policy Section */}
        <section className="flex items-center justify-center w-full min-h-screen">
          <PrivacyRefundSection />
        </section>

        {/* Footer Section */}
        <section className="flex items-center justify-center w-full">
          <Footer />
        </section>
      </main>

      {/* Floating buttons */}
      <OverlayButtons /> {/* Desktop / Tablet */}
      <OverlayButtonsMobile /> {/* Mobile only */}
      {/* <WebsiteChatbot /> */}
    </div>
  );
};

export default App;
