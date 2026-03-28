import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { MapPin, TrendingUp, Trees, MessageCircle } from "lucide-react";

const projects = [
  {
    id: "cristal",
    name: "Lotificación Cristal",
    tags: ["Pre-Venta", "Naturaleza y Confort"],
    description: "Espacios diseñados para el bienestar, rodeados de vegetación autóctona y con todas las facilidades de la vida moderna.",
    image: PlaceHolderImages.find(img => img.id === 'project-cristal'),
    features: ["Zona Verde", "Seguridad 24/7", "Servicios Soterrados"],
    whatsappMessage: "Hola Jimenez Real Estate, solicito información detallada y planos de la Lotificación Cristal"
  },
  {
    id: "lotificacion",
    name: "Lotificación Punta Cana",
    tags: ["Ubicación Premium", "Inversión Estratégica"],
    description: "El punto estratégico para tu próxima gran inversión. Acceso directo a las principales vías de Verón-Punta Cana.",
    image: PlaceHolderImages.find(img => img.id === 'project-lotificacion'),
    features: ["Alta Plusvalía", "Acceso Carretera Principal", "Cerca de Playas"],
    whatsappMessage: "Hola Jimenez Real Estate, quiero los detalles de inversión para la Lotificación Punta Cana"
  }
];

export function Projects() {
  const whatsappNumber = "18098474966";

  return (
    <section id="proyectos" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">Catálogo Exclusivo</Badge>
          <h2 className="font-headline text-4xl font-bold text-primary mb-4">Nuestros Proyectos Destacados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubre las mejores oportunidades inmobiliarias en la zona de mayor crecimiento del Caribe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image?.imageUrl || ""}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.image?.imageHint}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} className="bg-primary/90 text-white backdrop-blur-sm border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  {project.id === 'cristal' ? <Trees className="h-5 w-5 text-secondary" /> : <TrendingUp className="h-5 w-5 text-secondary" />}
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {project.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pb-8">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full py-6 flex items-center justify-center gap-2"
                  asChild
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(project.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 fill-current" />
                    Solicitar Información
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
