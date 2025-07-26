# Limiar AI Agency Website

## Overview

This is a full-stack TypeScript application for Limiar, a Brazilian AI agency. The project features a modern, responsive website showcasing AI solutions including cognitive agents, digital twins, and video/photo production services. Built with React on the frontend and Express on the backend, it uses a clean monorepo structure with shared components and database schemas.

## Recent Changes (January 2025)

### Hero Section Enhancements
- **Advanced Particle System**: Interactive Canvas-based animation with 60% particles concentrated on right side, 30% opacity, mouse/touch interaction, mobile optimization (150 particles, 30 FPS)
- **WhatsApp Button**: Green floating button with constant smooth animation, turns orange only when clicked
- **Typography Refinements**: "está por vir" text highlighted with font-extrabold and larger size (65px), "Bem-vindo(a) ao Limiar" fixed at 55px
- **Layout Improvements**: Stats text distributed horizontally across section, icons increased 60% (32px), scroll arrow doubled in size and repositioned after stats
- **Responsive Design**: Comprehensive mobile optimizations with touch support, reduced particle counts, adaptive FPS limiting
- **Texture Overlay**: Diagonal crosshatch texture pattern (20% opacity) layered over particle animation for added visual depth

### Nossa Diferença Section Enhancements
- **Futuristic Background**: Applied sci-fi image with orange/gold tones, fixed parallax effect
- **Advanced Overlay System**: Dark gradient overlay with brand color accent for optimal readability
- **Cards Redesign**: Translucent cards with backdrop blur effects, hover animations, improved gradients
- **Typography Consistency**: All explanatory text uses Poppins thin font for elegant consistency
- **Enhanced Statistics**: New metrics section with interactive hover effects and brand colors
- **Section Title**: "OS 4 PILARES DA LIMIAR | COMO HABITAMOS O FUTURO" with unified styling and orange accent
- **Texture Overlay**: Diagonal crosshatch texture pattern (30% opacity) over background for enhanced visual depth
- **Interactive Shadow Effects**: Advanced hover shadows with brand color accents, scaling transforms, and shimmer overlays on pillar cards

### Interactive Hover Shadow Effects (January 2025)
- **Hero Section Buttons**: Enhanced with brand-colored shadows (rgba(255,127,0,0.4)), shimmer effects, and smooth scaling
- **Hero Stats Elements**: Subtle shadow containers with backdrop blur and brand-colored shadow accents  
- **Nossa Diferença Cards**: Multi-layered shadows with brand color highlights and gradient overlays on hover
- **Soluções Cards**: Comprehensive shadow system with light/dark mode variants and transform-gpu optimization
- **WhatsApp Button**: Dynamic shadows that change based on click state (green/orange) with shimmer animation
- **Footer Social Links**: Elevated shadow effects with scaling and brand color glow
- **Header Theme Toggle**: Professional shadow enhancement with subtle scaling interaction

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Development**: Hot reloading with tsx
- **API Structure**: RESTful API with /api prefix
- **Error Handling**: Centralized middleware for error management

### Styling System
- **Design System**: Custom Limiar brand colors (orange #FF7F00, gold #FFD700)
- **Typography**: Poppins and Roboto fonts
- **Theme**: Dark mode by default with light mode support
- **Component Variants**: Class variance authority for consistent styling

## Key Components

### Frontend Components
- **Header**: Fixed navigation with smooth scrolling to sections
- **Hero**: Landing section with gradient text and call-to-action
- **NossaDiferenca**: Company differentials with comparison tables
- **Solucoes**: AI solutions showcase with interactive elements
- **Footer**: Contact information and social links
- **WhatsAppButton**: Floating contact button

### Backend Structure
- **Routes**: Modular route registration system
- **Storage**: Abstract storage interface with in-memory implementation
- **Vite Integration**: Development server with HMR support

### Database Schema
- **Users Table**: Basic user management with username/password
- **Schema Validation**: Zod schemas for type-safe data validation
- **ORM**: Drizzle ORM configured for PostgreSQL

## Data Flow

1. **Client Requests**: React app makes API calls through React Query
2. **API Processing**: Express server handles requests via registered routes
3. **Data Access**: Storage layer abstracts database operations
4. **Response**: JSON responses with proper error handling
5. **UI Updates**: React Query manages cache and UI state updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database connectivity
- **drizzle-orm**: Database ORM and migrations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **class-variance-authority**: Component variant management

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **drizzle-kit**: Database migration tool

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations handle schema changes

### Environment Configuration
- **Development**: NODE_ENV=development with hot reloading
- **Production**: NODE_ENV=production with optimized builds
- **Database**: PostgreSQL via DATABASE_URL environment variable

### Scripts
- `npm run dev`: Start development server with hot reloading
- `npm run build`: Build both frontend and backend for production
- `npm run start`: Run production server
- `npm run db:push`: Apply database schema changes

### Hosting Requirements
- Node.js environment with ES modules support
- PostgreSQL database (Neon serverless recommended)
- Static file serving for built frontend assets
- Environment variables for database connection

The application is designed to be deployed on platforms like Replit, Vercel, or any Node.js hosting service with proper environment variable configuration.