import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#18143C] via-[#2a1f4f] to-[#18143C] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3ED3FE] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#B86DFE] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#3ED3FE] rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in lg:text-5xl">
            Empowering Mental Well-being for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3ED3FE] to-[#B86DFE]">
              Type 1 Diabetes
            </span>{" "}
            Patients
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            D+Positive is your AI-powered companion, offering emotional support and mental health resources tailored for T1D individuals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <Button size="lg" className="bg-[#B86DFE] hover:bg-[#a05ce6] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-[#B86DFE]/50 transition-all duration-300 hover:scale-105">
              Join Our Beta Program
            </Button>
            <Button variant="outline" size="lg" className="border-[#3ED3FE] text-[#3ED3FE] hover:bg-[#3ED3FE] hover:text-[#18143C] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#3ED3FE] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#3ED3FE] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;