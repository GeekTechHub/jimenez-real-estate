import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-punta-cana');

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt={heroImg?.description || "Punta Cana"}
          fill
          className="object-cover brightness-50"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
          Invierte en el Futuro de <span className="text-secondary">Punta Cana</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-slate-100 max-w-2xl mx-auto drop-shadow-md">
          Terrenos con plusvalía garantizada en las mejores ubicaciones de Verón.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 text-lg rounded-full"
            asChild
          >
            <a href="#proyectos">Ver Catálogo</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 px-8 text-lg rounded-full backdrop-blur-sm"
            asChild
          >
            <a href="#contacto">Habla con un asesor</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}