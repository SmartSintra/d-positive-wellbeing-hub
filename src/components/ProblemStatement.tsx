
const ProblemStatement = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full border border-red-200 mb-6">
              <span className="text-red-600 text-sm font-medium">⚠️ Critical Health Gap</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] mb-6">
              The Hidden Mental Health Crisis in Type 1 Diabetes
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              While medical technology advances, the psychological burden of T1D remains largely ignored—affecting 
              <strong className="text-[#18143C]"> thousands in Portugal</strong> and <strong className="text-[#18143C]">millions worldwide</strong>.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-400">
              <div className="text-4xl font-bold text-red-600 mb-4">17-63%</div>
              <p className="text-gray-700 font-semibold text-lg">of T1D patients experience anxiety or depression</p>
              <p className="text-sm text-gray-600 mt-2">Yet most receive no specialized mental health support</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-400">
              <div className="text-4xl font-bold text-orange-600 mb-4">14%</div>
              <p className="text-gray-700 font-semibold text-lg">of patients in Portugal have access to advanced CGM & insulin pumps</p>
              <p className="text-sm text-gray-600 mt-2">Limited access to life-changing technology</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#8B5CF6]">
              <div className="text-4xl font-bold text-[#8B5CF6] mb-4">10 years</div>
              <p className="text-gray-700 font-semibold text-lg">shorter life expectancy for people with T1D</p>
              <p className="text-sm text-gray-600 mt-2">Mental health plays a crucial role in diabetes management</p>
            </div>
          </div>

          {/* The Reality Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-[#18143C] mb-6 text-center">The Daily Reality</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-[#18143C] text-lg">Physical Burden</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Constant blood sugar monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Multiple daily insulin injections</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Fear of hypoglycemic episodes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Risk of long-term complications</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[#18143C] text-lg">Emotional Impact</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#8B5CF6] mt-1">•</span>
                    <span>Diabetic distress and burnout</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#8B5CF6] mt-1">•</span>
                    <span>Anxiety about glucose levels</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#8B5CF6] mt-1">•</span>
                    <span>Social isolation and stigma</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#8B5CF6] mt-1">•</span>
                    <span>Feeling overwhelmed and exhausted</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Research Quote */}
          <div className="text-center bg-[#18143C] text-white p-8 rounded-2xl">
            <blockquote className="text-xl italic leading-relaxed mb-4">
              "Diabetic distress - the specific emotional suffering related to diabetes - is associated with feelings of frustration, exhaustion and lack of control, negatively affecting emotional well-being and disease management."
            </blockquote>
            <p className="text-[#B86DFE] font-semibold">— Diabetes Care Medical Journal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
