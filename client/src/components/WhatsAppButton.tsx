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

  return null;
}
