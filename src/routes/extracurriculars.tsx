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
    body: "Neon is our auditioned vocal jazz ensemble composed of 16 members. Neon, with the support of a rhythm section, perform a variety of SATB jazz and acapella arrangements. Neon competes at OVF and MusicFest Nationals and performs at both the winter and spring concerts. Neon rehearses once a week.",
  },
  {
    key: "concert-choir",
    title: "Concert Choir",
    img: choirImage,
    body: "Concert Choir is open students of all levels. Choir is a great space to improve as a singer and have fun making music in an ensemble. Choir performs a variety of songs from classical compositions to acapella pieces. Choir competes at OVJF and performs at both the winter and spring concerts. Choir rehearses once a week.",
  },
  {
    key: "concert-band",
    title: "Concert Band",
    img: concertBandImage,
    body: "Concert Band is a large instrumental ensemble composed of woodwinds, brass, and percussion instruments. Through weekly meetings, concert band works on a repertoire to perform at both the winter and spring concerts.",
  },
  {
    key: "jazz-band",
    title: "Jazz Band",
    img: jazzBandImage,
    body: "Jazz Band is a large instrumental jazz ensemble. Through weekly meetings, jazz band works on a repertoire to perform at both the winter and spring concerts.",
  },
  {
    key: "music-council",
    title: "Music Council",
    img: councilImage,
    body: "Music Council is a group composed of student leaders who come together once a week to organize and plan school events and fundraisers to further the music program here at CKSS.",
  },
];

function ExtracurricularsPage() {
  return (
    <div className="container-page py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">Ensembles & Groups</span>
        <h1 className="mt-3 text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl">Extracurriculars</h1>
        <p className="mt-5 text-base text-muted-foreground">
          Here are the extracuricular musical clubs and ensembles here at CKSS.
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
