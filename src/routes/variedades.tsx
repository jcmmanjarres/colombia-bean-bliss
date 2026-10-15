import { createFileRoute } from "@tanstack/react-router";
import { Mountain, Sparkles, Leaf } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import variedadesImg from "@/assets/variedades.jpg";

export const Route = createFileRoute("/variedades")({
  head: () => ({
    meta: [
      { title: "Variedades de café — Café de Colombia" },
      {
        name: "description",
        content:
          "Conoce las variedades de café cultivadas en Colombia: Castillo, Caturra, Geisha, Borbón, Típica y más.",
      },
      { property: "og:title", content: "Variedades de café — Café de Colombia" },
      {
        property: "og:description",
        content: "Las variedades de café arábica que crecen en las montañas colombianas.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Variedades,
});

const variedades = [
  {
    nombre: "Castillo",
    altura: "1.200 – 2.000 msnm",
    notas: "Cítricos, caramelo, cuerpo medio",
    descripcion:
      "Desarrollada por Cenicafé, es la variedad más sembrada en Colombia por su resistencia a la roya y su alta productividad sin sacrificar calidad en taza.",
    tag: "La más sembrada",
  },
  {
    nombre: "Caturra",
    altura: "1.000 – 1.800 msnm",
    notas: "Dulce, chocolate, acidez brillante",
    descripcion:
      "Mutación natural del Borbón descubierta en Brasil. De porte bajo y gran calidad, fue durante décadas la favorita de los caficultores colombianos.",
    tag: "Clásica",
  },
  {
    nombre: "Geisha (Gesha)",
    altura: "1.600 – 2.100 msnm",
    notas: "Jazmín, bergamota, frutas tropicales",
    descripcion:
      "Originaria de Etiopía y famosa mundialmente por su perfil floral excepcional. En Colombia alcanza precios récord en subastas de café de especialidad.",
    tag: "Exótica",
  },
  {
    nombre: "Borbón",
    altura: "1.200 – 2.000 msnm",
    notas: "Dulzor intenso, frutos rojos, vainilla",
    descripcion:
      "Una de las variedades más antiguas y apreciadas. Sus granos producen tazas dulces y complejas, muy valoradas por los tostadores de especialidad.",
    tag: "Herencia",
  },
  {
    nombre: "Típica",
    altura: "1.200 – 1.900 msnm",
    notas: "Equilibrada, limpia, dulce",
    descripcion:
      "La variedad madre del café arábica en América. De baja productividad pero excelente calidad, es la base genética de muchas variedades modernas.",
    tag: "Ancestral",
  },
  {
    nombre: "Pink Bourbon",
    altura: "1.500 – 2.100 msnm",
    notas: "Floral, miel, frutas amarillas",
    descripcion:
      "Variedad de cereza rosada cultivada sobre todo en el Huila. Se ha convertido en estrella de las competencias de barismo por su complejidad sensorial.",
    tag: "En auge",
  },
];

const regiones = [
  { nombre: "Huila", perfil: "Dulce, cítrico, cuerpo balanceado" },
  { nombre: "Nariño", perfil: "Acidez intensa, notas florales" },
  { nombre: "Eje Cafetero", perfil: "Suave, balanceado, achocolatado" },
  { nombre: "Sierra Nevada", perfil: "Cacao, especias, cuerpo pleno" },
];

function Variedades() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cherry">
              Variedades
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
              Un grano, mil sabores
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Colombia cultiva exclusivamente café arábica, pero dentro de esa
              especie existe una diversidad asombrosa. Cada variedad, altura y
              región imprime un carácter único en la taza.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={variedadesImg}
              alt="Cerezas de café rojas y amarillas en la rama"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {variedades.map((v) => (
            <article
              key={v.nombre}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold">{v.nombre}</h2>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {v.tag}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {v.descripcion}
              </p>
              <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mountain className="h-4 w-4 text-leaf" /> {v.altura}
                </p>
                <p className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cherry" /> {v.notas}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-3xl bg-coffee p-8 md:p-12">
          <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-primary-foreground">
            <Leaf className="h-6 w-6" /> Regiones y sus perfiles
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regiones.map((r) => (
              <div
                key={r.nombre}
                className="rounded-2xl bg-primary-foreground/10 p-5"
              >
                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  {r.nombre}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/75">{r.perfil}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
