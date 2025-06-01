
import { Button } from "@/components/ui/button";
import { Rocket, Bell } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#18143C] via-[#2a1f4f] to-[#18143C] overflow-hidden pt-20 pb-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#8B5CF6] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#B86DFE] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#8B5CF6] rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Emotive Background Images */}
      <div className="absolute inset-0 opacity-5">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop" alt="AI technology and wellness" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Unique diagonal layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 lg:col-start-1 space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in lg:text-5xl text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#B86DFE] relative">
                  AI-Powered Emotional Companion
                </span>{" "}
                for Type 1 Diabetes Management
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed animate-fade-in delay-300 text-left md:text-xl">D+Positive addresses the critical gap in psychological support for T1D patients, offering specialized mental health resources and emotional guidance.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start items-start animate-fade-in delay-500">
                <Button size="lg" className="bg-gradient-to-br from-[#B86DFE] to-[#18143C] hover:from-[#a05ce6] hover:to-[#0f0e1a] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-[#B86DFE]/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <Rocket className="w-5 h-5" />
                  <span>Join Our Beta Program</span>
                </Button>
              </div>
            </div>

            {/* Floating emotive image */}
            <div className="lg:col-span-4 lg:col-start-9 flex justify-center animate-fade-in delay-700">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#8B5CF6]/30 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center" alt="AI and emotional wellness technology" className="w-full h-full object-cover" />
                </div>
                
                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#B86DFE] rounded-full opacity-100 animate-bounce flex items-center justify-center">
                  <span className="text-white text-2xl">💙</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#8B5CF6] rounded-full opacity-100 animate-bounce delay-1000 flex items-center justify-center">
                  <span className="text-white text-lg">✨</span>
                </div>
                <div className="absolute top-8 -left-8 w-8 h-8 bg-[#B86DFE] rounded-full opacity-100 animate-pulse"></div>
                <div className="absolute bottom-8 -right-8 w-6 h-6 bg-[#8B5CF6] rounded-full opacity-100 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator - soft and simple */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#8B5CF6] rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-[#8B5CF6] rounded-full mt-2 animate-pulse"></div>
          <div className="absolute -bottom-8 text-[#8B5CF6] text-sm">Scroll</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
