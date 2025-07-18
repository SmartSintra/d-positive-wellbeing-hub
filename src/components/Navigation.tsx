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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 w-full shadow-lg shadow-[#8B5CF6]/10">
        <div className="w-full px-6 py-4 bg-primary">
          <div className="flex items-center justify-between bg-[#000a00]/0 max-w-7xl mx-auto">
            {/* Logo and CTA Button */}
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/1209850a-4e3a-4993-8796-2ba72cb76b7d.png" 
                alt="Logo" 
                className="h-12 w-auto"
              />
              <Button
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/beatrizmiranda-pt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank')}
              >
                Vamos conversar?
              </Button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Menu removed as requested */}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-4 max-w-7xl mx-auto">
              {/* Mobile menu removed as requested */}
            </div>}
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-[#00a9e0] to-[#00529B] hover:from-[#00529B] hover:to-[#081c2b] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          <ChevronUp className="w-5 h-5" />
        </button>}
    </>;
};
export default Navigation;