"use client";

import { useState } from "react";
import { generateProjectMarketingContent, type GenerateProjectMarketingContentOutput } from "@/ai/flows/generate-project-marketing-content-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { Label } from "@/components/ui/label";

export function MarketingGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateProjectMarketingContentOutput | null>(null);
  const [formData, setFormData] = useState({
    location: "Punta Cana, Verón",
    features: "Cerca de la playa, seguridad 24 horas, amenidades de lujo",
    targetAudience: "Inversores extranjeros y familias jóvenes",
    projectType: "Lotificación residencial",
    additionalDetails: ""
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await generateProjectMarketingContent(formData);
      setResult(output);
    } catch (error) {
      console.error("AI Generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-secondary/20 rounded-2xl">
          <Wand2 className="h-6 w-6 text-secondary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary">Generador de Contenido IA</h2>
          <p className="text-muted-foreground">Herramienta exclusiva para agentes de Jimenez Real Estate</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Detalles del Proyecto</CardTitle>
            <CardDescription>Define las características base para la IA</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="space-y-2">
                <Label>Ubicación</Label>
                <Input 
                  value={formData.location} 
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Ej: Punta Cana, Verón"
                />
              </div>
              <div className="space-y-2">
                <Label>Características / Amenidades</Label>
                <Textarea 
                  value={formData.features}
                  onChange={(e) => setFormData({...formData, features: e.target.value})}
                  placeholder="Ej: Cerca de playa, amenidades de lujo"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Tipo de Proyecto</Label>
                <Input 
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  placeholder="Ej: Condominio, Lotificación"
                />
              </div>
              <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Generar Ideas Brillantes
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {result ? (
            <>
              <Card className="border-none shadow-lg bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-secondary">Nombres Sugeridos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {result.projectNames.map((name, i) => (
                    <div key={i} className="p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors cursor-pointer group flex justify-between items-center">
                      <span className="font-semibold text-lg">{name}</span>
                      <Badge variant="outline" className="border-secondary text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Usar</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Etiquetas de Marketing</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {result.marketingTags.map((tag, i) => (
                    <Badge key={i} className="bg-slate-100 text-primary border-none py-2 px-4 text-sm hover:bg-secondary hover:text-secondary-foreground cursor-pointer transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
              <Sparkles className="h-12 w-12 text-slate-300 mb-4" />
              <p className="text-slate-500 font-medium">Completa los detalles y haz clic en generar para ver sugerencias estratégicas.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}