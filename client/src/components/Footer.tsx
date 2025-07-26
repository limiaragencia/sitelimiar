import { Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoWhite from "@assets/logo centralizada branca_1753484043527.png";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="bg-gray-900 dark:bg-dark-gradient text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoWhite} 
                alt="Limiar Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md font-poppins font-thin">
              Agência criativa especializada em IA. Transformamos negócios com soluções inteligentes e personalizadas
              que projetam sua marca para o futuro.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-limiar-orange rounded-full flex items-center justify-center hover:bg-limiar-gold shadow-lg hover:shadow-[0_10px_30px_rgba(255,127,0,0.4)] hover:scale-110 transition-all duration-300 transform-gpu"
              >
                <Linkedin className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-limiar-orange rounded-full flex items-center justify-center hover:bg-limiar-gold shadow-lg hover:shadow-[0_10px_30px_rgba(255,127,0,0.4)] hover:scale-110 transition-all duration-300 transform-gpu"
              >
                <Instagram className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-limiar-orange rounded-full flex items-center justify-center hover:bg-limiar-gold shadow-lg hover:shadow-[0_10px_30px_rgba(255,127,0,0.4)] hover:scale-110 transition-all duration-300 transform-gpu"
              >
                <Youtube className="text-white" size={20} />
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
            <h3 className="text-xl font-poppins font-semibold mb-4 text-limiar-gold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-limiar-orange" size={16} />
                <span className="text-gray-300">contato@limiar.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-limiar-orange" size={16} />
                <span className="text-gray-300">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-limiar-orange" size={16} />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Limiar. Todos os direitos reservados. O futuro, agora.</p>
        </div>
      </div>
    </footer>
  );
}
