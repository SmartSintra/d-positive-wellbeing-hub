
const Testimonials = () => {
  const testimonials = [
    {
      quote: "D+Positive has been a game-changer for me. The AI understands what I'm going through in a way that feels genuinely supportive.",
      author: "Sarah M.",
      role: "T1D for 8 years"
    },
    {
      quote: "Finally, an app that gets it. The mood tracking helps me see patterns I never noticed before, and the coping strategies actually work.",
      author: "Dr. James Rodriguez",
      role: "Endocrinologist"
    },
    {
      quote: "The integration with my diabetes management routine is seamless. It's like having a therapist who understands T1D.",
      author: "Mike K.",
      role: "T1D for 15 years"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] text-center mb-16">
            Hear from Our Users
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#B86DFE] mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-[#18143C]">{testimonial.author}</p>
                  <p className="text-[#3ED3FE] text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
