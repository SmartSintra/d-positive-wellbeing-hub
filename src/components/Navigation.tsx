import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 bg-primary-foreground">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#3ED3FE] to-[#B86DFE] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D+</span>
            </div>
            <span className="text-xl font-bold text-[#18143C]">D+Positive</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-[#3ED3FE] transition-colors">
              About Us
            </a>
            <Button variant="outline" className="border-[#3ED3FE] text-[#3ED3FE] hover:bg-[#3ED3FE] hover:text-white">
              Join Beta
            </Button>
            <Button variant="outline" className="border-[#B86DFE] text-[#B86DFE] hover:bg-[#B86DFE] hover:text-white">
              Subscribe for More
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-[#18143C] flex items-center space-x-1">
              <Heart className="w-4 h-4" />
              <span>Support This Project</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#about" className="block text-gray-700 hover:text-[#3ED3FE]">
              About Us
            </a>
            <Button className="w-full bg-[#3ED3FE] hover:bg-[#3ED3FE]/90">
              Join Beta
            </Button>
            <Button variant="outline" className="w-full border-[#B86DFE] text-[#B86DFE]">
              Subscribe for More
            </Button>
            <Button variant="ghost" className="w-full flex items-center justify-center space-x-1">
              <Heart className="w-4 h-4" />
              <span>Support This Project</span>
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;