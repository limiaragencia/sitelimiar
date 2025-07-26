import { Button } from "@/components/ui/button";
import { Bot, UserCheck, Video, Camera, User } from "lucide-react";
import videoBackground from "@assets/freepik__dynamic-zoomin-a-mesmerizing-pattern-of-orange-dot__87277_1753519155013.mp4";

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
      className="py-24 relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-80"
          style={{
            filter: 'blur(1px) saturate(1.2)',
            animation: 'videoFadeLoop 15s ease-in-out infinite',
            willChange: 'opacity, transform'
          }}
          onLoadStart={() => console.log('Video loading started')}
          onLoadedData={() => console.log('Video loaded successfully')}
          onError={(e) => console.error('Video error:', e)}
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
        
        {/* Fade In/Out Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-50/90 via-transparent to-gray-50/90 dark:from-gray-900/90 dark:via-transparent dark:to-gray-900/90"
          style={{
            background: `
              linear-gradient(to right, rgba(249, 250, 251, 0.95) 0%, transparent 15%, transparent 85%, rgba(249, 250, 251, 0.95) 100%),
              linear-gradient(to bottom, rgba(249, 250, 251, 0.8) 0%, transparent 20%, transparent 80%, rgba(249, 250, 251, 0.8) 100%)
            `
          }}
        ></div>
        
        {/* Dark mode fade overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-transparent to-gray-900/90 opacity-0 dark:opacity-100 transition-opacity duration-300"
          style={{
            background: `
              linear-gradient(to right, rgba(17, 24, 39, 0.95) 0%, transparent 15%, transparent 85%, rgba(17, 24, 39, 0.95) 100%),
              linear-gradient(to bottom, rgba(17, 24, 39, 0.8) 0%, transparent 20%, transparent 80%, rgba(17, 24, 39, 0.8) 100%)
            `
          }}
        ></div>
        
        {/* Color overlay for integration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/20 dark:from-orange-900/20 dark:via-transparent dark:to-blue-900/10"></div>
      </div>
      
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
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-8 text-gray-900 dark:text-white">
            Onde outros vendem ferramentas, <br />
            <span className="text-limiar-orange font-bold">
              nós arquitetamos futuros.
            </span>
          </h2>

          {/* Blocos de Diferenciação Visual */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Diferenciação */}
            <div className="group relative bg-gradient-to-br from-white to-orange-50/50 dark:from-dark-card dark:to-orange-900/20 rounded-2xl p-8 border border-orange-200/50 dark:border-orange-800/30 hover:border-orange-300/70 dark:hover:border-orange-600/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,127,0,0.15)] dark:hover:shadow-[0_20px_40px_rgba(255,127,0,0.25)] hover:scale-[1.02] transform-gpu overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full -translate-y-8 translate-x-8 blur-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm">
                  Diferenciação
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-poppins drop-shadow-sm">
                  Enquanto outros implementam soluções padronizadas, nós criamos <strong className="text-orange-600 dark:text-orange-400 drop-shadow-sm">ecossistemas inteligentes</strong> que evoluem com seu negócio.
                </p>
              </div>
            </div>

            {/* Simplificação */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/50 dark:from-dark-card dark:to-blue-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/30 hover:border-blue-300/70 dark:hover:border-blue-600/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.25)] hover:scale-[1.02] transform-gpu overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full -translate-y-8 translate-x-8 blur-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm">
                  Simplificação
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-poppins drop-shadow-sm">
                  Transformamos a complexidade da IA em <strong className="text-blue-600 dark:text-blue-400 drop-shadow-sm">soluções elegantes</strong> que impulsionam seu crescimento.
                </p>
              </div>
            </div>

            {/* Personalização */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50/50 dark:from-dark-card dark:to-purple-900/20 rounded-2xl p-8 border border-purple-200/50 dark:border-purple-800/30 hover:border-purple-300/70 dark:hover:border-purple-600/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] dark:hover:shadow-[0_20px_40px_rgba(147,51,234,0.25)] hover:scale-[1.02] transform-gpu overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full -translate-y-8 translate-x-8 blur-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm">
                  Personalização
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-poppins drop-shadow-sm">
                  Não seguimos receitas prontas — cada futuro que arquitetamos é <strong className="text-purple-600 dark:text-purple-400 drop-shadow-sm">único como sua empresa</strong>.
                </p>
              </div>
            </div>
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
