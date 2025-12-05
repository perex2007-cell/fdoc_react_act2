"use client"; 

import PerfilGlobal from "./components/PerfilGlobal";
import FichaProducto from "./components/FichaProducto";
import AvisoInline from "./components/AvisoInline";
import BadgeEstado from "./components/BadgeEstado";

export default function Page() {
  return (
    <main className="p-6 space-y-6">
      <PerfilGlobal />
      <FichaProducto />
      <AvisoInline />
      <div className="flex gap-4">
        <BadgeEstado estado="Activo" />
        <BadgeEstado estado="Inactivo" />
      </div>
    </main>
  );
}
