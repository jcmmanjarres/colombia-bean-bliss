import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import historiaImg from "@/assets/historia.jpg";
import heroImg from "@/assets/hero-coffee.jpg";
import variedadesImg from "@/assets/variedades.jpg";

export const Route = createFileRoute("/historias")({
  head: () => ({
    meta: [
      { title: "Historias del café — Café de Colombia" },
      {
        name: "description",
        content:
          "Historias de caficultores, tradiciones y la ruta del café colombiano desde la semilla hasta la taza.",
      },
      { property: "og:title", content: "Historias del café — Café de Colombia" },
      {
        property: "og:description",
        content: "Relatos de la gente y las tradiciones detrás del café colombiano.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Historias,
});

const historias = [
  {
    titulo: "Don Aurelio y sus cincuenta cosechas",
    resumen:
      "A sus 72 años, don Aurelio ha visto pasar medio siglo entre cafetales en las laderas del Quindío. Su finca, heredada de su padre, sigue produciendo café de altura con los mismos principios de siempre: paciencia, sol y respeto por la tierra.",
    region: "Quindío, Eje Cafetero",
    fecha: "Octubre 2026",
    imagen: historiaImg,
    destacada: true,
  },
  {
    titulo: "La ruta del grano: de la cereza a la taza",
    resumen:
      "Recorremos el camino completo del café colombiano: la recolección selectiva a mano, el beneficio húmedo, el secado al sol y el tostado que despierta los aromas de cada región.",
    region: "Huila",
    fecha: "Septiembre 2026",
    imagen: heroImg,
    destacada: false,
  },
  {
    titulo: "Las mujeres que transforman el café en Nariño",
    resumen:
      "En las montañas de Nariño, cooperativas lideradas por mujeres están redefiniendo la producción cafetera con prácticas sostenibles y cafés de especialidad que conquistan mercados internacionales.",
    region: "Nariño",
    fecha: "Agosto 2026",
    imagen: variedadesImg,
    destacada: false,
  },
  {
    titulo: "El Paisaje Cultural Cafetero: patrimonio vivo",
    resumen:
      "Declarado Patrimonio de la Humanidad por la UNESCO en 2011, el Paisaje Cultural Cafetero es mucho más que fincas: es una forma de vida tejida entre montañas, arquitectura de bahareque y la hospitalidad de su gente.",
    region: "Caldas, Risaralda, Quindío y Valle",
    fecha: "Julio 2026",
    imagen: heroImg,
    destacada: false,
  },
  {
    titulo: "Juan Valdez: el rostro que llevó el café al mundo",
    resumen:
      "Desde 1960, el personaje de Juan Valdez y su mula Conchita se convirtieron en el símbolo del café colombiano, representando a cientos de miles de familias caficultoras ante el mundo.",
    region: "Colombia",
    fecha: "Junio 2026",
    imagen: historiaImg,
    destacada: false,
  },
];

function Historias() {
  const [destacada, ...resto] = historias;

  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-cherry">
          Historias
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          Las voces del café
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Detrás de cada taza hay personas, familias y tradiciones. Estas son
          sus historias.
        </p>
      </section>

      {/* Historia destacada */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <article className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-2">
          <div className="relative h-64 overflow-hidden md:h-auto">
            <img
              src={destacada.imagen}
              alt={destacada.titulo}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="w-fit rounded-full bg-cherry px-3 py-1 text-xs font-semibold text-cherry-foreground">
              Historia destacada
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
              {destacada.titulo}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {destacada.resumen}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {destacada.region}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" /> {destacada.fecha}
              </span>
            </div>
          </div>
        </article>
      </section>

      {/* Resto de historias */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {resto.map((h) => (
            <article
              key={h.titulo}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={h.imagen}
                  alt={h.titulo}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{h.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.resumen}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {h.region}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" /> {h.fecha}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
