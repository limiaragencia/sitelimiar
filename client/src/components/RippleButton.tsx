import React, { useState, useEffect, useRef } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  randomFactor: number;
}

interface RippleButtonProps {
  icon: '✔️' | '❌';
  onClick?: () => void;
  className?: string;
  variant?: 'success' | 'error';
}

export const RippleButton: React.FC<RippleButtonProps> = ({ 
  icon, 
  onClick, 
  className = '', 
  variant = icon === '✔️' ? 'success' : 'error' 
}) => {
  const [ripples, setRipples] = useState<Ripple[]>();
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleIdRef = useRef(0);
  const animationFrameRef = useRef<number>();

  const baseStyles = variant === 'success' 
    ? 'bg-gradient-to-r from-emerald-500 to-green-400 shadow-emerald-500/50'
    : 'bg-gradient-to-r from-red-500 to-pink-400 shadow-red-500/50';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create new ripple with random properties
    const newRipple: Ripple = {
      id: rippleIdRef.current++,
      x,
      y,
      opacity: 0.8,
      scale: 0,
      randomFactor: 0.8 + Math.random() * 0.4, // Random factor between 0.8-1.2
    };

    setRipples(prev => [...(prev || []), newRipple]);
    setIsPressed(true);
    
    // Reset pressed state
    setTimeout(() => setIsPressed(false), 150);
    
    onClick?.();
  };

  // Animation loop using requestAnimationFrame
  useEffect(() => {
    const animate = () => {
      setRipples(prev => {
        if (!prev || prev.length === 0) return prev;
        
        const updatedRipples = prev.map(ripple => ({
          ...ripple,
          scale: ripple.scale + (2.5 * ripple.randomFactor), // Dynamic scale speed
          opacity: Math.max(0, ripple.opacity - 0.02 * ripple.randomFactor), // Dynamic fade
        })).filter(ripple => ripple.opacity > 0.01);

        if (updatedRipples.length > 0) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
        
        return updatedRipples;
      });
    };

    if (ripples && ripples.length > 0) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [ripples]);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`
        relative overflow-hidden
        w-12 h-12 rounded-full
        ${baseStyles}
        shadow-lg hover:shadow-xl
        transform transition-all duration-200 ease-out
        hover:scale-110 focus:scale-95
        ${isPressed ? 'animate-bounce scale-95' : ''}
        border border-white/20
        flex items-center justify-center
        text-white text-lg font-bold
        cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-white/30
        ${className}
      `}
      style={{
        filter: 'brightness(1.1) contrast(1.1)',
      }}
    >
      {/* Icon */}
      <span className="relative z-10 select-none">
        {icon}
      </span>

      {/* Ripple effects */}
      {ripples?.map(ripple => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            opacity: ripple.opacity,
            transform: `scale(${ripple.scale})`,
            transition: 'none',
          }}
        />
      ))}
    </button>
  );
};

// Interactive Buttons Demo Component
export const InteractiveButtonsDemo: React.FC = () => {
  const [clicks, setClicks] = useState({ success: 0, error: 0 });

  const handleSuccessClick = () => {
    setClicks(prev => ({ ...prev, success: prev.success + 1 }));
  };

  const handleErrorClick = () => {
    setClicks(prev => ({ ...prev, error: prev.error + 1 }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-900 rounded-2xl p-8 border border-gray-700">
      <h3 className="text-2xl font-poppins font-bold text-white mb-6 text-center">
        Botões Interativos com Ripple Effect
      </h3>
      
      <div className="flex gap-8 mb-6">
        <div className="flex flex-col items-center gap-2">
          <RippleButton 
            icon="✔️" 
            onClick={handleSuccessClick}
            variant="success"
          />
          <span className="text-emerald-400 text-sm font-medium">
            Clicks: {clicks.success}
          </span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <RippleButton 
            icon="❌" 
            onClick={handleErrorClick}
            variant="error"
          />
          <span className="text-red-400 text-sm font-medium">
            Clicks: {clicks.error}
          </span>
        </div>
      </div>

      <p className="text-gray-400 text-sm text-center max-w-md">
        Clique nos botões para ver o efeito ripple animado com propriedades randômicas. 
        Cada clique cria ondas únicas com velocidade e opacidade dinâmicas.
      </p>
    </div>
  );
};