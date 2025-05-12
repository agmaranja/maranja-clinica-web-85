
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Leaf from "@/components/Leaf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-maranja-background/95 backdrop-blur-sm py-4 border-b border-maranja-darkblue/10 relative">
      <Leaf position="top-right" size={24} rotation={15} opacity={0.1} leafType="ipe" className="hidden lg:block" />
      <Leaf position="top-left" size={20} rotation={-10} opacity={0.15} leafType="jatoba" className="hidden lg:block" />
      
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/ab03f245-a6d5-422f-b497-d8921ebe72ea.png" 
            alt="Maranjá" 
            className="h-12 md:h-16"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-maranja-darkblue hover:text-maranja-darkblue/80 font-medium">
            Início
          </a>
          <a href="#servicos" className="text-maranja-darkblue hover:text-maranja-darkblue/80 font-medium">
            Serviços
          </a>
          <a href="#contato" className="text-maranja-darkblue hover:text-maranja-darkblue/80 font-medium">
            Contato
          </a>
          <Button className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white">
            Ligue para mim
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-maranja-darkblue"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={isMenuOpen 
                ? "M6 18L18 6M6 6l12 12" 
                : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-maranja-background shadow-md py-4 px-4 border-t border-maranja-darkblue/10">
          <Leaf position="bottom-right" size={20} rotation={-10} opacity={0.15} leafType="acai" />
          <Leaf position="top-left" size={16} rotation={25} opacity={0.1} leafType="guarana" />
          <nav className="flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="text-maranja-darkblue py-2 px-4 hover:bg-maranja-cream rounded-md"
              onClick={toggleMenu}
            >
              Início
            </a>
            <a 
              href="#servicos" 
              className="text-maranja-darkblue py-2 px-4 hover:bg-maranja-cream rounded-md"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a 
              href="#contato" 
              className="text-maranja-darkblue py-2 px-4 hover:bg-maranja-cream rounded-md"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <Button 
              className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white w-full justify-center"
              onClick={() => {
                toggleMenu();
                document.getElementById("ligue-para-mim")?.scrollIntoView({behavior: "smooth"});
              }}
            >
              Ligue para mim
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
