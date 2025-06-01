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
                  <img alt="Living with Type 1 Diabetes - Personal journey" src="/lovable-uploads/d6761e5e-1637-47da-9c9e-3cf9b64236a1.jpg" className="w-full h-full object-cover" />
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
                
                
                <div className="text-lg text-gray-700 leading-relaxed">
                  <p className="text-base font-normal">Living with Type 1 Diabetes for over 16 years has taught me that managing numbers is only half the story — the emotional weight is just as constant. Despite having access to one of the most advanced treatments, I’ve still faced the same mental spirals, frustrations, and quiet fears that don’t show on a glucose graph. 


That’s why I created D+Positive — not just as a tool, but as an emotional ally for people with T1D. Because what if managing diabetes is also about feeling understood, supported, and a little more human every day, I believe that living with Diabetes can truly be more positive and this vision and hope is what I am willing to share with the world.</p>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-bold text-[#18143C] text-xl">Founder & Creator</p>
                  <p className="text-lg text-violet-500">T1D Warrior &amp; Very Stubborn (but Hopeful) Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;