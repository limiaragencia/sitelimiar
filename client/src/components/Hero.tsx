import { Button } from "@/components/ui/button";
import { ChevronDown, TrendingUp, Brain, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particleCount = window.innerWidth < 768 ? 150 : 320; // Menos partículas no mobile
    const connectionDistance = window.innerWidth < 768 ? 100 : 150; // Menor distância de conexão no mobile
    const mouseRadius = window.innerWidth < 768 ? 120 : 200;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        const baseSpeed = window.innerWidth < 768 ? 0.3 : 0.5; // Movimento mais suave
        
        // 60% das partículas à direita, 40% à esquerda
        let x;
        if (i < particleCount * 0.6) {
          // 60% à direita (50% - 100% da largura)
          x = (Math.random() * 0.5 + 0.5) * canvas.width;
        } else {
          // 40% à esquerda (0% - 50% da largura)
          x = Math.random() * 0.5 * canvas.width;
        }
        
        particlesRef.current.push({
          x: x,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * baseSpeed,
          vy: (Math.random() - 0.5) * baseSpeed,
          originalVx: (Math.random() - 0.5) * baseSpeed,
          originalVy: (Math.random() - 0.5) * baseSpeed,
          radius: Math.random() * 1.5 + 0.8, // Partículas menores para melhor performance
          opacity: 0.3, // 30% opacidade fixa
          trail: []
        });
      }
    };

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.trail.push({ x: particle.x, y: particle.y });
        
        const trailLength = window.innerWidth < 768 ? 8 : 12; // Trail menor no mobile para performance
        if (particle.trail.length > trailLength) {
          particle.trail.shift();
        }

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          const forceMultiplier = window.innerWidth < 768 ? 0.3 : 0.4; // Força reduzida para movimento suave
          particle.vx += Math.cos(angle) * force * forceMultiplier;
          particle.vy += Math.sin(angle) * force * forceMultiplier;
        } else {
          const returnSpeed = window.innerWidth < 768 ? 0.015 : 0.025; // Retorno mais suave
          particle.vx += (particle.originalVx - particle.vx) * returnSpeed;
          particle.vy += (particle.originalVy - particle.vy) * returnSpeed;
        }

        const friction = window.innerWidth < 768 ? 0.985 : 0.992; // Menos fricção para movimento mais fluido
        particle.vx *= friction;
        particle.vy *= friction;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.originalVx *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.originalVy *= -1;
        }

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });
    };

    const drawTrails = () => {
      particlesRef.current.forEach(particle => {
        if (particle.trail.length > 1) {
          for (let i = 1; i < particle.trail.length; i++) {
            const opacity = (i / particle.trail.length) * 0.2; // Trail ainda mais sutil
            ctx.beginPath();
            ctx.moveTo(particle.trail[i-1].x, particle.trail[i-1].y);
            ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
            ctx.strokeStyle = `rgba(255, 127, 0, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
    };

    const drawParticles = () => {
      particlesRef.current.forEach(particle => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let glowIntensity = 1;
        if (distance < mouseRadius) {
          glowIntensity = 1 + (mouseRadius - distance) / mouseRadius;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * glowIntensity, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 127, 0, ${particle.opacity * glowIntensity})`;
        ctx.fill();

        if (distance < mouseRadius) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * glowIntensity * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 215, 0, ${0.08 * glowIntensity})`; // Brilho mais sutil
          ctx.fill();
        }
      });
    };

    const drawConnections = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3; // 30% opacidade máxima
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.strokeStyle = `rgba(255, 127, 0, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    let lastTime = 0;
    const targetFPS = window.innerWidth < 768 ? 30 : 60; // FPS reduzido no mobile
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        updateParticles();
        drawConnections();
        drawTrails();
        drawParticles();
        lastTime = currentTime;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
      createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      // Resetar posição do mouse quando touch acaba para não manter efeito
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    init();
    createParticles();
    animate(0);

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-40">
      {/* Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full bg-black dark:bg-gray-900"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-20 container mx-auto px-6 font-thin">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight animate-fade-in-up text-left">
            <span className="block text-white drop-shadow-2xl ml-[0px] mr-[0px] pl-[0px] pr-[0px] pt-[4px] pb-[4px] mt-[12px] mb-[12px] text-[60px]">Existe um lugar entre</span>
            <span className="block md:text-5xl lg:text-6xl text-limiar-orange pl-[0px] pr-[0px] ml-[0px] mr-[0px] text-[45px] font-black mt-[-50px] mb-[-50px] pt-[22px] pb-[22px]">
              o que foi e o que <span className="font-extrabold tracking-tight text-[65px]">está por vir</span>.
            </span>
            <span className="block text-white drop-shadow-2xl pl-[-31px] pr-[-31px] ml-[0px] mr-[0px] font-thin pt-[70px] pb-[70px] mt-[51px] mb-[51px] text-[55px]">
              Bem-vindo(a) ao <span className="font-semibold text-limiar-orange drop-shadow-lg">Limiar.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="md:text-xl text-white drop-shadow-lg max-w-2xl animate-fade-in-up text-justify font-thin text-[20px] mt-[25px] mb-[25px] ml-[3px] mr-[3px] pl-[-7px] pr-[-7px] pt-[8px] pb-[8px]">
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
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background h-10 px-8 py-4 border-2 border-limiar-orange text-limiar-orange font-poppins font-semibold rounded-lg text-lg hover:bg-limiar-orange hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl mt-[30px] mb-[30px] pl-[30px] pr-[30px] ml-[-13px] mr-[-13px] pt-[18px] pb-[18px]"
            >
              Construa o Impossível
            </Button>
          </div>

          {/* Stats - Distribuídos horizontalmente */}
          <div className="w-full max-w-5xl animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
              <div className="flex items-center gap-4 group animate-[slideInLeft_0.8s_ease-out_0.2s_both] justify-center md:justify-start">
                <div className="relative">
                  <TrendingUp className="w-8 h-8 text-limiar-orange animate-pulse group-hover:scale-125 group-hover:text-limiar-gold transition-all duration-300" />
                  <div className="absolute inset-0 bg-limiar-orange/20 rounded-full blur-md animate-pulse group-hover:bg-limiar-gold/30 transition-colors duration-300"></div>
                </div>
                <span className="font-medium text-white drop-shadow-lg group-hover:bg-gradient-to-r group-hover:from-limiar-orange group-hover:to-limiar-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-center md:text-left text-[18px]">50+ marcas transformadas</span>
              </div>
              
              <div className="flex items-center gap-4 group animate-[slideInLeft_0.8s_ease-out_0.4s_both] justify-center">
                <div className="relative">
                  <Brain className="w-8 h-8 text-limiar-orange animate-pulse group-hover:scale-125 group-hover:text-limiar-gold transition-all duration-300" />
                  <div className="absolute inset-0 bg-limiar-orange/20 rounded-full blur-md animate-pulse group-hover:bg-limiar-gold/30 transition-colors duration-300"></div>
                </div>
                <span className="font-medium text-white drop-shadow-lg group-hover:bg-gradient-to-r group-hover:from-limiar-orange group-hover:to-limiar-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-base text-center">Ecossistema de IA</span>
              </div>
              
              <div className="flex items-center gap-4 group animate-[slideInLeft_0.8s_ease-out_0.6s_both] justify-center md:justify-end">
                <div className="relative">
                  <Zap className="w-8 h-8 text-limiar-orange animate-pulse group-hover:scale-125 group-hover:text-limiar-gold transition-all duration-300" />
                  <div className="absolute inset-0 bg-limiar-orange/20 rounded-full blur-md animate-pulse group-hover:bg-limiar-gold/30 transition-colors duration-300"></div>
                </div>
                <span className="text-white drop-shadow-lg group-hover:bg-gradient-to-r group-hover:from-limiar-orange group-hover:to-limiar-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-center md:text-right text-[18px] font-bold">O futuro não espera</span>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center animate-fade-in-up pt-[5px] pb-[5px] pl-[0px] pr-[0px] mt-[33px] mb-[33px] ml-[0px] mr-[0px]">
              <div className="animate-bounce">
                <ChevronDown className="text-4xl text-limiar-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
