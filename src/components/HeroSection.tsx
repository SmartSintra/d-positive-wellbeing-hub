import { Button } from "@/components/ui/button";
import { Rocket, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/20"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
          D+Positive
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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