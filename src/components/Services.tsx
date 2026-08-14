import { Bot, Palette, Plug, Zap } from "lucide-react";

const services = [
  {
    id: "mvp",
    title: "MVP за неделю",
    description:
      "От сырой идеи до работающего продукта с базой, авторизацией и админкой. Без бесконечных согласований и документации.",
    result: "Запуск через 7 дней, а не через квартал",
    icon: Zap,
  },
  {
    id: "ai",
    title: "AI-автоматизация",
    description:
      "Встраиваю AI-агентов, чат-ботов и автоматические обработчики данных в ваш продукт или рабочие процессы.",
    result: "Экономия 10+ часов рутины в неделю",
    icon: Bot,
  },
  {
    id: "uiux",
    title: "UI/UX с вайбкодингом",
    description:
      "Собираю интерфейсы, которые выглядят дорого, работают быстро и адаптируются под любые экраны.",
    result: "Современный дизайн без найма дизайнера",
    icon: Palette,
  },
  {
    id: "integrations",
    title: "Интеграции",
    description:
      "Связываю платежи, CRM, аналитику, базы данных и внешние API в единую экосистему вашего продукта.",
    result: "Все сервисы работают как одно целое",
    icon: Plug,
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Услуги
          </span>
          <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Что я делаю
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Четыре направления, в которых помогаю стартапам и бизнесу выходить в цифру быстро и без лишних затрат.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="panel group flex flex-col p-5 transition-all duration-300 hover:border-primary/30 hover:bg-surface-2/60"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-secondary/80 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" />
                </div>

                <h3 className="font-display mt-5 text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-5 rounded-xl border border-primary/10 bg-primary/5 p-3">
                  <p className="text-xs font-medium text-primary">
                    {service.result}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
