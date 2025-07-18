import { Rocket, Brain } from "lucide-react";
const Testimonials = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] text-center mb-16">Porquê D+Positive?</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Large Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="Living with Type 1 Diabetes - Personal journey" className="w-full h-full object-cover" src="/lovable-uploads/3d0411be-8027-4071-abcf-9a960c898069.jpg" />
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#B86DFE] rounded-full opacity-80 animate-bounce flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#8B5CF6] rounded-full opacity-80 animate-bounce delay-1000 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                
                
                <div className="text-lg text-gray-700 leading-relaxed">
                  <p className="text-base font-normal">Viver com Diabetes Tipo 1 há mais de 16 anos ensinou-me que gerir números é apenas uma parte da história — o peso emocional é igualmente constante. Apesar de ter acesso a um dos tratamentos mais avançados, enfrentei os mesmos ciclos mentais, frustrações e medos silenciosos que não aparecem num gráfico de glicose.

Foi por isso que criei a D+Positive — não apenas como uma ferramenta, mas como um aliado emocional para quem vive com DT1. Porque e se gerir a diabetes também for sobre sentirmo-nos compreendidos, apoiados e um pouco mais humanos a cada dia? Acredito que viver com diabetes pode realmente ser mais positivo — e é essa visão e esperança que quero partilhar com o mundo.</p>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-bold text-[#18143C] text-xl">Beatriz Miranda</p>
                  <p className="text-lg text-violet-500">Founder & Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;