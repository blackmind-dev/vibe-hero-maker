import { Mail, Send } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="section-blend relative bg-background py-24 sm:py-32">
      <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="panel relative overflow-hidden px-6 py-14 sm:px-12 sm:py-20">
          {/* Subtle mint glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "oklch(0.82 0.13 176 / 0.12)" }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Контакты
            </span>

            <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Готовы начать проект?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Напишите мне, и мы обсудим вашу задачу
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://t.me/Aleksandr9094"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[var(--glow-mint)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
              >
                <Send className="size-4" />
                Написать в Telegram
              </a>

              <a
                href="mailto:kefir9094@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-surface-2 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
              >
                <Mail className="size-4" />
                Написать на Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
