import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import logoWhite from "@assets/logo centralizada branca_1753484043527.png";
import logoOrange from "@assets/logo limiar_1753484043528.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-gradient backdrop-blur-md border-b border-gray-200 dark:border-dark-border transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={theme === "dark" ? logoWhite : logoOrange} 
              alt="Limiar Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("diferenca")}
              className="text-gray-600 dark:text-gray-300 hover:text-limiar-orange transition-colors"
            >
              Nossa Diferença
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-gray-600 dark:text-gray-300 hover:text-limiar-orange transition-colors"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-600 dark:text-gray-300 hover:text-limiar-orange transition-colors"
            >
              Contato
            </button>

            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-blue-400" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            size="icon"
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-card"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-dark-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("diferenca")}
                className="text-gray-600 dark:text-gray-300 hover:text-limiar-orange transition-colors text-left"
              >
                Nossa Diferença
              </button>
              <button
                onClick={() => scrollToSection("solucoes")}
                className="text-gray-600 dark:text-gray-300 hover:text-limiar-orange transition-colors text-left"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-600 dark:text-gray-300 hover:text-limiar-orange transition-colors text-left"
              >
                Contato
              </button>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                className="justify-start p-0 h-auto text-gray-600 dark:text-gray-300 hover:text-limiar-orange"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 mr-2" />
                ) : (
                  <Moon className="h-4 w-4 mr-2" />
                )}
                {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
