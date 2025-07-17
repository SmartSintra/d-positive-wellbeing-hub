import { Brain, Activity, Heart, Smartphone, Calendar, Shield } from "lucide-react";

const SolutionOverview = () => {
  const features = [{
    icon: Brain,
    title: "Apoio psicológico de emergência específico para DT1",
    description: "IA especializada treinada em DT1 para picos e quedas críticas e eventos stressantes"
  }, {
    icon: Activity,
    title: "Monitorização psicossomática",
    description: "Acompanhar padrões emocionais juntamente com condições físicas para compreender como a glicose reage aos seus estados emocionais"
  }, {
    icon: Heart,
    title: "Estratégias de adaptação à saúde mental",
    description: "Estratégias baseadas em evidência para gerir a ansiedade e depressão relacionadas com a DT1"
  }, {
    icon: Smartphone,
    title: "(Beta) Integração com leituras CGM em tempo real",
    description: "Futura conexão com sistemas CGM que melhora a relação e resposta ao acompanhamento emocional e da glicose"
  }, {
    icon: Calendar,
    title: "Apoio emocional diário",
    description: "Orientação contínua para gerir o fardo psicológico dos cuidados com a DT1"
  }, {
    icon: Shield,
    title: "Abordagem de privacidade em primeiro lugar",
    description: "Os seus dados de saúde mental mantêm-se seguros e confidenciais e partilha os seus dados com o seu médico e equipa médica em segurança"
  }];

  return <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#081c2b] mb-6">
              Apresentando o D+Positive
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A primeira plataforma de apoio emocional com IA especificamente desenhada para pacientes com Diabetes Tipo 1, 
              abordando a lacuna crítica nos cuidados psicológicos que afeta milhares em Portugal e milhões em todo o mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#00a9e0] relative overflow-hidden" style={{
              boxShadow: '0 4px 20px rgba(0, 169, 224, 0.15), 0 0 20px rgba(0, 169, 224, 0.1)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(0, 169, 224, 0.02) 100%)'
            }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a9e0]/5 to-transparent opacity-50"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00a9e0] to-[#00529B] rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#081c2b] mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};

export default SolutionOverview;