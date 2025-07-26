import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5534996902230";
    const message = "Olá! Gostaria de saber mais sobre os serviços da Limiar.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-bounce"
      style={{
        animation: 'float 3s ease-in-out infinite'
      }}
    >
      <MessageCircle 
        className="text-white group-hover:scale-110 transition-transform duration-300" 
        size={28} 
      />
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
    </button>
  );
}