import HeroSection from "@/app/sections/HeroSection";
import FeaturesSection from "@/app/sections/FeaturesSection";
import WidgetSection from "@/app/sections/WidgetSection";
import ManageFeedbackSection from "@/app/sections/ManageFeedbackSection";
import ShowcaseFeedbackSection from "@/app/sections/ShowcaseFeedbackSection";
import { getWaitListCount } from "@/app/server/actions";

const Home = async () => {
  const count = await getWaitListCount();
  return (
    <main>
      <HeroSection waitListCount={count || 0} />
      <FeaturesSection />
      <WidgetSection />
      <ManageFeedbackSection />
      <ShowcaseFeedbackSection />
    </main>
  );
};

export default Home;
