import { Button } from "@/components/ui/button";
import { Rocket, Brain } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#081c2b] via-[#00529B] to-[#081c2b] overflow-hidden pt-20 pb-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00a9e0] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#CCE4F7] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#00529B] rounded-full filter blur-2xl animate-pulse delay-500"></div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a9e0] to-[#CCE4F7] relative">
                  Companheiro Emocional Inteligente
                </span>{" "}
                para Gestão de Diabetes Tipo 1
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed animate-fade-in delay-300 text-left md:text-xl">O D+Positive aborda a lacuna crítica no apoio psicológico para pacientes com DT1, oferecendo recursos especializados de saúde mental e orientação emocional.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start items-start animate-fade-in delay-500">
                <Button size="lg" className="bg-gradient-to-br from-[#00a9e0] to-[#00529B] hover:from-[#00529B] hover:to-[#081c2b] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-[#00a9e0]/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/0">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <span>Participar no Programa Beta</span>
                </Button>
              </div>
            </div>

            {/* Floating emotive image */}
            <div className="lg:col-span-4 lg:col-start-9 flex justify-center animate-fade-in delay-700">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#00a9e0]/30 shadow-2xl">
                  <img alt="AI and emotional wellness technology" className="w-full h-full object-cover" src="/lovable-uploads/df27c842-90e7-4681-8b2c-8a3fca123068.png" />
                </div>
                
                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#00a9e0] rounded-full opacity-100 animate-bounce flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#00529B] rounded-full opacity-100 animate-bounce delay-1000 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-8 -left-8 w-8 h-8 bg-[#CCE4F7] rounded-full opacity-100 animate-pulse"></div>
                <div className="absolute bottom-8 -right-8 w-6 h-6 bg-[#00a9e0] rounded-full opacity-100 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator - soft and simple */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#00a9e0] rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-[#00a9e0] rounded-full mt-2 animate-pulse"></div>
          <div className="absolute -bottom-8 text-[#00a9e0] text-sm">Deslizar</div>
        </div>
      </div>
    </section>;
};
export default HeroSection;