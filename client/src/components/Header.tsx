import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoGold from "@assets/limiar logo complta dourado cabeçalho site_1753516491901.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg backdrop-saturate-150 border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/25">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoGold} 
              alt="Limiar Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("diferenca")}
              className="text-gray-200 hover:text-limiar-orange transition-colors font-medium text-base tracking-wide"
            >
              Diferenciais Limiar
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-gray-200 hover:text-limiar-orange transition-colors font-medium text-base tracking-wide"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-200 hover:text-limiar-orange transition-colors font-medium text-base tracking-wide"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            size="icon"
            className="md:hidden p-2 rounded-lg bg-dark-card"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-dark-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("diferenca")}
                className="text-gray-200 hover:text-limiar-orange transition-colors text-left font-medium text-base tracking-wide"
              >
                Diferenciais Limiar
              </button>
              <button
                onClick={() => scrollToSection("solucoes")}
                className="text-gray-200 hover:text-limiar-orange transition-colors text-left font-medium text-base tracking-wide"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-200 hover:text-limiar-orange transition-colors text-left font-medium text-base tracking-wide"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
