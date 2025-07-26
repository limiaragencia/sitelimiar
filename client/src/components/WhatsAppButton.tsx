import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isClicked, setIsClicked] = useState(false);
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de conhecer mais sobre as soluções da Limiar.";
  
  const handleWhatsAppClick = () => {
    setIsClicked(true);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    
    // Resetar a cor após um tempo
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)] transition-all duration-300 animate-whatsapp-float transform-gpu relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500 ${
        isClicked 
          ? 'bg-limiar-orange scale-95 hover:shadow-[0_20px_40px_rgba(255,127,0,0.4)]' 
          : 'bg-green-500 hover:bg-green-600 hover:scale-110'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="text-white text-2xl" size={28} />
    </button>
  );
}
