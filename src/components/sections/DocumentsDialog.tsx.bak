"use client";

import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, Search, Map as MapIcon } from "lucide-react";
import { PROJECTS_INFO, PROJECT_LOTES, type Lote } from "@/lib/lotes-data";

interface DocumentsDialogProps {
  projectId: string;
}

const fmtRD = (n: number) =>
  "RD$" + n.toLocaleString("es-DO", { maximumFractionDigits: 0 });

const estadoStyles: Record<string, string> = {
  disponible: "bg-green-100 text-green-700 border-green-200",
  reservado: "bg-amber-100 text-amber-700 border-amber-200",
  vendido: "bg-red-100 text-red-600 border-red-200",
};

export function DocumentsDialog({ projectId }: DocumentsDialogProps) {
  const info = PROJECTS_INFO[projectId];
  const lotes = PROJECT_LOTES[projectId] ?? [];

  const [query, setQuery] = useState("");
  const [mzFilter, setMzFilter] = useState("todas");
  const [estadoFilter, setEstadoFilter] = useState("todos");

  const manzanas = useMemo(
    () => Array.from(new Set(lotes.map((l) => l.mz))),
    [lotes]
  );

  const filtered = useMemo(() => {
    return lotes.filter((l) => {
      if (mzFilter !== "todas" && l.mz !== mzFilter) return false;
      if (estadoFilter !== "todos" && l.estado !== estadoFilter) return false;
      if (query) {
        const q = query.toLowerCase();
        const hay = `${l.mz}-${l.num}`.toLowerCase().includes(q) ||
          String(l.m2).includes(q);
        if (!hay) return false;
      }
      return true;
    });
  }, [lotes, mzFilter, estadoFilter, query]);

  const disponibles = lotes.filter((l) => l.estado === "disponible").length;

  if (!info) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary/5 w-full py-6 rounded-xl transition-all font-semibold"
        >
          <MapIcon className="h-5 w-5 mr-2" />
          Ver Plano y Terrenos
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-[92vh] flex flex-col p-0 gap-0 sm:rounded-2xl overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b shrink-0">
          <DialogTitle className="text-xl text-primary">{info.nombre}</DialogTitle>
          <DialogDescription className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {info.ubicacion}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 grid md:grid-cols-2 gap-0 overflow-hidden">
          {/* ── IZQUIERDA: Plano ── */}
          <div className="flex flex-col border-r overflow-hidden bg-slate-50">
            <div className="px-4 py-2 border-b bg-white shrink-0 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">Plano de Lotificación</span>
              <a
                href={info.plano}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline inline-flex items-center"
              >
                <ExternalLink className="mr-1 h-3 w-3" /> Pantalla completa
              </a>
            </div>
            <iframe
              src={info.plano}
              title={`Plano ${info.nombre}`}
              className="w-full flex-1 bg-white"
            />
          </div>

          {/* ── DERECHA: Datos + lista de lotes ── */}
          <div className="flex flex-col overflow-hidden">
            {/* Ficha del proyecto */}
            <div className="px-5 py-4 border-b shrink-0 bg-white">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Superficie del proyecto</p>
                  <p className="font-semibold text-slate-800">{info.superficieProyecto}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Total de lotes</p>
                  <p className="font-semibold text-slate-800">{info.totalLotes}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Precio por m²</p>
                  <p className="font-semibold text-primary">
                    {fmtRD(info.precioM2)}
                    {info.precioM2Esquina && (
                      <span className="text-xs text-amber-600 ml-1">
                        (esquinas {fmtRD(info.precioM2Esquina)})
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Disponibles</p>
                  <p className="font-semibold text-green-600">{disponibles} lotes</p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {info.amenidades.map((a) => (
                  <span
                    key={a}
                    className="text-[11px] bg-secondary/10 text-secondary-foreground border border-secondary/20 rounded-full px-2 py-0.5"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Filtros */}
            <div className="px-5 py-3 border-b shrink-0 bg-white space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar lote (ej: M1-5 o 600)"
                  className="w-full pl-8 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={mzFilter}
                  onChange={(e) => setMzFilter(e.target.value)}
                  className="flex-1 text-sm border rounded-lg px-2 py-2 bg-white"
                >
                  <option value="todas">Todas las manzanas</option>
                  {manzanas.map((mz) => (
                    <option key={mz} value={mz}>Manzana {mz}</option>
                  ))}
                </select>
                <select
                  value={estadoFilter}
                  onChange={(e) => setEstadoFilter(e.target.value)}
                  className="flex-1 text-sm border rounded-lg px-2 py-2 bg-white"
                >
                  <option value="todos">Todos los estados</option>
                  <option value="disponible">Disponibles</option>
                  <option value="reservado">Reservados</option>
                  <option value="vendido">Vendidos</option>
                </select>
              </div>
            </div>

            {/* Lista de lotes */}
            <div className="flex-1 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-slate-100 text-slate-600 text-xs">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium">Lote</th>
                    <th className="text-right px-2 py-2 font-medium">m²</th>
                    <th className="text-right px-2 py-2 font-medium">Precio</th>
                    <th className="text-center px-4 py-2 font-medium">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-8 text-muted-foreground">
                        No hay lotes que coincidan con el filtro.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((l) => (
                      <tr
                        key={`${l.mz}-${l.num}`}
                        className="border-b last:border-0 hover:bg-slate-50"
                      >
                        <td className="px-4 py-2 font-medium text-slate-800">
                          {l.mz}-{l.num}
                          {l.esquina && (
                            <span className="ml-1 text-[10px] text-amber-600 font-semibold">
                              ★ esquina
                            </span>
                          )}
                        </td>
                        <td className="px-2 py-2 text-right text-slate-600">{l.m2}</td>
                        <td className="px-2 py-2 text-right font-semibold text-primary">
                          {fmtRD(l.precio)}
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span
                            className={`text-[11px] px-2 py-0.5 rounded-full border capitalize ${estadoStyles[l.estado]}`}
                          >
                            {l.estado}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Nota */}
            <div className="px-5 py-3 border-t shrink-0 bg-amber-50/60">
              <p className="text-[11px] text-amber-800 leading-relaxed">{info.nota}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
