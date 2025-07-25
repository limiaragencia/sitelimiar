import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de conhecer mais sobre as soluções da Limiar.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-limiar-orange hover:bg-limiar-gold rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 animate-float"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="text-white text-2xl" size={28} />
    </button>
  );
}
