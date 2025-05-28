
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionOverview from "@/components/SolutionOverview";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemStatement />
      <SolutionOverview />
      <Testimonials />
      <CallToAction />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
