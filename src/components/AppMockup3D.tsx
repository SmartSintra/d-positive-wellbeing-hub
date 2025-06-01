
import { Button } from "@/components/ui/button";

const AppMockup3D = () => {
  return (
    <section className="py-20 bg-gradient-to-tr from-[#18143C] via-[#2a1f4f] to-[#18143C] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-[#3ED3FE] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-[#B86DFE] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#3ED3FE] rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Experience D+Positive in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our intuitive interface makes mental health support accessible and engaging for T1D patients.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Real 3D iPhone Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Realistic iPhone 3D */}
              <div className="relative transform-gpu" style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' }}>
                {/* iPhone 14 Pro Frame */}
                <div className="w-80 h-[650px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3.5rem] p-3 shadow-2xl relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20"></div>
                  
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-[#18143C] h-12 w-full flex items-center justify-between px-8 text-white text-sm font-medium">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                        <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-full h-full bg-green-400 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Interface */}
                    <div className="p-6 space-y-6 h-full bg-gradient-to-br from-gray-50 to-white">
                      {/* Header */}
                      <div className="text-center pt-4">
                        <h3 className="text-2xl font-bold text-[#18143C] mb-2">Good Morning, Sarah!</h3>
                        <p className="text-gray-600">How are you feeling today?</p>
                      </div>
                      
                      {/* Mood Selector */}
                      <div className="bg-gradient-to-r from-[#3ED3FE]/10 to-[#B86DFE]/10 rounded-2xl p-6 border border-[#B86DFE]/20">
                        <div className="flex justify-between mb-4">
                          {[1,2,3,4,5].map((i) => (
                            <div key={i} className={`w-12 h-12 rounded-full ${i === 4 ? 'bg-[#3ED3FE] scale-110' : 'bg-gray-200'} flex items-center justify-center text-xl transition-all duration-300 shadow-sm`}>
                              {i === 4 ? '😊' : '😐'}
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 text-center font-medium">Feeling pretty good today!</p>
                      </div>
                      
                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#3ED3FE]/20 rounded-xl p-4 text-center border border-[#3ED3FE]/30">
                          <div className="w-10 h-10 bg-[#3ED3FE] rounded-full mx-auto mb-3 flex items-center justify-center">
                            <span className="text-white text-lg">📊</span>
                          </div>
                          <p className="text-sm text-gray-700 font-medium">Track Mood</p>
                        </div>
                        <div className="bg-[#B86DFE]/20 rounded-xl p-4 text-center border border-[#B86DFE]/30">
                          <div className="w-10 h-10 bg-[#B86DFE] rounded-full mx-auto mb-3 flex items-center justify-center">
                            <span className="text-white text-lg">🤝</span>
                          </div>
                          <p className="text-sm text-gray-700 font-medium">Get Support</p>
                        </div>
                      </div>
                      
                      {/* AI Suggestion */}
                      <div className="bg-gradient-to-r from-[#18143C] to-[#2a1f4f] rounded-xl p-6 text-white border border-[#B86DFE]/30">
                        <h4 className="font-bold mb-3 flex items-center">
                          <span className="mr-2">💡</span>
                          AI Suggestion
                        </h4>
                        <p className="text-sm opacity-90 leading-relaxed">Try a 5-minute breathing exercise before your next glucose check to help reduce anxiety.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Side buttons */}
                  <div className="absolute left-0 top-32 w-1 h-16 bg-gray-700 rounded-r-sm"></div>
                  <div className="absolute left-0 top-52 w-1 h-12 bg-gray-700 rounded-r-sm"></div>
                  <div className="absolute left-0 top-68 w-1 h-12 bg-gray-700 rounded-r-sm"></div>
                  <div className="absolute right-0 top-40 w-1 h-20 bg-gray-700 rounded-l-sm"></div>
                </div>
              </div>
              
              {/* Additional floating screens */}
              <div className="absolute -top-16 -right-20 transform rotate-12">
                <div className="w-64 h-48 bg-white rounded-xl shadow-lg border border-[#B86DFE]/30 p-4">
                  <div className="h-full bg-gradient-to-br from-[#3ED3FE]/10 to-[#B86DFE]/10 rounded-lg flex flex-col justify-center items-center">
                    <div className="text-4xl mb-2">📈</div>
                    <h4 className="font-bold text-[#18143C] text-sm">Mood Trends</h4>
                    <p className="text-xs text-gray-600 text-center mt-1">Weekly emotional patterns</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-12 -left-16 transform -rotate-6">
                <div className="w-56 h-40 bg-white rounded-xl shadow-lg border border-[#B86DFE]/30 p-4">
                  <div className="h-full bg-gradient-to-br from-[#B86DFE]/10 to-[#3ED3FE]/10 rounded-lg flex flex-col justify-center items-center">
                    <div className="text-3xl mb-2">🧘‍♀️</div>
                    <h4 className="font-bold text-[#18143C] text-sm">Coping Tools</h4>
                    <p className="text-xs text-gray-600 text-center mt-1">Personalized strategies</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#3ED3FE] rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-[#B86DFE] rounded-full opacity-20 animate-bounce delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Intuitive Design Meets Powerful AI
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our app combines beautiful, user-friendly design with advanced AI technology to provide personalized mental health support that fits seamlessly into your daily routine.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-white">
                <div className="w-3 h-3 bg-[#3ED3FE] rounded-full"></div>
                <span>Smart mood pattern recognition</span>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <div className="w-3 h-3 bg-[#B86DFE] rounded-full"></div>
                <span>Personalized coping recommendations</span>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <div className="w-3 h-3 bg-[#3ED3FE] rounded-full"></div>
                <span>Seamless diabetes management integration</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-br from-[#B86DFE] to-[#18143C] hover:from-[#a05ce6] hover:to-[#0f0e1a] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-[#B86DFE]/50 transition-all duration-300 hover:scale-105"
            >
              Try the Beta Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppMockup3D;
