import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Music2, Mic2, users, Users, Sparkles } from "lucide-react";
import { EditableImage, EditableText } from "@/components/Editable";
import homepageBanner from "@/pics/homepagebanner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CKSS Music Program — Home" },
      { name: "description", content: "Welcome to the CKSS Music Program. Discover our classes, ensembles, and community of student musicians." },
    ],
  }),
  component: HomePage,
});

const HERO = homepageBanner;

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <EditableImage
          id="home.hero"
          defaultSrc={HERO}
          alt="Students performing music"
          className="h-[78vh] min-h-[520px] w-full"
          imgClassName="h-full w-full object-cover"
          overlay={
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
          }
        />
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> 2025 — 2026 Season
          </span>
          <EditableText
            id="home.title"
            as="h1"
            multiline={false}
            defaultValue="CKSS Music Program"
            className="pointer-events-auto max-w-4xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl"
          />
          <EditableText
            id="home.subtitle"
            as="p"
            defaultValue="A community for students to learn, grow, and explore a passion in music."
            className="pointer-events-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
          />
          <div className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/classes"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-[1.02]"
            >
              Explore Classes <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/extracurriculars"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Our Ensembles
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-page py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { icon: Mic2, key: "vocal", title: "Vocal", body: "There are a variety of opportunities to explore singing from Choral Choir to Neon (Vocal Jazz Enemble) to Vocal Classes from G9 to G12." },
            { icon: Music2, key: "instr", title: "Instrumental", body: "At CKSS, there instrumental and guitar classes for grades 9-12 and both a concert band and a jazz band to grow and excel as an instrumentalist." },
            { icon: users, key: "council", title: "Music Council", body: "A community of student leaders who oganize events and fundraisers to grow and support the music program." },
          ].map(({ icon: Icon, key, title, body }) => (
            <div key={key} className="rounded-3xl border border-border bg-card p-7 transition hover:border-primary/60">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-accent-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <EditableText
                id={`home.feature.${key}.title`}
                as="h3"
                multiline={false}
                defaultValue={title}
                className="mt-5 text-xl font-semibold text-foreground"
              />
              <EditableText
                id={`home.feature.${key}.body`}
                as="p"
                defaultValue={body}
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="container-page pb-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary-soft via-background to-background p-10 md:p-14">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <Users className="h-4 w-4" /> Join the Program
          </div>
          <EditableText
            id="home.cta.title"
            as="h2"
            multiline={false}
            defaultValue="A home for every musician at CKSS."
            className="mt-4 max-w-2xl text-4xl font-semibold text-foreground sm:text-5xl"
          />
          <EditableText
            id="home.cta.body"
            as="p"
            defaultValue="Whether you're picking up an instrument for the first time or preparing for conservatory, our program meets you where you are."
            className="mt-4 max-w-2xl text-base text-muted-foreground"
          />
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            About the Program <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
