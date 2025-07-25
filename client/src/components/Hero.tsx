import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-dark-radial"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        {/* Modern circuit pattern background */}
        <svg className="w-full h-full animate-fade-in-up" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M20,20 L80,20 M20,80 L80,80 M20,20 L20,80 M80,20 L80,80"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-limiar-orange"
              />
              <circle cx="20" cy="20" r="3" fill="currentColor" className="text-limiar-gold" />
              <circle cx="80" cy="80" r="3" fill="currentColor" className="text-limiar-orange" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-black mb-8 leading-tight animate-fade-in-up">
            <span className="block text-gray-900 dark:text-white">Existe um lugar entre</span>
            <span className="block bg-gradient-to-r from-limiar-orange via-limiar-gold to-limiar-orange bg-clip-text text-transparent">
              o que foi e o que está por vir.
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-light mt-4 text-gray-700 dark:text-gray-300">
              Bem-vindo(a) ao <span className="font-bold text-limiar-orange">Limiar.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            Unimos criatividade e ferramentas estratégicas de Inteligência Artificial para transformar negócios.
            Como agência criativa especializada em IA, desenvolvemos soluções inteligentes e personalizadas que
            projetam sua marca para o futuro e geram experiências extraordinárias.
          </p>

          {/* Highlight Quote */}
          <div className="bg-white/90 dark:bg-dark-card/70 backdrop-blur-xl rounded-3xl p-10 mb-16 border border-gray-200 dark:border-limiar-orange/30 animate-fade-in-up shadow-2xl dark:shadow-limiar-orange/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-limiar-orange/5 to-limiar-gold/5 dark:from-limiar-orange/10 dark:to-limiar-gold/10"></div>
            <blockquote className="relative text-2xl md:text-3xl lg:text-4xl font-poppins font-medium text-gray-900 dark:text-white italic leading-relaxed">
              "Onde outros veem código, nós vemos poesia. Habitamos a intersecção precisa entre dados e imaginação,
              criando experiências que não apenas transformam negócios — elas <span className="text-limiar-orange font-bold">despertam futuros.</span>"
            </blockquote>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-fade-in-up">
            <Button
              onClick={() => scrollToSection("diferenca")}
              className="px-12 py-6 bg-gradient-to-r from-limiar-orange to-limiar-gold text-white font-poppins font-bold rounded-full text-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 animate-pulse-glow shadow-lg"
            >
              Atravesse o Limiar
            </Button>
            <Button
              onClick={() => scrollToSection("solucoes")}
              variant="outline"
              className="px-12 py-6 border-3 border-limiar-orange text-limiar-orange font-poppins font-bold rounded-full text-xl hover:bg-limiar-orange hover:text-white hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              Construa o Impossível
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-12 justify-center items-center text-center animate-fade-in-up">
            <div className="flex items-center gap-3 group">
              <span className="w-4 h-4 bg-limiar-orange rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-xl font-semibold text-gray-700 dark:text-gray-200 group-hover:text-limiar-orange transition-colors duration-300">50+ marcas transformadas</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="w-4 h-4 bg-limiar-gold rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-xl font-semibold text-gray-700 dark:text-gray-200 group-hover:text-limiar-gold transition-colors duration-300">Ecossistema de IA</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="w-4 h-4 bg-gradient-to-r from-limiar-orange to-limiar-gold rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-xl font-semibold text-gray-700 dark:text-gray-200 group-hover:bg-gradient-to-r group-hover:from-limiar-orange group-hover:to-limiar-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">O futuro não espera</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-2xl text-limiar-orange" />
      </div>
    </section>
  );
}
