// Button and icon imports removed since solution blocks are no longer needed
import videoBackground from "@assets/freepik__dynamic-zoomin-a-mesmerizing-pattern-of-orange-dot__87277_1753519155013.mp4";

export function Solucoes() {
  // Solutions array removed as requested

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
          className="w-full h-full object-cover opacity-30"
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
        
        {/* Dark mode fade overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-transparent to-gray-900/90"
          style={{
            background: `
              linear-gradient(to right, rgba(17, 24, 39, 0.95) 0%, transparent 15%, transparent 85%, rgba(17, 24, 39, 0.95) 100%),
              linear-gradient(to bottom, rgba(17, 24, 39, 0.8) 0%, transparent 20%, transparent 80%, rgba(17, 24, 39, 0.8) 100%)
            `
          }}
        ></div>
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Color overlay for integration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-transparent to-blue-900/20"></div>
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
            <div className="group relative bg-gradient-to-br from-white/95 to-orange-50/80 dark:from-gray-800/95 dark:to-orange-900/30 rounded-2xl p-8 border border-orange-200/70 dark:border-orange-700/50 hover:border-orange-300/90 dark:hover:border-orange-600/70 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,127,0,0.25)] dark:hover:shadow-[0_20px_40px_rgba(255,127,0,0.35)] hover:scale-[1.02] transform-gpu overflow-hidden backdrop-blur-sm">
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
            <div className="group relative bg-gradient-to-br from-white/95 to-blue-50/80 dark:from-gray-800/95 dark:to-blue-900/30 rounded-2xl p-8 border border-blue-200/70 dark:border-blue-700/50 hover:border-blue-300/90 dark:hover:border-blue-600/70 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.35)] hover:scale-[1.02] transform-gpu overflow-hidden backdrop-blur-sm">
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
            <div className="group relative bg-gradient-to-br from-white/95 to-purple-50/80 dark:from-gray-800/95 dark:to-purple-900/30 rounded-2xl p-8 border border-purple-200/70 dark:border-purple-700/50 hover:border-purple-300/90 dark:hover:border-purple-600/70 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(147,51,234,0.25)] dark:hover:shadow-[0_20px_40px_rgba(147,51,234,0.35)] hover:scale-[1.02] transform-gpu overflow-hidden backdrop-blur-sm">
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

        {/* Solutions Grid section removed as requested */}
      </div>
    </section>
  );
}
