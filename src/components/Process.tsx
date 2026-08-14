const steps = [
  {
    number: "01",
    title: "Погружаюсь в задачу",
    description:
      "Разбираю бизнес-цель, аудиторию и ограничения. Формирую чёткое ТЗ и план работы.",
  },
  {
    number: "02",
    title: "Создаю с ИИ",
    description:
      "Генерирую код, интерфейсы и тексты с помощью AI, сохраняя контроль качества и архитектуры.",
  },
  {
    number: "03",
    title: "Тестирую и улучшаю",
    description:
      "Проверяю работу на реальных сценариях, собираю обратную связь и довожу детали до ума.",
  },
  {
    number: "04",
    title: "Запускаю и масштабирую",
    description:
      "Выкатываю продукт, настраиваю аналитику и помогаю расти дальше: новые фичи и интеграции.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-blend relative bg-background py-24 sm:py-32">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Процесс
          </span>
          <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Как я работаю
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Четыре этапа от первой встречи до живого продукта — прозрачно, быстро и без воды.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Desktop horizontal line */}
          <div
            className="absolute top-[27px] left-0 hidden h-0.5 w-full lg:block"
            style={{
              background:
                "linear-gradient(to right, oklch(0.82 0.13 176 / 0.5), oklch(0.82 0.13 176 / 0.1))",
            }}
            aria-hidden
          />

          {/* Mobile vertical line */}
          <div
            className="absolute top-0 bottom-0 left-[23px] w-0.5 lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.82 0.13 176 / 0.5), oklch(0.82 0.13 176 / 0.1))",
            }}
            aria-hidden
          />

          <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-5 lg:block">
                {/* Number badge */}
                <div className="z-10 flex shrink-0 items-center justify-center">
                  <span className="flex size-12 items-center justify-center rounded-full border border-border bg-surface-2 font-display text-sm font-semibold text-primary shadow-lg">
                    {step.number}
                  </span>
                </div>

                <div className="pb-2 lg:pt-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
