import { Button } from "@/components/ui/button";
import { Users, Eye, ServerCog, TrendingUp, Check, X } from "lucide-react";

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
    <section id="diferenca" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 text-gray-900 dark:text-white">
            "A diferença entre <span className="bg-gradient-to-r from-limiar-orange to-limiar-gold bg-clip-text text-transparent">usar IA</span> e{" "}
            <span className="bg-gradient-to-r from-limiar-gold to-limiar-orange bg-clip-text text-transparent">ser IA</span> em essência criativa."
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
                className="group bg-white dark:bg-dark-card rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-200 dark:border-dark-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color === 'limiar-orange' ? 'from-limiar-orange to-limiar-gold' : 'from-limiar-gold to-limiar-orange'} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                    <IconComponent className="text-white text-2xl" size={24} />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 dark:text-white">
                    {pillar.title}
                  </h3>
                </div>
                <h4 className={`text-xl font-semibold text-${pillar.color} mb-4`}>{pillar.subtitle}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                <div className={`bg-${pillar.color}/10 dark:bg-${pillar.color}/20 rounded-lg p-4`}>
                  <p className={`text-${pillar.color} font-medium`}>
                    <strong>Resultado:</strong> {pillar.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contrast Table */}
        <div className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-dark-border">
          <div className="bg-gradient-to-r from-limiar-orange to-limiar-gold p-6">
            <h3 className="text-3xl font-poppins font-bold text-white text-center">
              O que outros fazem vs. O que a Limiar faz
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Abordagem Convencional */}
            <div className="p-8 bg-gray-50 dark:bg-gray-800">
              <h4 className="text-2xl font-poppins font-bold text-gray-600 dark:text-gray-400 mb-6 text-center">
                Abordagem Convencional
              </h4>
              <div className="space-y-4">
                {conventional.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="text-red-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Abordagem Limiar */}
            <div className="p-8 bg-gradient-to-br from-limiar-orange/10 to-limiar-gold/10 dark:bg-gradient-to-br dark:from-limiar-orange/20 dark:to-limiar-gold/20">
              <h4 className="text-2xl font-poppins font-bold text-limiar-orange mb-6 text-center">
                Abordagem Limiar
              </h4>
              <div className="space-y-4">
                {limiar.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-900 dark:text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl font-poppins font-medium text-gray-900 dark:text-white mb-8">
            "A questão não é se sua empresa precisa de IA. É quando ela vai parar de observar o futuro e começar a habitá-lo."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="px-8 py-4 bg-gradient-to-r from-limiar-orange to-limiar-gold text-white font-poppins font-semibold rounded-full text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Conheça Nossas Soluções
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-limiar-orange text-limiar-orange font-poppins font-semibold rounded-full text-lg hover:bg-limiar-orange hover:text-white transition-all duration-300"
            >
              Agende uma Consultoria Estratégica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
