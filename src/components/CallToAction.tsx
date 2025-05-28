
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#18143C] via-[#2a1f4f] to-[#18143C] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#3ED3FE] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[#B86DFE] rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Be Part of the Change
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join our beta program and help us create a supportive community for T1D individuals. 
            Together, we can transform the mental health landscape for diabetes care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-[#B86DFE] hover:bg-[#a05ce6] text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-[#B86DFE]/50 transition-all duration-300 hover:scale-105"
            >
              Sign Up Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Learn More
            </Button>
          </div>
          
          <p className="text-gray-400 mt-8 text-sm">
            Limited spots available • No commitment required • Free during beta
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
