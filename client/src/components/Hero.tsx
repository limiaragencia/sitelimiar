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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
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
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight animate-fade-in-up text-left">
            <span className="block text-gray-900 dark:text-white mb-2">Existe um lugar entre</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-limiar-orange mb-4">
              o que foi e o que está por vir.
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300">
              Bem-vindo(a) ao <span className="font-semibold text-limiar-orange">Limiar.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-2xl leading-relaxed animate-fade-in-up drop-shadow-md font-normal mt-[15px] mb-[15px] pt-[3px] pb-[3px] ml-[7px] mr-[7px] text-justify pl-[0px] pr-[0px]">
            Unimos criatividade e ferramentas estratégicas de Inteligência Artificial para transformar negócios.
            Como agência criativa especializada em IA, desenvolvemos soluções inteligentes e personalizadas que
            projetam sua marca para o futuro e geram experiências extraordinárias.
          </p>

          {/* Highlight Quote */}
          <div className="bg-white/98 dark:bg-dark-card/90 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-gray-300 dark:border-limiar-orange/40 animate-fade-in-up shadow-2xl dark:shadow-limiar-orange/30 relative overflow-hidden max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-limiar-orange/5 to-limiar-gold/5 dark:from-limiar-orange/10 dark:to-limiar-gold/10"></div>
            <blockquote className="relative md:text-xl font-poppins font-medium text-gray-900 dark:text-white italic text-[18px] text-justify pt-[-5px] pb-[-5px] pl-[-2px] pr-[-2px] ml-[-19px] mr-[-19px] mt-[-14px] mb-[-14px]">
              "Onde outros veem código, nós vemos poesia. Habitamos a intersecção precisa entre dados e imaginação,
              criando experiências que não apenas transformam negócios — elas <span className="text-limiar-orange font-semibold">despertam futuros.</span>"
            </blockquote>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-12 animate-fade-in-up">
            <Button
              onClick={() => scrollToSection("diferenca")}
              className="px-8 py-4 bg-gradient-to-r from-limiar-orange to-limiar-gold text-white font-poppins font-semibold rounded-lg text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md"
            >
              Atravesse o Limiar
            </Button>
            <Button
              onClick={() => scrollToSection("solucoes")}
              variant="outline"
              className="px-8 py-4 border-2 border-limiar-orange text-limiar-orange font-poppins font-semibold rounded-lg text-lg hover:bg-limiar-orange hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Construa o Impossível
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 items-start animate-fade-in-up">
            <div className="flex items-center gap-3 group">
              <span className="w-3 h-3 bg-limiar-orange rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-base font-medium text-gray-700 dark:text-gray-200 group-hover:text-limiar-orange transition-colors duration-300">50+ marcas transformadas</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="w-3 h-3 bg-limiar-gold rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-base font-medium text-gray-700 dark:text-gray-200 group-hover:text-limiar-gold transition-colors duration-300">Ecossistema de IA</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="w-3 h-3 bg-gradient-to-r from-limiar-orange to-limiar-gold rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-base font-medium text-gray-700 dark:text-gray-200 group-hover:bg-gradient-to-r group-hover:from-limiar-orange group-hover:to-limiar-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">O futuro não espera</span>
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
