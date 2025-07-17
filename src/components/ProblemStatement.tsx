const ProblemStatement = () => {
  return <section className="py-20 bg-white px-px">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#081c2b] mb-8">O Risco de Saúde Mental na DT1</h2>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">Uma revisão sistemática publicada no Diabetes Care destacou que o 'sofrimento diabético' - o sofrimento emocional específico relacionado com a diabetes - está associado a sentimentos de frustração, exaustão e falta de controlo.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-[#00a9e0] mb-4">17-63%</div>
              <p className="text-gray-700 font-semibold">dos pacientes com DT1 experimentam ansiedade ou depressão</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-[#00529B] mb-4">14%</div>
              <p className="text-gray-700 font-semibold">dos pacientes em Portugal têm acesso a CGM avançados e bombas de insulina</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-[#081c2b] mb-4">10 anos</div>
              <p className="text-gray-700 font-semibold">menor esperança de vida para pessoas com DT1, juntamente com outras doenças</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 italic">Afetando negativamente o bem-estar emocional e a gestão da doença, a DT1 leva a um risco aumentado de problemas de saúde mental como ansiedade e depressão, e até ideação suicida e tentativas.</p>
        </div>
      </div>
    </section>;
};
export default ProblemStatement;