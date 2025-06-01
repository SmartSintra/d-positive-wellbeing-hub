
const Testimonials = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] text-center mb-16">
            Why I Created D+Positive
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Large Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    alt="Living with Type 1 Diabetes - Personal journey" 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop" 
                  />
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#B86DFE] rounded-full opacity-80 animate-bounce flex items-center justify-center">
                  <span className="text-white text-2xl">💙</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#8B5CF6] rounded-full opacity-80 animate-bounce delay-1000 flex items-center justify-center">
                  <span className="text-white text-lg">✨</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B86DFE] to-[#3ED3FE] rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">DP</span>
                </div>
                
                <div className="text-lg text-gray-700 leading-relaxed">
                  <p>
                    Living with Type 1 Diabetes for over a decade, I've experienced firsthand the emotional rollercoaster that comes with managing this chronic condition. The constant vigilance, the fear of complications, and the daily decisions that can mean the difference between feeling well or ending up in the hospital – it all takes a toll that goes far beyond the physical symptoms. What struck me most was the silence around the mental health aspects of T1D. While my endocrinologist was excellent at managing my HbA1c levels and adjusting insulin doses, there was little to no discussion about the anxiety, depression, and burnout that I was experiencing. I realized I wasn't alone – thousands of people in Portugal and millions worldwide were struggling with the same invisible burden. D+Positive was born from this gap I experienced personally. I wanted to create something that I wish I had during my darkest moments – a companion that understands the unique psychological challenges of T1D and provides the emotional support that traditional healthcare often overlooks. This isn't just an app; it's a lifeline for anyone who has ever felt overwhelmed by the weight of managing diabetes while trying to live a full, meaningful life.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-bold text-[#18143C] text-xl">Founder & Creator</p>
                  <p className="text-lg text-violet-500">T1D Warrior & Mental Health Advocate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Testimonials;
