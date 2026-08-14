import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";

const stats = [
  { label: "Проектов запущено", value: "48" },
  { label: "Средний срок MVP", value: "6 дней" },
  { label: "Повторных заказов", value: "72%" },
];

const stack = ["React", "TanStack", "Supabase", "AI Agents", "Tailwind"];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--gradient-mint)" }}
        aria-hidden
      />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Terminal className="size-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">chernukha.dev</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#works" className="transition-colors hover:text-foreground">Работы</a>
          <a href="#stack" className="transition-colors hover:text-foreground">Стек</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Контакты</a>
        </nav>
        <a
          href="#contact"
          className="rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
        >
          Обсудить проект
        </a>
      </header>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Вайбкодинг · продукты за недели, а не кварталы
          </span>

          <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Собираю продукты <span className="text-gradient-mint">на скорости мысли</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            От сырой идеи до работающего интерфейса с базой, авторизацией и аналитикой. Пишу с ИИ,
            думаю как продакт, отдаю как инженер.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="glow-mint inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Начать проект <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#works"
              className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Смотреть кейсы
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-muted-foreground">{s.label}</dt>
                <dd className="font-display mt-1 text-2xl font-semibold text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="panel p-5" id="stack">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-sm font-medium">Текущая загрузка</p>
              <p className="text-xs text-muted-foreground">Обновлено 2 минуты назад</p>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs text-primary">
              <span className="size-1.5 rounded-full bg-primary" /> Свободен с сентября
            </span>
          </div>

          <div className="mt-6 rounded-xl bg-surface-2 p-5">
            <p className="text-xs text-muted-foreground">Активных спринтов</p>
            <p className="font-display mt-1 text-4xl font-semibold tracking-tight">03</p>
            <div className="mt-6 flex h-32 items-end gap-2">
              {[38, 52, 46, 68, 60, 84, 72, 96].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-primary/25"
                  style={{ height: `${h}%`, boxShadow: "inset 0 2px 0 0 var(--mint)" }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
              <span>Пн</span><span>Ср</span><span>Пт</span><span>Сейчас</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
