import { Button } from "@/components/ui/button";
import { Rocket, Brain } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full screen hero image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/6e14c12d-868a-4ea1-9faa-e5c5293f8249.png" 
          alt="D+Positive - O companheiro emocional para quem vive com Diabetes Tipo 1" 
          className="w-full h-full object-contain" 
        />
      </div>
      
      {/* Enhanced scroll indicator - soft and simple */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#00a9e0] rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-[#00a9e0] rounded-full mt-2 animate-pulse"></div>
          <div className="absolute -bottom-8 text-[#00a9e0] text-sm">Deslizar</div>
        </div>
      </div>
    </section>;
};
export default HeroSection;