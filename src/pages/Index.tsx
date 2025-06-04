
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import ProblemStatement from "@/components/ProblemStatement";
import AnxietyGlucoseConnection from "@/components/AnxietyGlucoseConnection";
import SolutionOverview from "@/components/SolutionOverview";
import AppMockup3D from "@/components/AppMockup3D";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Testimonials />
      <ProblemStatement />
      <AnxietyGlucoseConnection />
      <SolutionOverview />
      <AppMockup3D />
      <AboutSection />
      <CallToAction />
      <ContactSection />
    </div>
  );
};

export default Index;
