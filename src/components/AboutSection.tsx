import { Brain, Rocket, Zap } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-to-br from-[#081c2b] via-[#00529B] to-[#081c2b] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00a9e0] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#CCE4F7] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              De uma diabética, para todos os diabéticos.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#00a9e0] hover:bg-white/15 transition-all duration-300" style={{
            boxShadow: '0 4px 20px rgba(0, 169, 224, 0.2), 0 0 30px rgba(0, 169, 224, 0.1)'
          }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#00a9e0] to-[#00529B] rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">A Nossa Missão</h3>
              <p className="text-gray-300 leading-relaxed">
                Fornecer apoio psicológico especializado para pacientes com DT1, abordando a lacuna crítica 
                nos cuidados de saúde mental que afeta 35.000-60.000 indivíduos em Portugal e milhões em todo o mundo.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#00a9e0] hover:bg-white/15 transition-all duration-300" style={{
            boxShadow: '0 4px 20px rgba(0, 169, 224, 0.2), 0 0 30px rgba(0, 169, 224, 0.1)'
          }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#00a9e0] to-[#00529B] rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">A Nossa Visão</h3>
              <p className="text-gray-300 leading-relaxed">
                Um mundo onde cada pessoa com Diabetes Tipo 1 tem acesso a cuidados abrangentes que abordam 
                tanto a saúde física quanto mental, reduzindo o fardo psicológico desta condição crónica.
              </p>
            </div>
          </div>

          {/* Story section with emotive image */}
          
        </div>
      </div>
    </section>;
};
export default AboutSection;