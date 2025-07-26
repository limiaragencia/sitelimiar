import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NossaDiferenca } from "@/components/NossaDiferenca";
import { Solucoes } from "@/components/Solucoes";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen ml-[1223px] mr-[1223px] text-[30px] mt-[-160px] mb-[-160px] pt-[0px] pb-[0px] pl-[11px] pr-[11px]">
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
