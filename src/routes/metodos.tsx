import { createFileRoute } from "@tanstack/react-router";
import { Clock, Droplets, Thermometer, Coffee } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import metodosImg from "@/assets/metodos.jpg";

export const Route = createFileRoute("/metodos")({
  head: () => ({
    meta: [
      { title: "Métodos de preparación — Café de Colombia" },
      {
        name: "description",
        content:
          "Guías de métodos de preparación de café: tinto tradicional, V60, prensa francesa, Chemex, moka y más.",
      },
      { property: "og:title", content: "Métodos de preparación — Café de Colombia" },
      {
        property: "og:description",
        content: "Aprende a preparar café colombiano con diferentes métodos, paso a paso.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Metodos,
});

const metodos = [
  {
    nombre: "Tinto tradicional",
    descripcion:
      "El alma del café colombiano. Se prepara hirviendo agua con café molido en una olla, a veces con panela. Es la bebida de las plazas, las tiendas y las conversaciones largas.",
    tiempo: "5-8 min",
    proporcion: "10 g por taza",
    temperatura: "92-96 °C",
    dificultad: "Fácil",
  },
  {
    nombre: "V60 (goteo manual)",
    descripcion:
      "Método de filtrado que resalta las notas florales y frutales del café de altura. Requiere verter el agua en espiral con paciencia y precisión.",
    tiempo: "3-4 min",
    proporcion: "15 g por 250 ml",
    temperatura: "90-94 °C",
    dificultad: "Media",
  },
  {
    nombre: "Prensa francesa",
    descripcion:
      "Inmersión completa que produce una taza de cuerpo denso y textura aterciopelada. Ideal para resaltar el dulzor de los cafés del Huila.",
    tiempo: "4-5 min",
    proporcion: "15 g por 250 ml",
    temperatura: "93-96 °C",
    dificultad: "Fácil",
  },
  {
    nombre: "Chemex",
    descripcion:
      "Filtrado elegante con papel grueso que entrega una taza limpia y brillante. Perfecto para cafés de especialidad con acidez pronunciada.",
    tiempo: "4-6 min",
    proporcion: "20 g por 300 ml",
    temperatura: "92-94 °C",
    dificultad: "Media",
  },
  {
    nombre: "Moka (greca)",
    descripcion:
      "Cafetera italiana de presión que produce un café concentrado e intenso, cercano al espresso. Muy popular en los hogares colombianos.",
    tiempo: "5 min",
    proporcion: "18 g por 200 ml",
    temperatura: "Fuego medio",
    dificultad: "Fácil",
  },
  {
    nombre: "Cold brew",
    descripcion:
      "Extracción en frío durante 12 a 24 horas. Resulta en una bebida suave, dulce y refrescante, perfecta para los días calurosos de la costa.",
    tiempo: "12-24 h",
    proporcion: "80 g por litro",
    temperatura: "Ambiente / frío",
    dificultad: "Fácil",
  },
];

const consejos = [
  "Usa agua filtrada: el 98% de tu taza es agua.",
  "Muele el café justo antes de prepararlo.",
  "La molienda gruesa para inmersión, fina para espresso.",
  "Guarda el café en un recipiente hermético, lejos de la luz.",
];

function Metodos() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="relative overflow-hidden">
        <img
          src={metodosImg}
          alt="Métodos de preparación de café sobre una mesa de madera"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/90 via-coffee-deep/50 to-coffee-deep/30" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-cherry-foreground/90">
            Métodos de preparación
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            El arte de preparar un buen café
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/85">
            Cada método revela un carácter distinto del mismo grano. Encuentra
            el tuyo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metodos.map((m) => (
            <article
              key={m.nombre}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold">{m.nombre}</h2>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {m.dificultad}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {m.descripcion}
              </p>
              <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <dt className="sr-only">Tiempo</dt>
                  <dd>{m.tiempo}</dd>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Coffee className="h-4 w-4 text-primary" />
                  <dt className="sr-only">Proporción</dt>
                  <dd>{m.proporcion}</dd>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Thermometer className="h-4 w-4 text-primary" />
                  <dt className="sr-only">Temperatura</dt>
                  <dd>{m.temperatura}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-3xl bg-leaf p-8 md:p-12">
          <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-leaf-foreground">
            <Droplets className="h-6 w-6" /> Consejos esenciales
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {consejos.map((c) => (
              <li
                key={c}
                className="rounded-xl bg-leaf-foreground/10 px-4 py-3 text-sm font-medium text-leaf-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
