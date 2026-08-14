import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/CTA";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Вайбкодер — продукты и MVP за недели" },
      {
        name: "description",
        content:
          "Портфолио вайбкодера: MVP, веб-приложения и AI-продукты от идеи до релиза за считанные недели.",
      },
      { property: "og:title", content: "Вайбкодер — продукты и MVP за недели" },
      {
        property: "og:description",
        content:
          "Портфолио вайбкодера: MVP, веб-приложения и AI-продукты от идеи до релиза за считанные недели.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Process />
    </main>
  );
}
