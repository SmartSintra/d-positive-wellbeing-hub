import { Brain, Activity, Heart, Smartphone, Calendar, Shield } from "lucide-react";
const SolutionOverview = () => {
  const features = [{
    icon: Brain,
    title: "T1D-specific emergency psychological support",
    description: "Specialized AI trained on T1D for critical highs and lows and stressful events"
  }, {
    icon: Activity,
    title: "Psychosomatic monitoring",
    description: "Track emotional patterns alongside with physical conditions to comprehend how glucose reacts to your emotional states"
  }, {
    icon: Heart,
    title: "Mental Health Coping strategies",
    description: "Evidence-based strategies for managing T1D-related anxiety and depression"
  }, {
    icon: Smartphone,
    title: "(Beta) Integration with CGM readings in real time",
    description: "Future connection with CGM systems that improves relation and response to emotional and glucose tracking"
  }, {
    icon: Calendar,
    title: "Daily emotional support",
    description: "Continuous guidance for managing the psychological burden of T1D care"
  }, {
    icon: Shield,
    title: "Privacy-first approach",
    description: "Your mental health data stays secure and confidential and share your data with your doctor and medical team safely"
  }];
  return <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] mb-6">
              Introducing D+Positive
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The first AI-powered emotional support platform specifically designed for Type 1 Diabetes patients, 
              addressing the critical gap in psychological care that affects thousands in Portugal and millions worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#B86DFE] relative overflow-hidden" style={{
              boxShadow: '0 4px 20px rgba(184, 109, 254, 0.15), 0 0 20px rgba(184, 109, 254, 0.1)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(184, 109, 254, 0.02) 100%)'
            }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B86DFE]/5 to-transparent opacity-50"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3ED3FE] to-[#B86DFE] rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#18143C] mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>;
          })}
          </div>

          {/* Additional content section with emotive image */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-bold text-[#18143C] text-4xl">Built for the Portuguese T1D Community</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With only 1,153 patients in Portugal having access to advanced diabetes technology, 
                and thousands more struggling with the emotional burden of T1D management, 
                D+Positive provides accessible mental health support for all T1D patients.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop&crop=center" alt="Friendly community support" className="rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#3ED3FE] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#B86DFE] rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionOverview;
