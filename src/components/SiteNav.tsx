import { Link } from "@tanstack/react-router";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/historias", label: "Historias" },
  { to: "/metodos", label: "Métodos de preparación" },
  { to: "/variedades", label: "Variedades" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Coffee className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Café de Colombia
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-full p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-border/60 px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-coffee-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6" />
              <span className="font-display text-xl font-semibold">Café de Colombia</span>
            </div>
            <p className="mt-3 max-w-md text-sm opacity-80">
              Un espacio para celebrar la cultura cafetera colombiana: sus
              historias, sus métodos y sus variedades. Contenido en constante
              actualización.
            </p>
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-80 transition-opacity hover:opacity-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 border-t border-white/15 pt-6 text-xs opacity-60">
          Hecho con cariño desde el corazón del Eje Cafetero.
        </p>
      </div>
    </footer>
  );
}
