import { Button } from "@/components/ui/button";
import { Users, Eye, ServerCog, TrendingUp, Check, X } from "lucide-react";
import backgroundImage from "@assets/194242_1753496244462.jpg";
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

export function NossaDiferenca() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Users,
      title: "Síntese Tecnologia + Humanidade",
      subtitle: "O encontro limiar entre dados e poesia.",
      description: "Cada projeto nasce da união íntima entre dados rigorosos e insights profundamente humanos. No encontro onde números ganham narrativa, nossos algoritmos carregam alma, nossas automações preservam a essência humana. Não substituímos pessoas — amplificamos seu potencial criativo.",
      result: "Soluções que funcionam com eficiência e inspiram com propósito.",
      color: "limiar-orange"
    },
    {
      icon: Eye,
      title: "Arquitetura da Realidade Percebida (ARPer)",
      subtitle: "A arquitetura limiar das percepções.",
      description: "Nossa metodologia proprietária vai além da implementação técnica. Mapeamos como sua audiência percebe, sente e interage com sua marca, criando soluções de IA que não apenas funcionam — elas ressoam na frequência exata do seu público.",
      result: "IA que fala a linguagem emocional dos seus clientes.",
      color: "limiar-gold"
    },
    {
      icon: ServerCog,
      title: "Personalização Total",
      subtitle: "A arquitetura limiar do seu possível.",
      description: "Não acreditamos em soluções prontas. Arquitetamos futuros sob medida, onde cada projeto nasce das suas necessidades específicas, respeitando seus limites financeiros e operacionais. Desde startups visionárias até corporações estabelecidas — transformamos limitações em matéria-prima para o impossível.",
      result: "IA moldada exatamente à sua realidade, que cresce no seu ritmo e dentro do seu orçamento.",
      color: "limiar-orange"
    },
    {
      icon: TrendingUp,
      title: "Métricas da Nova Era + Cocriação",
      subtitle: "A matemática limiar das conexões.",
      description: "Desenvolvemos métricas proprietárias ICE (Impacto, Co-criação, Empatia) e LTV-Q (Lifetime Value Qualitativo) para acompanhar o que realmente importa. Você não contrata a Limiar — você se torna parte do nosso ecossistema criativo evolutivo.",
      result: "Crescimento sustentável baseado em conexões autênticas e parceria contínua.",
      color: "limiar-gold"
    }
  ];

  const conventional = [
    "Soluções padronizadas",
    "Implementa ferramentas de IA como chatbots anabolizados",
    "Foca em eficiência operacional",
    "Orçamento fixo, escopo rígido",
    "Entrega projeto e encerra"
  ];

  const limiar = [
    "Soluções personalizadas a partir de cada realidade",
    "Arquiteta ecossistemas de experiências inteligentes",
    "Também constrói conexões emocionais",
    "Flexibilidade total às suas possibilidades",
    "Inicia parceria co-criativa"
  ];

  return (
    <section 
      id="diferenca" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Texture/Ranhura Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 41%, rgba(255,255,255,0.1) 43%, transparent 44%),
            linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.05) 41%, rgba(255,255,255,0.05) 43%, transparent 44%)
          `,
          backgroundSize: '20px 20px'
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            "A diferença entre <span className="text-limiar-gold font-extrabold">usar IA</span> e <br />
            <span className="text-limiar-orange font-extrabold">ser IA</span> em essência criativa."
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-poppins ml-[167px] mr-[167px] pl-[0px] pr-[0px] pt-[0px] pb-[0px] mt-[-10px] mb-[-10px] text-justify font-normal" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 8px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.8)' }}>
            Enquanto outros tratam a inteligência artificial como ferramenta, nós a abraçamos como linguagem.
            Nossa metodologia proprietária transforma dados em narrativas, algoritmos em experiências e
            possibilidades em realidades que redefinem mercados.
          </p>
        </div>

        {/* Pillars Section Title */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-poppins font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            OS 4 PILARES DA LIMIAR | <span className="text-limiar-orange">COMO HABITAMOS O FUTURO</span>
          </h3>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="group relative bg-black/40 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_25px_60px_rgba(0,0,0,0.4),0_0_50px_rgba(255,127,0,0.3)] hover:scale-[1.02] transition-all duration-700 border border-white/10 animate-fade-in-up transform-gpu overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r ${pillar.color === 'limiar-orange' ? 'from-limiar-orange/50 via-limiar-gold/30 to-limiar-orange/50' : 'from-limiar-gold/50 via-limiar-orange/30 to-limiar-gold/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}>
                  <div className="bg-black/60 rounded-3xl w-full h-full"></div>
                </div>

                {/* Content Layer */}
                <div className="relative z-10">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative w-24 h-24 bg-gradient-to-br from-limiar-orange to-limiar-gold rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <IconComponent className="text-limiar-orange" size={40} />
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-limiar-orange to-limiar-gold opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-poppins font-bold text-white mb-2 group-hover:text-limiar-orange transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-limiar-orange">
                        {pillar.subtitle}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed font-poppins font-thin text-justify">
                    {index === 0 ? (
                      <>
                        Cada projeto nasce da união íntima entre dados rigorosos e insights profundamente humanos. No encontro onde números ganham narrativa, nossos algoritmos carregam alma, nossas automações preservam a essência humana. Não substituímos pessoas — amplificamos seu potencial criativo.
                      </>
                    ) : (
                      pillar.description
                    )}
                  </p>

                  {/* Result Card */}
                  <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${pillar.color === 'limiar-orange' ? 'from-limiar-orange to-limiar-gold' : 'from-limiar-gold to-limiar-orange'} rounded-r-full`}></div>
                    <div className="pl-4">
                      <span className="inline-block text-sm font-bold mb-2 text-limiar-orange uppercase tracking-wider">
                        Resultado
                      </span>
                      <p className="text-white font-poppins font-thin leading-relaxed">
                        {pillar.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-limiar-orange/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-8 left-8 w-1 h-1 bg-limiar-gold/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-limiar-orange/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-800" style={{ animationDelay: '0.6s' }}></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div id="stats-section" className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Stat 1 - 95% Satisfaction */}
          <div className="group text-center relative">
            {/* Massive glass number with animations */}
            <div className="relative mb-8">
              <div className="text-9xl font-black font-poppins text-limiar-orange" style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 4px rgba(0,0,0,0.6)' }}>
                {startCount ? (
                  <CountUp
                    start={0}
                    end={95}
                    duration={2.5}
                    suffix="%"
                    useEasing={true}
                    easingFn={(t, b, c, d) => c * (1 - Math.pow(2, -10 * t / d)) * 1024 / 1023 + b}
                  />
                ) : (
                  "0%"
                )}
              </div>
              {/* Floating light particles */}
              <div className="absolute top-0 left-1/4 w-3 h-3 bg-limiar-orange/50 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-limiar-gold/60 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-limiar-orange/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Glass text box */}
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 animate-fade-in-up mt-[-20px] mb-[-20px]" style={{ animationDelay: '0.2s' }}>
              {/* Conversational title */}
              <h4 className="text-xl font-poppins font-bold text-limiar-orange mb-3 group-hover:text-limiar-orange transition-colors duration-300 ml-[-6px] mr-[-6px]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                "Nossos clientes adoram tanto..."
              </h4>
              
              {/* Conversational description */}
              <p className="text-gray-300 font-poppins text-sm font-bold ml-[-17px] mr-[-17px]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                que <span className="text-limiar-orange font-semibold">95% renovam a parceria</span> após o primeiro projeto. 
                Não é só satisfação — é <span className="text-limiar-orange">conexão genuína</span>.
              </p>
            </div>
          </div>

          {/* Stat 2 - 3x ROI */}
          <div className="group text-center relative">
            {/* Massive glass number with animations */}
            <div className="relative mb-8">
              <div className="text-9xl font-black font-poppins text-limiar-orange" style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 4px rgba(0,0,0,0.6)' }}>
                {startCount ? (
                  <CountUp
                    start={0}
                    end={3}
                    duration={2.8}
                    suffix="x"
                    useEasing={true}
                    easingFn={(t, b, c, d) => c * (1 - Math.pow(2, -10 * t / d)) * 1024 / 1023 + b}
                    delay={0.3}
                  />
                ) : (
                  "0x"
                )}
              </div>
              {/* Floating light particles */}
              <div className="absolute top-1/4 right-1/3 w-2.5 h-2.5 bg-limiar-gold/50 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-limiar-orange/60 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-limiar-gold/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '1.2s' }}></div>
            </div>
            
            {/* Glass text box */}
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 animate-fade-in-up mt-[-20px] mb-[-20px]" style={{ animationDelay: '0.4s' }}>
              {/* Conversational title */}
              <h4 className="text-xl font-poppins font-bold text-limiar-orange mb-3 group-hover:text-limiar-orange transition-colors duration-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                "Cada real investido vira..."
              </h4>
              
              {/* Conversational description */}
              <p className="text-gray-300 font-poppins text-sm font-bold pl-[-3px] pr-[-3px] ml-[-16px] mr-[-16px]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                <span className="text-limiar-orange font-semibold">3 reais de retorno</span> em média. 
                Porque IA bem feita não é gasto — é <span className="text-limiar-orange">multiplicador de resultados</span>.
              </p>
            </div>
          </div>

          {/* Stat 3 - 24h Response */}
          <div className="group text-center relative">
            {/* Massive glass number with animations */}
            <div className="relative mb-8">
              <div className="text-9xl font-black font-poppins text-limiar-orange" style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 4px rgba(0,0,0,0.6)' }}>
                {startCount ? (
                  <CountUp
                    start={0}
                    end={24}
                    duration={3.1}
                    suffix="h"
                    useEasing={true}
                    easingFn={(t, b, c, d) => c * (1 - Math.pow(2, -10 * t / d)) * 1024 / 1023 + b}
                    delay={0.6}
                  />
                ) : (
                  "0h"
                )}
              </div>
              {/* Floating light particles */}
              <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-limiar-orange/50 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-limiar-gold/60 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute top-1/4 right-1/2 w-1.5 h-1.5 bg-limiar-orange/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '1.3s' }}></div>
            </div>
            
            {/* Glass text box */}
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 animate-fade-in-up mt-[-20px] mb-[-20px]" style={{ animationDelay: '0.6s' }}>
              {/* Conversational title */}
              <h4 className="text-xl font-poppins font-bold text-limiar-orange mb-3 group-hover:text-limiar-orange transition-colors duration-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                "Urgência? Nós entendemos..."
              </h4>
              
              {/* Conversational description */}
              <p className="text-gray-300 font-poppins text-sm pl-[0px] pr-[0px] font-bold ml-[-14px] mr-[-14px] mt-[-1px] mb-[-1px]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                <span className="text-limiar-orange font-semibold">24 horas</span> para análise inicial e proposta estratégica. 
                Porque <span className="text-limiar-orange">oportunidades não esperam</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Contrast Table */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-limiar-orange to-limiar-gold p-8">
            <h3 className="text-3xl font-poppins font-bold text-white text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              O que outros fazem X <span className="text-limiar-orange relative inline-block group cursor-pointer overflow-hidden">
                o que a Limiar faz
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-limiar-orange/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" style={{ animationDelay: '0.1s' }}></div>
              </span>
            </h3>
            <p className="text-white text-center mt-2 font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Veja a diferença na prática</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
            {/* Abordagem Convencional */}
            <div className="p-8 bg-black/30 backdrop-blur-sm relative">
              <div className="absolute top-4 right-4 w-12 h-12 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30">
                <X className="text-red-400" size={20} />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-white mb-8 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Abordagem Convencional
              </h4>
              <div className="space-y-5">
                {conventional.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-black/20 transition-colors duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-500/30">
                      <X className="text-red-400" size={12} />
                    </div>
                    <span className="text-gray-200 leading-relaxed font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Abordagem Limiar */}
            <div className="p-8 bg-gradient-to-br from-limiar-orange/20 to-limiar-gold/20 backdrop-blur-sm relative">
              <div className="absolute top-4 right-4 w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/30">
                <Check className="text-green-400" size={20} />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-limiar-orange mb-8 text-center cursor-pointer hover:scale-110 hover:animate-pulse transition-all duration-300 ease-in-out" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Abordagem Limiar
              </h4>
              <div className="space-y-5">
                {limiar.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-limiar-orange/10 hover:to-limiar-gold/10 transition-all duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-500/30">
                      <Check className="text-green-400" size={12} />
                    </div>
                    <span className="text-white font-medium leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <p className="text-2xl md:text-3xl font-poppins font-medium text-white mb-2">
              "A questão não é se sua empresa precisa de IA."
            </p>
            <p className="text-xl md:text-2xl font-poppins font-bold bg-gradient-to-r from-limiar-orange to-limiar-gold bg-clip-text text-transparent">
              É quando ela vai parar de observar o futuro e começar a habitá-lo.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => {
                const element = document.getElementById('solucoes');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-10 py-5 bg-gradient-to-r from-limiar-orange to-limiar-gold text-white font-poppins font-semibold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Conheça Nossas Soluções</span>
              <div className="absolute inset-0 bg-gradient-to-r from-limiar-gold to-limiar-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-10 py-5 border-2 border-limiar-orange text-limiar-orange font-poppins font-semibold rounded-full text-lg hover:bg-limiar-orange hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <span>Agende uma Consultoria Estratégica</span>
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Disponível para novos projetos</span>
            </div>
            <span>•</span>
            <span>Resposta em até 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
