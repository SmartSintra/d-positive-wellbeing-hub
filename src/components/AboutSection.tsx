import { Brain, Rocket, Zap } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-to-br from-[#18143C] via-[#2a1f4f] to-[#18143C] relative overflow-hidden">
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
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#B86DFE] hover:bg-white/15 transition-all duration-300" style={{
            boxShadow: '0 4px 20px rgba(184, 109, 254, 0.2), 0 0 30px rgba(184, 109, 254, 0.1)'
          }}>
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
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#B86DFE] hover:bg-white/15 transition-all duration-300" style={{
            boxShadow: '0 4px 20px rgba(184, 109, 254, 0.2), 0 0 30px rgba(184, 109, 254, 0.1)'
          }}>
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
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#B86DFE] hover:bg-white/15 transition-all duration-300" style={{
            boxShadow: '0 4px 20px rgba(184, 109, 254, 0.2), 0 0 30px rgba(184, 109, 254, 0.1)'
          }}>
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
          
        </div>
      </div>
    </section>;
};
export default AboutSection;