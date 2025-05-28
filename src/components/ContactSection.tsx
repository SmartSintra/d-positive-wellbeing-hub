import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const ContactSection = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18143C] text-center mb-16">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#18143C] mb-4">
                  We'd Love to Hear From You
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Have questions about D+Positive? Want to learn more about our beta program? 
                  Or perhaps you'd like to share your T1D journey with us? We're here to listen and help.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#3ED3FE] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#18143C]">Email Us</p>
                    <p className="text-gray-600">hello@dpositive.health</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  
                  <div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#18143C] mb-2">Name</label>
                  <Input placeholder="Your full name" className="border-gray-300 focus:border-[#3ED3FE] focus:ring-[#3ED3FE]" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#18143C] mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-gray-300 focus:border-[#3ED3FE] focus:ring-[#3ED3FE]" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#18143C] mb-2">Message</label>
                  <Textarea placeholder="Tell us how we can help you..." rows={5} className="border-gray-300 focus:border-[#3ED3FE] focus:ring-[#3ED3FE]" />
                </div>
                
                <Button type="submit" className="w-full bg-[#B86DFE] hover:bg-[#a05ce6] text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;