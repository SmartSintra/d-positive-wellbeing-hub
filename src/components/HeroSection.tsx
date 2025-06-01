
import { Button } from "@/components/ui/button";
import { Rocket, ArrowDown, Heart } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById('problem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#18143C] via-[#2a1f4f] to-[#18143C] overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#8B5CF6] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#B86DFE] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#8B5CF6] rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop" alt="AI technology and wellness" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Main Headline */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-[#8B5CF6]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#8B5CF6]/30">
                  <Heart className="w-4 h-4 text-[#B86DFE]" />
                  <span className="text-[#B86DFE] text-sm font-medium">Mental Health for T1D Patients</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white leading-tight animate-fade-in">
                  Finally, Mental Health Support 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#B86DFE] block">
                    Built for Type 1 Diabetes
                  </span>
                </h1>
              </div>
              
              {/* Value Proposition */}
              <div className="space-y-4 animate-fade-in delay-300">
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  <strong className="text-white">D+Positive</strong> is the first AI companion specifically designed for the unique psychological challenges of living with Type 1 Diabetes.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#B86DFE] rounded-full"></div>
                    <span className="text-gray-300">24/7 emotional support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#B86DFE] rounded-full"></div>
                    <span className="text-gray-300">T1D-specific guidance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#B86DFE] rounded-full"></div>
                    <span className="text-gray-300">Evidence-based strategies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#B86DFE] rounded-full"></div>
                    <span className="text-gray-300">Privacy-first approach</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-500">
                <Button size="lg" className="bg-gradient-to-br from-[#B86DFE] to-[#18143C] hover:from-[#a05ce6] hover:to-[#0f0e1a] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-[#B86DFE]/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <Rocket className="w-5 h-5" />
                  <span>Join Our Beta Program</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToNext}
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent flex items-center space-x-2"
                >
                  <span>Learn Why This Matters</span>
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="text-sm text-gray-400 animate-fade-in delay-700">
                <p>🔒 Your data stays private • 🇵🇹 Made for Portuguese T1D community • 🆓 Free during beta</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 flex justify-center animate-fade-in delay-700">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#8B5CF6]/30 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center" alt="AI emotional wellness for diabetes" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#B86DFE] rounded-full opacity-60 animate-bounce flex items-center justify-center">
                  <span className="text-white text-2xl">💙</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#8B5CF6] rounded-full opacity-60 animate-bounce delay-1000 flex items-center justify-center">
                  <span className="text-white text-lg">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
      >
        <div className="w-6 h-10 border-2 border-[#8B5CF6] rounded-full flex justify-center relative group-hover:border-[#B86DFE] transition-colors">
          <div className="w-1 h-3 bg-[#8B5CF6] rounded-full mt-2 animate-pulse group-hover:bg-[#B86DFE] transition-colors"></div>
        </div>
        <div className="text-[#8B5CF6] text-sm mt-2 group-hover:text-[#B86DFE] transition-colors">Learn More</div>
      </button>
    </section>
  );
};

export default HeroSection;
