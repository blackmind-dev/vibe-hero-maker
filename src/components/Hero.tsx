import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";

const stats = [
  { label: "Проектов запущено", value: "48" },
  { label: "Средний срок MVP", value: "6 дней" },
  { label: "Повторных заказов", value: "72%" },
];

const stack = ["React", "TanStack", "Supabase", "AI Agents", "Tailwind"];

const metrics = [
  { label: "Активные спринты", value: "03", delta: "+1 за неделю" },
  { label: "Задач закрыто", value: "128", delta: "+18%" },
  { label: "Скорость релизов", value: "2.4д", delta: "−0.6д" },
];

const channels = [
  { label: "Продуктовые MVP", value: 82 },
  { label: "AI-интеграции", value: 64 },
  { label: "Дизайн-системы", value: 45 },
];


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
          <span className="font-display text-lg font-semibold tracking-tight">black_mind</span>
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

        <div className="panel p-4 sm:p-5" id="stack">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="font-display text-sm font-medium">Аналитика проектов</p>
              <p className="text-xs text-muted-foreground">Обновлено 2 минуты назад</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-surface-2 p-3 sm:p-4">
                <p className="truncate text-[11px] text-muted-foreground">{m.label}</p>
                <p className="font-display mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                  {m.value}
                </p>
                <p className="mt-0.5 text-[11px] text-primary">{m.delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-surface-2 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Загрузка по направлениям</p>
              <p className="text-[11px] text-muted-foreground">30 дней</p>
            </div>
            <div className="mt-4 space-y-3">
              {channels.map((c) => (
                <div key={c.label}>
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="min-w-0 truncate text-muted-foreground">{c.label}</span>
                    <span className="shrink-0 font-medium text-foreground">{c.value}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${c.value}%`, background: "var(--gradient-mint)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
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
