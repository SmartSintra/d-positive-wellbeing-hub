

const ProblemStatement = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] mb-8">
            The Hidden Mental Health Crisis in T1D Care
          </h2>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            With over 8 million people worldwide living with Type 1 Diabetes, the psychological burden remains largely unaddressed. 
            In Portugal alone, 35,000-60,000 individuals face daily emotional challenges while managing this chronic condition.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-[#B86DFE] mb-4">17-63%</div>
              <p className="text-gray-700 font-semibold">of T1D patients experience anxiety or depression</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-[#3ED3FE] mb-4">1,153</div>
              <p className="text-gray-700 font-semibold">patients in Portugal have access to advanced CGM technology</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-[#18143C] mb-4">10 years</div>
              <p className="text-gray-700 font-semibold">shorter life expectancy for people with T1D</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 italic">
            "Despite the substantial mental health burden, there is a notable lack of psychological support for T1D patients both globally and in Portugal."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

