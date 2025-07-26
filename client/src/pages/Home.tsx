import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NossaDiferenca } from "@/components/NossaDiferenca";
import { Solucoes } from "@/components/Solucoes";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NossaDiferenca />
        <Solucoes />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
