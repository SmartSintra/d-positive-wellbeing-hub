
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionOverview from "@/components/SolutionOverview";
import AnxietyGlucoseConnection from "@/components/AnxietyGlucoseConnection";
import AppMockup3D from "@/components/AppMockup3D";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemStatement />
      <SolutionOverview />
      <AnxietyGlucoseConnection />
      <AppMockup3D />
      <Testimonials />
      <CallToAction />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
