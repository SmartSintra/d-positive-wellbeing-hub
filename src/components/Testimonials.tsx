
const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] text-center mb-16">
            Why I Created D+Positive
          </h2>
          
          <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-12 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[#B86DFE] to-[#3ED3FE] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-bold">DP</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#18143C] mb-6">My Personal Journey with T1D</h3>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    "Living with Type 1 Diabetes for over a decade, I've experienced firsthand the emotional rollercoaster that comes with managing this chronic condition. The constant vigilance, the fear of complications, and the daily decisions that can mean the difference between feeling well or ending up in the hospital – it all takes a toll that goes far beyond the physical symptoms."
                  </p>
                  
                  <p>
                    "What struck me most was the silence around the mental health aspects of T1D. While my endocrinologist was excellent at managing my HbA1c levels and adjusting insulin doses, there was little to no discussion about the anxiety, depression, and burnout that I was experiencing. I realized I wasn't alone – thousands of people in Portugal and millions worldwide were struggling with the same invisible burden."
                  </p>
                  
                  <p>
                    "D+Positive was born from this gap I experienced personally. I wanted to create something that I wish I had during my darkest moments – a companion that understands the unique psychological challenges of T1D and provides the emotional support that traditional healthcare often overlooks. This isn't just an app; it's a lifeline for anyone who has ever felt overwhelmed by the weight of managing diabetes while trying to live a full, meaningful life."
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-bold text-[#18143C] text-xl">Founder & Creator</p>
                  <p className="text-[#3ED3FE] text-lg">T1D Warrior & Mental Health Advocate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
