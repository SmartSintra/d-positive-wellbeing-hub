import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return <section className="py-20 bg-gradient-to-br from-[#081c2b] via-[#00529B] to-[#081c2b] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#00a9e0] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[#CCE4F7] rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ajude a Transformar os Cuidados de Saúde Mental da DT1 em Portugal
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Seja um dos primeiros a aceder ao apoio psicológico especializado desenhado para a comunidade DT1. 
            Juntos, podemos abordar a lacuna de saúde mental que afeta milhares de pacientes portugueses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-br from-[#00a9e0] to-[#00529B] hover:from-[#00529B] hover:to-[#081c2b] text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-[#00a9e0]/50 transition-all duration-300 hover:scale-105">
              Inscrever-se Agora
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent">
              Saber Mais
            </Button>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default CallToAction;