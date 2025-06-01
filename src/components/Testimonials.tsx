
const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#8B5CF6]/10 px-4 py-2 rounded-full border border-[#8B5CF6]/20 mb-6">
              <span className="text-[#8B5CF6] text-sm font-medium">💜 Personal Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] mb-6">
              Why I Created D+Positive
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From personal struggle to hope—the story behind Portugal's first T1D mental health companion
            </p>
          </div>
          
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-[#8B5CF6]/10">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-[#B86DFE] to-[#18143C] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">DP</span>
                </div>
                <div className="mt-4 text-center">
                  <p className="font-bold text-[#18143C]">Founder</p>
                  <p className="text-sm text-[#8B5CF6]">T1D Warrior</p>
                  <p className="text-xs text-gray-500">15+ years with T1D</p>
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold text-[#18143C]">The Gap I Lived Through</h3>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <p className="font-semibold text-red-800 mb-2">The Problem I Faced:</p>
                    <p className="text-red-700">
                      "My endocrinologist was excellent at managing my HbA1c levels, but there was silence around the anxiety, depression, and burnout I was experiencing. The mental health support simply wasn't there."
                    </p>
                  </div>
                  
                  <p>
                    "Living with Type 1 Diabetes for over 15 years, I've experienced the constant vigilance, the fear of complications, and the daily decisions that can mean life or death. What struck me most was how isolated I felt in dealing with the emotional burden."
                  </p>
                  
                  <div className="bg-[#8B5CF6]/5 border-l-4 border-[#8B5CF6] p-4 rounded">
                    <p className="font-semibold text-[#8B5CF6] mb-2">The Vision:</p>
                    <p className="text-gray-700">
                      "D+Positive was born from this gap. I wanted to create what I wish I had during my darkest moments—a companion that understands the unique psychological challenges of T1D and provides the support that traditional healthcare overlooks."
                    </p>
                  </div>
                  
                  <p>
                    "This isn't just an app; it's a lifeline for the <strong className="text-[#18143C]">35,000-60,000 people with T1D in Portugal</strong> and anyone who has ever felt overwhelmed by managing diabetes while trying to live a meaningful life."
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#18143C] text-xl">Creating Change Together</p>
                    <p className="text-lg text-[#8B5CF6]">Mental Health Advocate & T1D Community Builder</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>🇵🇹 Based in Portugal</p>
                    <p>🎯 On a mission to help thousands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Community Impact */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              <strong className="text-[#18143C]">You're not alone.</strong> Join a community that understands your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#B86DFE] rounded-full"></span>
                <span>Built by someone who lives with T1D</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#B86DFE] rounded-full"></span>
                <span>Designed for the Portuguese community</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#B86DFE] rounded-full"></span>
                <span>Evidence-based mental health support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
