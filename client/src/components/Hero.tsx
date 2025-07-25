import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import backgroundVideo from "@assets/0_Digital_Maps_Connectivity_3840x2160_1753485443138.mp4";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-30 dark:opacity-50"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50 dark:from-dark-bg/90 dark:via-dark-bg/70 dark:to-dark-bg/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight animate-fade-in-up text-left">
            <span className="block text-gray-900 dark:text-white mb-2">Existe um lugar entre</span>
            <span className="block bg-gradient-to-r from-limiar-orange via-limiar-gold to-limiar-orange bg-clip-text text-transparent mb-4">
              o que foi e o que está por vir.
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300">
              Bem-vindo(a) ao <span className="font-semibold text-limiar-orange">Limiar.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed animate-fade-in-up text-left">
            Unimos criatividade e ferramentas estratégicas de Inteligência Artificial para transformar negócios.
            Como agência criativa especializada em IA, desenvolvemos soluções inteligentes e personalizadas que
            projetam sua marca para o futuro e geram experiências extraordinárias.
          </p>

          {/* Highlight Quote */}
          <div className="bg-white/95 dark:bg-dark-card/80 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-gray-200 dark:border-limiar-orange/30 animate-fade-in-up shadow-xl dark:shadow-limiar-orange/20 relative overflow-hidden max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-limiar-orange/5 to-limiar-gold/5 dark:from-limiar-orange/10 dark:to-limiar-gold/10"></div>
            <blockquote className="relative text-lg md:text-xl font-poppins font-medium text-gray-900 dark:text-white italic leading-relaxed text-left">
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
