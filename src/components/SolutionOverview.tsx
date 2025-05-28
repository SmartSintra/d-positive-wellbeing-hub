
import { CheckCircle } from "lucide-react";

const SolutionOverview = () => {
  const features = [
    "AI-driven emotional support",
    "Mood and stress tracking", 
    "Personalized coping strategies",
    "Integration with diabetes management tools",
    "Plan your out-of-routine days"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] mb-8">
              Introducing D+Positive
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our innovative app provides personalized emotional support, tracks mood patterns, 
              and offers evidence-based coping strategies designed specifically for the T1D community.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#18143C] mb-6">Key Features</h3>
              
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="w-6 h-6 text-[#3ED3FE] flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#18143C] to-[#2a1f4f] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-[#18143C]">Today's Mood Check</h4>
                    <div className="w-4 h-4 bg-[#3ED3FE] rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Stress Level</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className={`w-3 h-6 rounded-sm ${i <= 2 ? 'bg-[#3ED3FE]' : 'bg-gray-200'}`}></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Energy</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className={`w-3 h-6 rounded-sm ${i <= 4 ? 'bg-[#B86DFE]' : 'bg-gray-200'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#3ED3FE]/20 to-[#B86DFE]/20 rounded-2xl p-6">
                  <h5 className="font-bold text-white mb-2">AI Suggestion</h5>
                  <p className="text-gray-300 text-sm">
                    "Based on your recent glucose patterns and mood, try a 5-minute breathing exercise before your next meal."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
