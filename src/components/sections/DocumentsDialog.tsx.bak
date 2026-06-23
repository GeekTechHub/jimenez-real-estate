"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

export type ProjectDocument = {
  label: string;
  url: string;
};

interface DocumentsDialogProps {
  projectTitle: string;
  documents: ProjectDocument[];
}

export function DocumentsDialog({ projectTitle, documents }: DocumentsDialogProps) {
  const [activeTab, setActiveTab] = useState(documents[0]?.url ?? "");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary/5 w-full py-6 rounded-xl transition-all font-semibold"
        >
          <FileText className="h-5 w-5 mr-2" />
          Ver Documentos
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 gap-0 sm:rounded-2xl">
        <DialogHeader className="px-6 py-4 border-b shrink-0">
          <div className="flex items-center justify-between gap-4 pr-8">
            <div>
              <DialogTitle className="text-lg text-primary">
                Documentos del Proyecto
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {projectTitle}
              </DialogDescription>
            </div>
            <Button asChild variant="outline" size="sm">
              <a href={activeTab} download>
                <Download className="mr-2 h-4 w-4" />
                Descargar
              </a>
            </Button>
          </div>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 flex flex-col overflow-hidden"
        >
          <div className="px-6 pt-4 shrink-0">
            <TabsList className="w-full overflow-x-auto justify-start">
              {documents.map((doc) => (
                <TabsTrigger
                  key={doc.url}
                  value={doc.url}
                  className="whitespace-nowrap"
                >
                  {doc.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {documents.map((doc) => (
            <TabsContent
              key={doc.url}
              value={doc.url}
              className="flex-1 m-0 p-6 pt-4 overflow-hidden flex flex-col"
            >
              <iframe
                src={doc.url}
                title={doc.label}
                className="w-full flex-1 rounded-md border bg-white"
              />
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs text-muted-foreground hover:text-foreground inline-flex items-center"
              >
                <ExternalLink className="mr-1 h-3 w-3" />
                Abrir en pestaña nueva (recomendado en móvil)
              </a>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export const PROJECT_DOCUMENTS: Record<string, ProjectDocument[]> = {
  cristal: [
    { label: "Plano de Lotificación", url: "/docs/cristal/plano-lotificacion.pdf" },
    { label: "Certificado de Título", url: "/docs/cristal/certificado-titulo.pdf" },
    { label: "Aprobación Mensuras", url: "/docs/cristal/aprobacion-mensuras.pdf" },
  ],
  "lirio-valles": [
    { label: "Plano de Lotificación", url: "/docs/lirio-valles/plano-lotificacion.pdf" },
    { label: "Certificado de Título", url: "/docs/lirio-valles/certificado-titulo.pdf" },
    { label: "Certificación DGII", url: "/docs/lirio-valles/certificacion-dgii.pdf" },
  ],
};
