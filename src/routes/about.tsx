import { createFileRoute } from "@tanstack/react-router";
import { EditableImage, EditableText } from "@/components/Editable";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CKSS Music Program" },
      { name: "description", content: "Learn about the history, values, and people behind the CKSS Music Program." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container-page py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">About the Program</span>
        <EditableText
          id="about.title"
          as="h1"
          multiline={false}
          defaultValue="A tradition of excellence in music education."
          className="mt-3 text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl"
        />
      </div>

      <div className="mt-16 grid items-start gap-12 md:grid-cols-2 md:gap-16">
        <EditableImage
          id="about.image"
          defaultSrc="../src/pics/aboutpage.jpg"
          alt="Music students rehearsing"
          className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border"
          imgClassName="h-full w-full object-cover"
        />
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Our Story</h2>
            <EditableText
              id="about.story"
              defaultValue="For over four decades, the CKSS Music Program has been a cornerstone of student life — nurturing voices, polishing instrumentalists, and bringing the school together through performance. What began as a small choir has grown into a vibrant department serving hundreds of students across vocal, instrumental, and ensemble disciplines."
              className="mt-3 text-base leading-relaxed text-foreground/80"
            />
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Our Values</h2>
            <EditableText
              id="about.values"
              defaultValue="We believe every student has something to express. Through disciplined practice, supportive mentorship, and joyful collaboration, our musicians grow in confidence, craft, and character. We celebrate progress over perfection and the lifelong friendships that music makes possible."
              className="mt-3 text-base leading-relaxed text-foreground/80"
            />
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">This Season</h2>
            <EditableText
              id="about.season"
              defaultValue="Our 2025-2026 season brings new repertoire across every ensemble, expanded guitar offerings, and our annual Spring Showcase in May. Join us — whether on stage, in the audience, or as a supporter of the arts at CKSS."
              className="mt-3 text-base leading-relaxed text-foreground/80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
