import { Button } from "@/components/ui/button";
import { Users, Eye, ServerCog, TrendingUp, Check, X } from "lucide-react";
import backgroundImage from "@assets/194242_1753496244462.jpg";

export function NossaDiferenca() {
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
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-limiar-orange/20 to-limiar-gold/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
            "A diferença entre <span className="text-limiar-gold font-extrabold">usar IA</span> e <br />
            <span className="text-limiar-orange font-extrabold">ser IA</span> em essência criativa."
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-poppins font-thin">
            Enquanto outros tratam a inteligência artificial como ferramenta, nós a abraçamos como linguagem.
            Nossa metodologia proprietária transforma dados em narrativas, algoritmos em experiências e
            possibilidades em realidades que redefinem mercados.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 border border-white/20 animate-fade-in-up hover:bg-white"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color === 'limiar-orange' ? 'from-limiar-orange to-limiar-gold' : 'from-limiar-gold to-limiar-orange'} rounded-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-poppins font-bold text-gray-900 group-hover:text-limiar-orange transition-colors duration-300">
                      {pillar.title}
                    </h3>
                  </div>
                </div>
                <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${pillar.color === 'limiar-orange' ? 'from-limiar-orange to-limiar-gold' : 'from-limiar-gold to-limiar-orange'} bg-clip-text text-transparent`}>
                  {pillar.subtitle}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed font-poppins font-thin">
                  {pillar.description}
                </p>
                <div className={`bg-gradient-to-r ${pillar.color === 'limiar-orange' ? 'from-limiar-orange/10 to-limiar-gold/10' : 'from-limiar-gold/10 to-limiar-orange/10'} rounded-lg p-4 border-l-4 ${pillar.color === 'limiar-orange' ? 'border-limiar-orange' : 'border-limiar-gold'}`}>
                  <p className="text-gray-900 font-poppins font-thin">
                    <span className={`font-bold bg-gradient-to-r ${pillar.color === 'limiar-orange' ? 'from-limiar-orange to-limiar-gold' : 'from-limiar-gold to-limiar-orange'} bg-clip-text text-transparent`}>Resultado:</span> {pillar.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-limiar-orange to-limiar-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">95%</span>
            </div>
            <h4 className="text-xl font-poppins font-bold text-white mb-2">Taxa de Satisfação</h4>
            <p className="text-gray-200">Clientes que renovaram parcerias após primeiro projeto</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-limiar-gold to-limiar-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">3x</span>
            </div>
            <h4 className="text-xl font-poppins font-bold text-white mb-2">ROI Médio</h4>
            <p className="text-gray-200">Retorno sobre investimento em nossos projetos de IA</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-limiar-orange to-limiar-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">24h</span>
            </div>
            <h4 className="text-xl font-poppins font-bold text-white mb-2">Tempo de Resposta</h4>
            <p className="text-gray-200">Para análise inicial e proposta estratégica</p>
          </div>
        </div>

        {/* Contrast Table */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-limiar-orange to-limiar-gold p-8">
            <h3 className="text-3xl font-poppins font-bold text-white text-center">
              O que outros fazem vs. O que a Limiar faz
            </h3>
            <p className="text-white/90 text-center mt-2">Veja a diferença na prática</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
            {/* Abordagem Convencional */}
            <div className="p-8 bg-gray-50 dark:bg-dark-bg-secondary relative">
              <div className="absolute top-4 right-4 w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <X className="text-red-500" size={20} />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-gray-600 dark:text-gray-400 mb-8 text-center">
                Abordagem Convencional
              </h4>
              <div className="space-y-5">
                {conventional.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="text-red-500" size={12} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Abordagem Limiar */}
            <div className="p-8 bg-gradient-to-br from-limiar-orange/10 to-limiar-gold/10 dark:bg-gradient-to-br dark:from-limiar-orange/20 dark:to-limiar-gold/20 relative">
              <div className="absolute top-4 right-4 w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <Check className="text-green-500" size={20} />
              </div>
              <h4 className="text-2xl font-poppins font-bold bg-gradient-to-r from-limiar-orange to-limiar-gold bg-clip-text text-transparent mb-8 text-center">
                Abordagem Limiar
              </h4>
              <div className="space-y-5">
                {limiar.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-limiar-orange/5 hover:to-limiar-gold/5 transition-all duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-green-500" size={12} />
                    </div>
                    <span className="text-gray-900 dark:text-white font-medium leading-relaxed">{item}</span>
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
