
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PricePageHeader from "@/components/prices/PricePageHeader";
import PriceInfoSection from "@/components/prices/PriceInfoSection";
import PriceTabsSection from "@/components/prices/PriceTabsSection";
import CallToAction from "@/components/prices/CallToAction";

const Prices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <PricePageHeader />
        <PriceInfoSection />
        <PriceTabsSection />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Prices;
