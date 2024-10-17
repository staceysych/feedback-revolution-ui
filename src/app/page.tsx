import HeroSection from "@/app/sections/HeroSection";
import FeaturesSection from "@/app/sections/FeaturesSection";
import WidgetSection from "@/app/sections/WidgetSection";
import ManageFeedback from "@/app/sections/ManageFeedback";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <WidgetSection />
      <ManageFeedback />
    </main>
  );
}
