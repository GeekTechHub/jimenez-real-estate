import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { MarketingGenerator } from "@/components/ai-tools/MarketingGenerator";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="relative">
      <Tabs defaultValue="landing" className="w-full">
        {/* Internal Agency Toggle - Subtle trigger in a real app this might be a separate route */}
        <div className="absolute top-4 right-4 z-50">
           <TabsList className="bg-white/20 backdrop-blur-md border border-white/20">
             <TabsTrigger value="landing" className="data-[state=active]:bg-white">Página Principal</TabsTrigger>
             <TabsTrigger value="generator" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">Herramientas Agente</TabsTrigger>
           </TabsList>
        </div>

        <TabsContent value="landing" className="mt-0">
          <Hero />
          <Projects />
          <Contact />
          <Footer />
          
          {/* Floating WhatsApp for mobile */}
          <a 
            href="https://wa.me/18098474966" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all active:scale-95 md:hidden"
          >
            <MessageCircle className="h-6 w-6 fill-current" />
          </a>
        </TabsContent>

        <TabsContent value="generator" className="mt-0 min-h-screen bg-slate-100">
          <div className="pt-20">
            <MarketingGenerator />
          </div>
          <div className="max-w-4xl mx-auto pb-12 px-6">
            <Separator className="my-12" />
            <p className="text-center text-sm text-muted-foreground">
              Jimenez Real Estate Internal Tools v1.0 • Impulsado por Inteligencia Artificial
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}