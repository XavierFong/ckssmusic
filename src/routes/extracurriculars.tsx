import { createFileRoute } from "@tanstack/react-router";
import { EditableImage, EditableText } from "@/components/Editable";
import neonImage from "@/pics/neonImage.JPG";
import choirImage from "@/pics/choirImage.jpg";
import concertBandImage from "@/pics/concertBandImage.jpg";
import jazzBandImage from "@/pics/jazzBandImage.jpg";
import councilImage from "@/pics/councilImage.JPG";

export const Route = createFileRoute("/extracurriculars")({
  head: () => ({
    meta: [
      { title: "Extracurriculars — CKSS Music Program" },
      { name: "description", content: "Discover Neon, Concert Choir, Concert Band, Jazz Band, and Music Council." },
    ],
  }),
  component: ExtracurricularsPage,
});

const ENSEMBLES = [
  {
    key: "neon",
    title: "Neon (The Vocal Jazz Ensemble)",
    img: neonImage,
    body: "Our auditioned vocal jazz group performs sophisticated arrangements with rhythm section accompaniment, traveling to festivals across the province.",
  },
  {
    key: "concert-choir",
    title: "Concert Choir",
    img: choirImage,
    body: "Open to all singers, Concert Choir explores a rich repertoire from sacred classics to contemporary works, performing at school and community events.",
  },
  {
    key: "concert-band",
    title: "Concert Band",
    img: concertBandImage,
    body: "Wind and percussion musicians come together to perform symphonic literature, building ensemble skill through weekly rehearsals and seasonal concerts.",
  },
  {
    key: "jazz-band",
    title: "Jazz Band",
    img: jazzBandImage,
    body: "Swing, funk, Latin, and fusion — our Jazz Band explores improvisation and big-band tradition while preparing for the annual jazz festival circuit.",
  },
  {
    key: "music-council",
    title: "Music Council",
    img: councilImage,
    body: "Our student-led leadership team organizes events, supports performances, and builds the culture that makes the CKSS Music Program a second home.",
  },
];

function ExtracurricularsPage() {
  return (
    <div className="container-page py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">Ensembles & Groups</span>
        <h1 className="mt-3 text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl">Extracurriculars</h1>
        <p className="mt-5 text-base text-muted-foreground">
          Beyond the classroom, our five extracurricular groups give students the chance to perform, lead, and grow together.
        </p>
      </div>

      <div className="mt-16 space-y-10">
        {ENSEMBLES.map((e, i) => (
          <article
            key={e.key}
            className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2"
          >
            <EditableImage
              id={`ext.${e.key}.image`}
              defaultSrc={e.img}
              alt={e.title}
              className={`aspect-[4/3] w-full md:aspect-auto md:min-h-[320px] ${i % 2 === 1 ? "md:order-2" : ""}`}
              imgClassName="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">0{i + 1}</span>
              <EditableText
                id={`ext.${e.key}.title`}
                as="h2"
                multiline={false}
                defaultValue={e.title}
                className="text-3xl font-semibold text-foreground"
              />
              <EditableText
                id={`ext.${e.key}.body`}
                as="p"
                defaultValue={e.body}
                className="text-base leading-relaxed text-muted-foreground"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
