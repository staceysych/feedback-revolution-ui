import HeroSection from "@/app/sections/HeroSection";
import FeaturesSection from "@/app/sections/FeaturesSection";
import WidgetSection from "@/app/sections/WidgetSection";
import ManageFeedbackSection from "@/app/sections/ManageFeedbackSection";
import ShowcaseFeedbackSection from "@/app/sections/ShowcaseFeedbackSection";
import PricingFree from "./components/PricingFree/PricingFree";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <WidgetSection />
      <ManageFeedbackSection />
      <ShowcaseFeedbackSection />
      <PricingFree />

    </main>
  );
};

export default Home;
