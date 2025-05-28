
const ProblemStatement = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] mb-8">
            Addressing the Mental Health Challenges of T1D
          </h2>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Living with Type 1 Diabetes presents unique psychological challenges that often go unaddressed. 
            The constant monitoring, fear of complications, and lifestyle restrictions can lead to significant mental health burdens.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-[#B86DFE] mb-4">40%</div>
              <p className="text-gray-700 font-semibold">of T1D patients experience depression</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-[#3ED3FE] mb-4">25%</div>
              <p className="text-gray-700 font-semibold">suffer from diabetes-related anxiety</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-[#18143C] mb-4">60%</div>
              <p className="text-gray-700 font-semibold">report diabetes distress affecting daily life</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 italic">
            "The psychological impact of T1D is often overlooked, yet it significantly affects treatment adherence and quality of life."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
