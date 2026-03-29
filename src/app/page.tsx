import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const whatsappNumber = "18098474966";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <main className="relative">
      {/* Landing Page Sections */}
      <Hero />
      <Benefits />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp - Always visible */}
      <a 
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all active:scale-95 flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          Habla con un asesor
        </span>
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>
    </main>
  );
}
