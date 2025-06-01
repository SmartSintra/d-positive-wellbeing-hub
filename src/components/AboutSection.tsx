
import { Brain, Rocket, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#18143C] via-[#2a1f4f] to-[#18143C] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#B86DFE] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About D+Positive
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Addressing the urgent need for psychological support in Type 1 Diabetes care
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Mission Card */}
            <div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#B86DFE] hover:bg-white/15 transition-all duration-300"
              style={{
                boxShadow: '0 4px 20px rgba(184, 109, 254, 0.2), 0 0 30px rgba(184, 109, 254, 0.1)',
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#B86DFE] to-[#18143C] rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide specialized psychological support for T1D patients, addressing the critical gap 
                in mental health care that affects 35,000-60,000 individuals in Portugal and millions worldwide.
              </p>
            </div>

            {/* Team Card */}
            <div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#B86DFE] hover:bg-white/15 transition-all duration-300"
              style={{
                boxShadow: '0 4px 20px rgba(184, 109, 254, 0.2), 0 0 30px rgba(184, 109, 254, 0.1)',
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#B86DFE] to-[#18143C] rounded-full flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Portuguese and international experts in endocrinology, psychology, AI research, 
                and individuals living with T1D who understand the daily emotional challenges firsthand.
              </p>
            </div>

            {/* Vision Card */}
            <div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#B86DFE] hover:bg-white/15 transition-all duration-300"
              style={{
                boxShadow: '0 4px 20px rgba(184, 109, 254, 0.2), 0 0 30px rgba(184, 109, 254, 0.1)',
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#B86DFE] to-[#18143C] rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where every person with Type 1 Diabetes has access to comprehensive care that addresses 
                both physical and mental health, reducing the psychological burden of this chronic condition.
              </p>
            </div>
          </div>

          {/* Story section with emotive image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Addressing a Critical Gap</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Despite affecting thousands of Portuguese citizens and millions globally, Type 1 Diabetes patients 
                face significant mental health challenges with limited access to specialized psychological support. 
                Studies show that 17-63% experience anxiety or depression related to their condition.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                D+Positive was created to fill this urgent need, providing AI-powered emotional support 
                specifically designed for the unique psychological challenges of living with T1D. 
                Our platform offers the specialized care that has been missing from traditional diabetes management.
              </p>
              <div 
                className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#B86DFE]/20 p-6 rounded-2xl border border-[#B86DFE]/30"
                style={{
                  boxShadow: '0 4px 20px rgba(184, 109, 254, 0.15), 0 0 20px rgba(139, 92, 246, 0.1)',
                }}
              >
                <h4 className="font-bold text-white mb-2">Evidence-based approach</h4>
                <p className="text-gray-300">
                  Our solution is grounded in research showing the substantial psychological burden T1D patients face, 
                  including increased risks of cardiovascular disease, kidney failure, and reduced life expectancy.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=600&fit=crop&crop=center" 
                  alt="Healthcare innovation and research" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8B5CF6]/20 rounded-full animate-pulse"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#B86DFE]/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
