class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 200; // Aumentado de 100 para 200
        this.connectionDistance = 150;
        this.mouse = { x: 0, y: 0 };
        this.mouseRadius = 200;
        
        this.init();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.handleResize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    handleResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createParticles(); // Recriar partículas para nova dimensão
    }
    
    handleMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                originalVx: (Math.random() - 0.5) * 0.8,
                originalVy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.6 + 0.4,
                trail: [] // Array para armazenar posições anteriores (linhas de tração)
            });
        }
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            // Adicionar posição atual ao trail
            particle.trail.push({ x: particle.x, y: particle.y });
            
            // Limitar o tamanho do trail
            if (particle.trail.length > 15) {
                particle.trail.shift();
            }
            
            // Calcular distância do mouse
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Aplicar força do mouse
            if (distance < this.mouseRadius) {
                const force = (this.mouseRadius - distance) / this.mouseRadius;
                const angle = Math.atan2(dy, dx);
                particle.vx += Math.cos(angle) * force * 0.5;
                particle.vy += Math.sin(angle) * force * 0.5;
            } else {
                // Retornar gradualmente à velocidade original
                particle.vx += (particle.originalVx - particle.vx) * 0.02;
                particle.vy += (particle.originalVy - particle.vy) * 0.02;
            }
            
            // Aplicar fricção
            particle.vx *= 0.99;
            particle.vy *= 0.99;
            
            // Atualizar posição
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
                particle.originalVx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
                particle.originalVy *= -1;
            }
            
            // Keep particles within bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        });
    }
    
    drawTrails() {
        this.particles.forEach(particle => {
            if (particle.trail.length > 1) {
                for (let i = 1; i < particle.trail.length; i++) {
                    const opacity = (i / particle.trail.length) * 0.3;
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.trail[i-1].x, particle.trail[i-1].y);
                    this.ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
                    this.ctx.strokeStyle = `rgba(25, 25, 112, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        });
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            // Calcular distância do mouse para efeito de brilho
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            let glowIntensity = 1;
            if (distance < this.mouseRadius) {
                glowIntensity = 1 + (this.mouseRadius - distance) / this.mouseRadius;
            }
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius * glowIntensity, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(25, 25, 112, ${particle.opacity * glowIntensity})`;
            this.ctx.fill();
            
            // Adicionar brilho ao redor da partícula quando próxima do mouse
            if (distance < this.mouseRadius) {
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.radius * glowIntensity * 2, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(25, 25, 112, ${0.1 * glowIntensity})`;
                this.ctx.fill();
            }
        });
    }
    
    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.connectionDistance) {
                    const opacity = (1 - distance / this.connectionDistance) * 0.4;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(25, 25, 112, ${opacity})`;
                    this.ctx.lineWidth = 0.8;
                    this.ctx.stroke();
                }
            }
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawConnections();
        this.drawTrails(); // Desenhar linhas de tração
        this.drawParticles();
        
        requestAnimationFrame(() => this.animate());
    }
}

// Inicializar o sistema de partículas quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
});

