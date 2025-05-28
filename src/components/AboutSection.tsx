
const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] text-center mb-16">
            About D+Positive
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#18143C]">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                D+Positive was born from a deeply personal journey with Type 1 Diabetes. 
                Our founder recognized the gap between excellent diabetes management tools 
                and mental health support tailored specifically for the T1D community.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that managing diabetes isn't just about blood sugar levels—it's about 
                thriving mentally and emotionally while living with a chronic condition. Our AI-powered 
                platform provides the emotional intelligence and support that makes this possible.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#18143C]">Our Team</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our multidisciplinary team includes diabetes educators, mental health professionals, 
                AI researchers, and T1D individuals who understand the challenges firsthand.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-bold text-[#18143C] mb-2">Built with empathy</h4>
                <p className="text-gray-600">
                  Every feature is designed with input from the T1D community, 
                  ensuring authentic support that truly resonates with users' experiences.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-[#3ED3FE] to-[#B86DFE] p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white text-lg max-w-2xl">
                A world where every person with Type 1 Diabetes has access to compassionate, 
                intelligent mental health support that empowers them to live their fullest life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
