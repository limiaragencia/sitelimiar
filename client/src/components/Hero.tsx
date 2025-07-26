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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-40">
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
            <span className="block text-gray-900 dark:text-white ml-[0px] mr-[0px] pl-[0px] pr-[0px] pt-[4px] pb-[4px] text-[45px] mt-[12px] mb-[12px]">Existe um lugar entre</span>
            <span className="block md:text-5xl lg:text-6xl text-limiar-orange pl-[0px] pr-[0px] ml-[0px] mr-[0px] font-black text-[45px] pt-[6px] pb-[6px] mt-[-22px] mb-[-22px]">
              o que foi e o que
            </span>
            <span className="block md:text-5xl lg:text-6xl text-limiar-orange pt-[10px] pb-[10px] pl-[0px] pr-[0px] mt-[1px] mb-[1px] ml-[0px] mr-[0px] font-black text-[45px]">
              está por vir.
            </span>
            <span className="block md:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300 pt-[55px] pb-[55px] text-[52px]">
              Bem-vindo(a) ao <span className="font-semibold text-limiar-orange">Limiar.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="md:text-xl text-gray-800 dark:text-gray-200 max-w-2xl animate-fade-in-up drop-shadow-md text-justify font-thin text-[20px] mt-[25px] mb-[25px] ml-[3px] mr-[3px] pl-[-7px] pr-[-7px] pt-[8px] pb-[8px]">
            Unimos criatividade e ferramentas estratégicas de Inteligência Artificial para transformar negócios.
            Como agência criativa especializada em IA, desenvolvemos soluções inteligentes e personalizadas que
            projetam sua marca para o futuro e geram experiências extraordinárias.
          </p>

          

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-12 animate-fade-in-up">
            <Button
              onClick={() => scrollToSection("diferenca")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-10 px-8 py-4 bg-gradient-to-r from-limiar-orange to-limiar-gold text-white font-poppins font-semibold rounded-lg text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md mt-[30px] mb-[30px] ml-[41px] mr-[41px] pl-[48px] pr-[48px] pt-[20px] pb-[20px]"
            >
              Atravesse o Limiar
            </Button>
            <Button
              onClick={() => scrollToSection("solucoes")}
              variant="outline"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background h-10 px-8 py-4 border-2 border-limiar-orange text-limiar-orange font-poppins font-semibold rounded-lg text-lg hover:bg-limiar-orange hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl mt-[30px] mb-[30px] pl-[30px] pr-[30px] pt-[20px] pb-[20px] ml-[-13px] mr-[-13px]"
            >
              Construa o Impossível
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 items-start animate-fade-in-up">
            <div className="flex items-center gap-3 group">
              <span className="w-3 h-3 bg-gradient-to-r from-limiar-orange to-limiar-gold rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-base font-medium text-gray-700 dark:text-gray-200 group-hover:bg-gradient-to-r group-hover:from-limiar-orange group-hover:to-limiar-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">50+ marcas transformadas</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="w-3 h-3 bg-gradient-to-r from-limiar-orange to-limiar-gold rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-base font-medium text-gray-700 dark:text-gray-200 group-hover:bg-gradient-to-r group-hover:from-limiar-orange group-hover:to-limiar-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Ecossistema de IA</span>
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
