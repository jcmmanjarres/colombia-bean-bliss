import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, FlaskConical, Sprout, Mountain, Users, Award } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import heroImg from "@/assets/hero-coffee.jpg";
import metodosImg from "@/assets/metodos.jpg";
import variedadesImg from "@/assets/variedades.jpg";
import historiaImg from "@/assets/historia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Café de Colombia — Historias, métodos y variedades" },
      {
        name: "description",
        content:
          "Descubre la cultura cafetera colombiana: historias de caficultores, métodos de preparación y variedades de café de las montañas de Colombia.",
      },
      { property: "og:title", content: "Café de Colombia — Historias, métodos y variedades" },
      {
        property: "og:description",
        content:
          "Descubre la cultura cafetera colombiana: historias de caficultores, métodos de preparación y variedades de café.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const secciones = [
  {
    to: "/historias" as const,
    icon: BookOpen,
    titulo: "Historias del café",
    descripcion:
      "Relatos de caficultores, tradiciones familiares y la ruta del grano desde la semilla hasta tu taza.",
    imagen: historiaImg,
  },
  {
    to: "/metodos" as const,
    icon: FlaskConical,
    titulo: "Métodos de preparación",
    descripcion:
      "Del tinto tradicional al V60: guías paso a paso para preparar el mejor café en casa.",
    imagen: metodosImg,
  },
  {
    to: "/variedades" as const,
    icon: Sprout,
    titulo: "Variedades de café",
    descripcion:
      "Castillo, Caturra, Geisha y más: conoce las variedades que crecen en las montañas colombianas.",
    imagen: variedadesImg,
  },
];

const datos = [
  { icon: Mountain, numero: "590.000+", texto: "familias caficultoras en Colombia" },
  { icon: Users, numero: "22", texto: "departamentos productores de café" },
  { icon: Award, numero: "2011", texto: "Patrimonio de la Humanidad (PCC)" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Caficultor recogiendo cerezas de café en las montañas de Colombia al amanecer"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/90 via-coffee-deep/40 to-coffee-deep/20" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-4 pb-20 pt-40 sm:px-6 md:pb-28 md:pt-56">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-cherry px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cherry-foreground">
            Cultura cafetera colombiana
          </p>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            El café que nace en las montañas y cuenta historias
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
            Un viaje por la cultura del café colombiano: su gente, sus métodos
            de preparación y las variedades que lo hacen único en el mundo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/historias"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Explorar historias <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/metodos"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              Aprender a preparar
            </Link>
          </div>
        </div>
      </section>

      {/* Datos destacados */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {datos.map((d) => (
            <div
              key={d.texto}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leaf text-leaf-foreground">
                <d.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">{d.numero}</p>
                <p className="text-sm text-muted-foreground">{d.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secciones */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Explora el universo del café
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Contenido que crece semana a semana con nuevos temas sobre el mundo
          cafetero de Colombia.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {secciones.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.imagen}
                  alt={s.titulo}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{s.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.descripcion}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Ver más
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cita */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <blockquote className="rounded-3xl bg-coffee px-8 py-12 text-center md:px-16">
          <p className="font-display text-2xl font-medium italic leading-relaxed text-primary-foreground md:text-3xl">
            "El café no es solo una bebida; es la memoria de nuestras
            montañas, el trabajo de nuestras manos y el orgullo de Colombia."
          </p>
          <footer className="mt-6 text-sm font-medium text-primary-foreground/70">
            — Tradición cafetera colombiana
          </footer>
        </blockquote>
      </section>

      <SiteFooter />
    </div>
  );
}
