
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionOverview from "@/components/SolutionOverview";
import AppMockup3D from "@/components/AppMockup3D";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Testimonials />
      <ProblemStatement />
      <SolutionOverview />
      <AppMockup3D />
      <AboutSection />
      <CallToAction />
    </div>
  );
};

export default Index;
