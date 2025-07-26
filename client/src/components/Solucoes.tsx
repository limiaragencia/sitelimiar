import { Button } from "@/components/ui/button";
import { Bot, UserCheck, Video, Camera, User } from "lucide-react";

export function Solucoes() {
  const solutions = [
    {
      icon: Bot,
      title: "Agentes Cognitivos",
      subtitle: "Onde a inteligência encontra o entendimento",
      description: "Desenvolvemos assistentes inteligentes que transcendem a automação convencional. Nossos agentes aprendem continuamente, dominam a linguagem única da sua marca e resolvem desafios com precisão estratégica.",
      useCases: [
        {
          name: "Agente de Atendimento",
          metrics: ["+150% satisfação do cliente", "85% resolução sem escalação", "-70% tempo de resposta"]
        },
        {
          name: "Agente SDR/Vendas",
          metrics: ["+200% conversão de leads", "95% precisão qualificação", "+180% ticket médio"]
        }
      ],
      className: "lg:col-span-2 xl:col-span-1"
    },
    {
      icon: UserCheck,
      title: "Gêmeos Digitais",
      subtitle: "Sua presença multiplicada",
      description: "Criamos avatares digitais que capturam não apenas suas palavras, mas a essência do seu pensamento. Seus Gêmeos aprendem, evoluem e se adaptam, expandindo sua presença para territórios antes inalcançáveis.",
      applications: [
        { icon: "🎓", name: "Educador Perpétuo" },
        { icon: "🤝", name: "Consultor Onipresente" },
        { icon: "📢", name: "Embaixador da Marca" }
      ]
    },
    {
      icon: Video,
      title: "Lumière",
      subtitle: "Onde a técnica encontra a arte",
      description: "Criação e edição de vídeos cinematográficos com IA. Transformamos visões em realidades cinematográficas, onde cada frame é uma pincelada consciente e cada vídeo uma obra de arte.",
      hasVideo: true,
      videoId: "9Z_rt-H9h3E"
    },
    {
      icon: Camera,
      title: "Cena Digital",
      subtitle: "Aproxime-se da perfeição",
      description: "Criação e edição de vídeos e fotografias de produtos e ambientes com IA. Transformamos produtos comuns em protagonistas extraordinários através de tecnologia visual avançada.",
      categories: [
        { icon: "📦", name: "Produtos Premium" },
        { icon: "🏠", name: "Ambientes & Espaços" },
        { icon: "🖼️", name: "Coleções & Catálogos" },
        { icon: "❤️", name: "Lifestyle & Contexto" }
      ]
    },
    {
      icon: User,
      title: "Aura",
      subtitle: "Sua alma em cada pixel",
      description: "Ensaios fotográficos profissionais com IA. Criamos retratos que capturam não apenas sua imagem, mas sua essência, energia e personalidade únicas.",
      services: [
        { icon: "👤", name: "Retratos Corporativos" },
        { icon: "👥", name: "Ensaios de Equipe" },
        { icon: "⭐", name: "Personal Branding" }
      ]
    }
  ];

  return (
    <section 
      id="solucoes" 
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/10 dark:to-orange-900/20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,127,0,0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0,100,200,0.2) 0%, transparent 50%),
            linear-gradient(45deg, transparent 40%, rgba(255,127,0,0.05) 41%, rgba(255,127,0,0.05) 43%, transparent 44%),
            linear-gradient(-45deg, transparent 40%, rgba(0,100,200,0.05) 41%, rgba(0,100,200,0.05) 43%, transparent 44%)
          `,
          backgroundSize: '800px 800px, 600px 600px, 30px 30px, 30px 30px',
          animation: 'float 20s ease-in-out infinite'
        }}
      ></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-limiar-orange to-limiar-gold rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animation: 'float 15s ease-in-out infinite'
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-8 text-gray-900 dark:text-white">
            Onde outros vendem ferramentas, <br />
            <span className="text-limiar-orange font-bold">
              nós arquitetamos futuros.
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-poppins font-thin">
              <strong>Diferenciação:</strong> Enquanto outros implementam soluções padronizadas, nós criamos ecossistemas inteligentes que evoluem com seu negócio.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-poppins font-thin">
              <strong>Simplificação:</strong> Transformamos a complexidade da IA em soluções elegantes que impulsionam seu crescimento.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-poppins font-thin">
              <strong>Personalização:</strong> Não seguimos receitas prontas — cada futuro que arquitetamos é único como sua empresa.
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className={`${solution.className || ''} bg-gradient-to-br from-gray-50 to-white dark:from-dark-card dark:to-dark-bg-secondary rounded-3xl p-8 shadow-lg hover:shadow-[0_25px_60px_rgba(0,0,0,0.15),0_0_40px_rgba(255,127,0,0.1)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(255,127,0,0.2)] hover:scale-[1.02] transition-all duration-500 border border-gray-200 dark:border-dark-border group transform-gpu relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-limiar-orange/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-limiar-orange to-limiar-gold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-gray-900 dark:text-white">
                      {solution.title}
                    </h3>
                    <p className="text-limiar-orange font-medium">{solution.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-poppins font-thin">
                  {solution.description}
                </p>

                {/* Use Cases for Agentes Cognitivos */}
                {solution.useCases && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {solution.useCases.map((useCase, idx) => (
                      <div key={idx} className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 border border-gray-200 dark:border-dark-border">
                        <h4 className="font-semibold text-limiar-orange mb-2">{useCase.name}</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {useCase.metrics.map((metric, metricIdx) => (
                            <li key={metricIdx}>• {metric}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Applications for Gêmeos */}
                {solution.applications && (
                  <div className="space-y-3 mb-6">
                    {solution.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-lg">{app.icon}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{app.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Video for Lumière */}
                {solution.hasVideo && (
                  <div className="mb-6">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${solution.videoId}`}
                        title="Lumière Demo"
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {/* Categories for Cena Digital */}
                {solution.categories && (
                  <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
                    {solution.categories.map((category, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span>{category.icon}</span>
                        <span className="text-gray-600 dark:text-gray-300">{category.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Services for Aura */}
                {solution.services && (
                  <div className="space-y-3 mb-6">
                    {solution.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-lg">{service.icon}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{service.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button className="w-full py-3 bg-gradient-to-r from-limiar-orange to-limiar-gold text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                  {solution.title === "Agentes Cognitivos" && "Veja como nossos agentes funcionam"}
                  {solution.title === "Gêmeos Digitais" && "Ative Seus Gêmeos Estratégicos"}
                  {solution.title === "Lumière" && "Transforme Sua História em Cinema"}
                  {solution.title === "Cena Digital" && "Eleve Seus Produtos ao Extraordinário"}
                  {solution.title === "Aura" && "Capture Sua Essência"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
