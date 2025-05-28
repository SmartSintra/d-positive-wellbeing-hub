
import { Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#18143C] via-[#2a1f4f] to-[#18143C] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#3ED3FE] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#B86DFE] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About D+Positive
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Born from personal experience, built with community insight, powered by cutting-edge AI
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
              <div className="w-16 h-16 bg-gradient-to-br from-[#3ED3FE] to-[#B86DFE] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To bridge the gap between excellent diabetes management and mental health support, 
                ensuring no T1D individual faces their emotional challenges alone.
              </p>
            </div>

            {/* Team Card */}
            <div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#B86DFE] hover:bg-white/15 transition-all duration-300"
              style={{
                boxShadow: '0 4px 20px rgba(184, 109, 254, 0.2), 0 0 30px rgba(184, 109, 254, 0.1)',
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#3ED3FE] to-[#B86DFE] rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Team</h3>
              <p className="text-gray-300 leading-relaxed">
                A multidisciplinary team including diabetes educators, mental health professionals, 
                AI researchers, and T1D individuals who understand the challenges firsthand.
              </p>
            </div>

            {/* Vision Card */}
            <div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#B86DFE] hover:bg-white/15 transition-all duration-300"
              style={{
                boxShadow: '0 4px 20px rgba(184, 109, 254, 0.2), 0 0 30px rgba(184, 109, 254, 0.1)',
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#3ED3FE] to-[#B86DFE] rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where every person with Type 1 Diabetes has access to compassionate, 
                intelligent mental health support that empowers them to live their fullest life.
              </p>
            </div>
          </div>

          {/* Story section with emotive image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Our Story</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                D+Positive was born from a deeply personal journey with Type 1 Diabetes. 
                Our founder recognized the gap between excellent diabetes management tools 
                and mental health support tailored specifically for the T1D community.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that managing diabetes isn't just about blood sugar levels—it's about 
                thriving mentally and emotionally while living with a chronic condition. Our AI-powered 
                platform provides the emotional intelligence and support that makes this possible.
              </p>
              <div 
                className="bg-gradient-to-r from-[#3ED3FE]/20 to-[#B86DFE]/20 p-6 rounded-2xl border border-[#B86DFE]/30"
                style={{
                  boxShadow: '0 4px 20px rgba(184, 109, 254, 0.15), 0 0 20px rgba(62, 211, 254, 0.1)',
                }}
              >
                <h4 className="font-bold text-white mb-2">Built with empathy</h4>
                <p className="text-gray-300">
                  Every feature is designed with input from the T1D community, 
                  ensuring authentic support that truly resonates with users' experiences.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=600&fit=crop&crop=center" 
                  alt="Team collaboration and innovation" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#3ED3FE]/20 rounded-full animate-pulse"></div>
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
