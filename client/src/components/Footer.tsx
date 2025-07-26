import { Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react";
import logoGold from "@assets/limiar logo complta dourado cabeçalho site_1753516491901.png";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="bg-dark-gradient text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoGold} 
                alt="Limiar Logo" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md font-poppins font-thin">
              Agência criativa especializada em IA. Transformamos negócios com soluções inteligentes e personalizadas
              que projetam sua marca para o futuro.
            </p>
            <div className="flex space-x-6">
              <a
                href="http://instagram.com/limiar.agencia"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 shadow-lg hover:shadow-[0_15px_35px_rgba(255,20,147,0.4)] hover:scale-110 transition-all duration-500 transform-gpu hover:rotate-6"
                style={{
                  background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
                  animation: 'pulse 2s infinite'
                }}
              >
                <Instagram className="text-white" size={28} />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="https://www.youtube.com/@Limiar_agencIA"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 rounded-full flex items-center justify-center bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-[0_15px_35px_rgba(255,0,0,0.4)] hover:scale-110 transition-all duration-500 transform-gpu hover:-rotate-6"
                style={{
                  background: '#FF0000',
                  animation: 'pulse 2s infinite 0.5s'
                }}
              >
                <Youtube className="text-white" size={32} />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4 text-limiar-orange">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("diferenca")}
                  className="text-gray-300 hover:text-limiar-orange transition-colors"
                >
                  Nossa Diferença
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solucoes")}
                  className="text-gray-300 hover:text-limiar-orange transition-colors"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-gray-300 hover:text-limiar-orange transition-colors"
                >
                  Contato
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-limiar-orange transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4 text-limiar-orange">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-limiar-orange" size={16} />
                <span className="text-gray-300">contato@agencialimiar.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-limiar-orange" size={16} />
                <span className="text-gray-300">+55 34 99690 2230</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-limiar-orange" size={16} />
                <span className="text-gray-300">Uberlândia - MG | Pires do Rio - GO</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="font-poppins font-light flex items-center justify-center gap-1 flex-wrap">
            &copy; 2025 feito com 
            <Heart 
              className="text-limiar-orange animate-pulse hover:scale-125 transition-all duration-300 mx-1" 
              size={16} 
              fill="currentColor"
              style={{
                animation: 'heartbeat 1.5s ease-in-out infinite'
              }}
            /> 
            por Limiar. O futuro, agora! | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
