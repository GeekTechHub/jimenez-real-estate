
import { Facebook, Instagram, Linkedin, Map as MapIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const directionsLink = "https://maps.app.goo.gl/ChIJO6krQKuTqI4RlFVpCI15dLE";

  return (
    <footer className="bg-slate-50 pt-20 pb-10 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-headline text-2xl font-bold text-primary mb-6">
              Jimenez <span className="text-secondary">Real Estate</span>
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Expertos en desarrollo y venta de terrenos en el corazón de Punta Cana. Tu inversión segura comienza con nosotros.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-primary mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-secondary transition-colors">Inicio</a></li>
              <li><a href="#proyectos" className="text-slate-600 hover:text-secondary transition-colors">Catálogo de Proyectos</a></li>
              <li><a href="#contacto" className="text-slate-600 hover:text-secondary transition-colors">Asesoría Gratuita</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-primary mb-6 flex items-center gap-2">
              <MapIcon className="h-5 w-5 text-secondary" />
              Nuestra Ubicación
            </h4>
            <div className="w-full h-48 bg-slate-200 rounded-2xl overflow-hidden relative group shadow-inner border border-slate-200">
              <div className="absolute inset-0 bg-slate-300 flex items-center justify-center z-10 pointer-events-none group-hover:opacity-0 transition-opacity">
                 <div className="text-center p-6">
                    <p className="text-slate-600 font-bold">Carretera Verón-Punta Cana</p>
                    <p className="text-slate-500 text-sm">Plaza Coral Hotel, Local #6</p>
                 </div>
              </div>
              <iframe 
                className="w-full h-full border-0 relative z-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0825310243293!2d-68.4439166!3d18.6386111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM4JzE5LjAiTiA2OMKwMjYnMzguMSJX!5e0!3m2!1ses!2sdo!4v1715632145678!5m2!1ses!2sdo" 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
              <div className="absolute bottom-4 right-4 z-20">
                <Button variant="default" className="bg-primary text-white shadow-xl hover:scale-105 transition-transform" asChild>
                  <a href={directionsLink} target="_blank" rel="noopener noreferrer">
                    Cómo llegar <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Jimenez Real Estate Company. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
