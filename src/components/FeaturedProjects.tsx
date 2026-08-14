import { ArrowUpRight, Brain, GraduationCap, Rocket } from "lucide-react";

const projects = [
  {
    id: "studyflow",
    name: "StudyFlow",
    description:
      "AI-платформа, которая строит персональные учебные траектории и адаптирует материал под темп и уровень каждого студента.",
    tags: ["React", "TanStack", "OpenAI", "Supabase"],
    icon: GraduationCap,
    previewGradient: "linear-gradient(135deg, oklch(0.82 0.13 176 / 0.25), oklch(0.72 0.11 190 / 0.08))",
  },
  {
    id: "neuroanalytic",
    name: "НейроАналитик",
    description:
      "AI-сервис для загрузки датасетов, автоматического поиска инсайтов и генерации понятных отчётов на естественном языке.",
    tags: ["Next.js", "Python", "LangChain", "PostgreSQL"],
    icon: Brain,
    previewGradient: "linear-gradient(135deg, oklch(0.86 0.12 200 / 0.22), oklch(0.65 0.09 210 / 0.08))",
  },
  {
    id: "launchpro",
    name: "LaunchPro",
    description:
      "Лендинг для продукта с встроенной аналитикой, формами захвата и блоками, которые легко редактировать без кода.",
    tags: ["React", "Tailwind", "Framer Motion", "Vercel"],
    icon: Rocket,
    previewGradient: "linear-gradient(135deg, oklch(0.78 0.11 170 / 0.25), oklch(0.6 0.08 185 / 0.08))",
  },
];

export function FeaturedProjects() {
  return (
    <section id="works" className="section-blend relative bg-background py-24 sm:py-32">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Портфолио
          </span>
          <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Избранные проекты
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Реальные продукты, собранные вайбкодингом: от идеи и прототипа до работающего релиза.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="panel group flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/30 hover:bg-surface-2/60"
              >
                <div
                  className="relative h-48 w-full overflow-hidden border-b border-border"
                  style={{ background: project.previewGradient }}
                >
                  <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-24 items-center justify-center rounded-2xl border border-border bg-surface-2/80 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-11 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold tracking-tight">{project.name}</h3>
                    <span className="shrink-0 rounded-full border border-border bg-secondary p-1.5 text-muted-foreground transition-colors group-hover:text-primary">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
