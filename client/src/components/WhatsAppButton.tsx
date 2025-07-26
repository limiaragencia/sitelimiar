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
      className={`fixed bottom-8 right-8 z-[9999] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_25px_50px_rgba(34,197,94,0.5)] transition-all duration-300 animate-whatsapp-float transform-gpu relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500 backdrop-blur-sm border-2 border-white/20 ${
        isClicked 
          ? 'bg-limiar-orange scale-95 hover:shadow-[0_25px_50px_rgba(255,127,0,0.5)]' 
          : 'bg-green-500 hover:bg-green-600 hover:scale-110'
      }`}
      aria-label="Contato via WhatsApp"
      style={{
        filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))',
      }}
    >
      <MessageCircle className="text-white text-2xl" size={28} />
    </button>
  );
}
