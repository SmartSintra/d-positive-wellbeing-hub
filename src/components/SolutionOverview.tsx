
import { CheckCircle, Brain, BarChart3, Target, Smartphone, Calendar } from "lucide-react";

const SolutionOverview = () => {
  const features = [
    {
      title: "AI-driven emotional support",
      icon: Brain,
      description: "Smart AI companion that understands your emotional patterns"
    },
    {
      title: "Mood and stress tracking", 
      icon: BarChart3,
      description: "Visual insights into your mental health journey"
    },
    {
      title: "Personalized coping strategies",
      icon: Target,
      description: "Tailored techniques based on your unique needs"
    },
    {
      title: "Integration with diabetes management tools",
      icon: Smartphone,
      description: "Seamlessly connects with your existing health apps"
    },
    {
      title: "Plan your out-of-routine days",
      icon: Calendar,
      description: "Prepare mentally for schedule changes and special events"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] relative">
      {/* Emotive Image Placeholder */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
          alt="Person using technology" 
          className="w-full h-full object-cover rounded-full filter blur-sm"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
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
                  className="group flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-[#3ED3FE]/20"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3ED3FE] to-[#B86DFE] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#18143C] mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-[#3ED3FE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
            
            <div className="relative">
              {/* Emotive Image */}
              <div className="absolute -top-8 -left-8 w-32 h-32 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop" 
                  alt="Flowers representing well-being" 
                  className="w-full h-full object-cover rounded-full filter blur-sm"
                />
              </div>
              
              <div className="bg-gradient-to-br from-[#18143C] to-[#2a1f4f] rounded-3xl p-8 shadow-2xl relative">
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-[#18143C]">Today's Mood Check</h4>
                    <div className="w-4 h-4 bg-[#3ED3FE] rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Stress Level</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className={`w-3 h-6 rounded-sm transition-all duration-300 ${i <= 2 ? 'bg-[#3ED3FE]' : 'bg-gray-200'}`}></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Energy</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className={`w-3 h-6 rounded-sm transition-all duration-300 ${i <= 4 ? 'bg-[#B86DFE]' : 'bg-gray-200'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#3ED3FE]/20 to-[#B86DFE]/20 rounded-2xl p-6">
                  <h5 className="font-bold text-white mb-2 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    AI Suggestion
                  </h5>
                  <p className="text-gray-300 text-sm">
                    "Based on your recent glucose patterns and mood, try a 5-minute breathing exercise before your next meal."
                  </p>
                </div>
              </div>
              
              {/* Another emotive image */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=200&h=200&fit=crop" 
                  alt="Sunlight through forest" 
                  className="w-full h-full object-cover rounded-full filter blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
