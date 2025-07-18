import { Button } from "@/components/ui/button";
import { Rocket, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/lovable-uploads/b83df072-8441-4a94-ac4b-29129a596cf1.png" alt="D+Positive Background" className="w-full h-full object-cover" />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          D+Positive
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          O teu companheiro emocional para a Diabetes Tipo 1
        </p>
      </div>
      
      {/* Enhanced scroll indicator - soft and simple */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        
      </div>
    </section>
  );
};

export default HeroSection;