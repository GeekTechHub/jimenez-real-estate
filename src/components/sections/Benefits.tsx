
import { CheckCircle2, ShieldCheck, TrendingUp, MapPin } from "lucide-react";

const benefits = [
  {
    title: "Títulos de propiedad garantizados",
    description: "Inversión segura con toda la documentación legal al día y procesos transparentes.",
    icon: ShieldCheck,
  },
  {
    title: "Alta plusvalía",
    description: "Ubicación estratégica en la zona de mayor crecimiento turístico y residencial del Caribe.",
    icon: TrendingUp,
  },
  {
    title: "Cercanía estratégica",
    description: "A pocos minutos de las mejores playas de Punta Cana y del Aeropuerto Internacional.",
    icon: MapPin,
  },
];

export function Benefits() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-primary mb-4">¿Por qué invertir en Verón-Punta Cana?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Asegura tu patrimonio en el destino inmobiliario número uno de la República Dominicana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
