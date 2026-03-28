import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";

export function Contact() {
  const whatsappNumber = "+18098474966";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <section id="contacto" className="py-24 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-6 text-secondary">Hablemos de tu Inversión</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Estamos aquí para asesorarte en cada paso del proceso. Punta Cana te espera, asegura tu futuro hoy mismo con Jimenez Real Estate.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Oficina Central</h4>
                  <p className="text-slate-400">Carretera Verón-Punta Cana, Plaza Coral Hotel, Local #6.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Teléfono Directo</h4>
                  <p className="text-slate-400">{whatsappNumber}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Correo Electrónico</h4>
                  <p className="text-slate-400">info@jimenezrealestate.do</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl text-slate-900">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-4">
                <MessageCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold">Asesoría Vía WhatsApp</h3>
              <p className="text-slate-500 mt-2">Chat directo con nuestros agentes inmobiliarios certificados.</p>
            </div>

            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-8 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-green-200 transition-all"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6 fill-current" />
                Habla con un asesor
              </a>
            </Button>
            
            <p className="text-center mt-6 text-sm text-slate-400">
              Disponibles de Lunes a Sábado de 9:00 AM a 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}