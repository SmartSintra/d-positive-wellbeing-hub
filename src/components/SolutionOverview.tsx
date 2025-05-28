
import { Brain, Activity, Heart, Smartphone, Calendar, Shield } from "lucide-react";

const SolutionOverview = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-driven emotional support",
      description: "Advanced AI that understands T1D-specific emotional challenges"
    },
    {
      icon: Activity,
      title: "Mood and stress tracking",
      description: "Monitor your emotional patterns and identify triggers"
    },
    {
      icon: Heart,
      title: "Personalized coping strategies",
      description: "Tailored techniques based on your unique situation"
    },
    {
      icon: Smartphone,
      title: "Integration with diabetes management tools",
      description: "Seamlessly connects with your existing diabetes apps"
    },
    {
      icon: Calendar,
      title: "Plan your out-of-routine days",
      description: "Special support for events, travel, and schedule changes"
    },
    {
      icon: Shield,
      title: "Privacy-first approach",
      description: "Your mental health data stays secure and confidential"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] mb-6">
              Introducing D+Positive
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform provides personalized emotional support, tracks mood patterns, 
              and offers evidence-based coping strategies specifically designed for the T1D community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#B86DFE] relative overflow-hidden"
                  style={{
                    boxShadow: '0 4px 20px rgba(184, 109, 254, 0.15), 0 0 20px rgba(184, 109, 254, 0.1)',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(184, 109, 254, 0.02) 100%)'
                  }}
                >
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
                </div>
              );
            })}
          </div>

          {/* Additional content section with emotive image */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#18143C]">
                Designed by the T1D Community, for the T1D Community
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every feature in D+Positive has been developed with direct input from individuals 
                living with Type 1 Diabetes, ensuring authentic support that truly understands 
                your daily challenges and victories.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop&crop=center" 
                  alt="Friendly community support" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#3ED3FE] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#B86DFE] rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
