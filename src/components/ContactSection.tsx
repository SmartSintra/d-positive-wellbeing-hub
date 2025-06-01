
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] text-center mb-16">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#18143C] mb-4">
                  Join the Movement to Transform T1D Care
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Have questions about D+Positive? Want to learn more about our specialized approach to T1D mental health? 
                  Or perhaps you'd like to share your experience as a T1D patient in Portugal? We're here to listen and help.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B86DFE] to-[#18143C] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#18143C]">Email Us</p>
                    <p className="text-gray-600">hello@dpositive.health</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#18143C] mb-2">Name</label>
                  <Input placeholder="Your full name" className="border-gray-300 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#18143C] mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-gray-300 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#18143C] mb-2">Message</label>
                  <Textarea placeholder="Tell us about your T1D journey or how we can help..." rows={5} className="border-gray-300 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]" />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-br from-[#B86DFE] to-[#18143C] hover:from-[#a05ce6] hover:to-[#0f0e1a] text-white py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
