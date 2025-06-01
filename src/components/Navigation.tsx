
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Info, Rocket, Bell, BookOpen, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#18143C]/95 backdrop-blur-sm border-b border-[#8B5CF6]/20 w-full">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B86DFE] to-[#18143C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D+</span>
              </div>
              <span className="text-xl font-bold text-white">D+Positive</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#8B5CF6] transition-colors flex items-center space-x-1 border border-white rounded-full px-4 py-2 hover:bg-white/10"
              >
                <Info className="w-4 h-4" />
                <span>About Us</span>
              </button>
              <button 
                onClick={() => scrollToSection('problem')}
                className="text-white hover:text-[#8B5CF6] transition-colors flex items-center space-x-1 border border-white rounded-full px-4 py-2 hover:bg-white/10"
              >
                <BookOpen className="w-4 h-4" />
                <span>The Problem</span>
              </button>
              <Button className="bg-gradient-to-br from-[#B86DFE] to-[#18143C] hover:from-[#a05ce6] hover:to-[#0f0e1a] text-white rounded-full flex items-center space-x-1">
                <Rocket className="w-4 h-4" />
                <span>Join Beta</span>
              </Button>
              <Button className="bg-gradient-to-br from-[#B86DFE] to-[#18143C] hover:from-[#a05ce6] hover:to-[#0f0e1a] text-white rounded-full flex items-center space-x-1">
                <Bell className="w-4 h-4" />
                <span>Subscribe</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 max-w-7xl mx-auto">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-white hover:text-[#8B5CF6] flex items-center space-x-2 border border-white rounded-full px-4 py-2 hover:bg-white/10"
              >
                <Info className="w-4 h-4" />
                <span>About Us</span>
              </button>
              <button 
                onClick={() => scrollToSection('problem')}
                className="block w-full text-left text-white hover:text-[#8B5CF6] flex items-center space-x-2 border border-white rounded-full px-4 py-2 hover:bg-white/10"
              >
                <BookOpen className="w-4 h-4" />
                <span>The Problem</span>
              </button>
              <Button className="w-full bg-gradient-to-br from-[#B86DFE] to-[#18143C] hover:from-[#a05ce6] hover:to-[#0f0e1a] text-white rounded-full flex items-center justify-center space-x-1">
                <Rocket className="w-4 h-4" />
                <span>Join Beta</span>
              </Button>
              <Button className="w-full bg-gradient-to-br from-[#B86DFE] to-[#18143C] hover:from-[#a05ce6] hover:to-[#0f0e1a] text-white rounded-full flex items-center justify-center space-x-1">
                <Bell className="w-4 h-4" />
                <span>Subscribe</span>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-[#B86DFE] to-[#18143C] hover:from-[#a05ce6] hover:to-[#0f0e1a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Navigation;
