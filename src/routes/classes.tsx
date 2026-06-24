import { createFileRoute } from "@tanstack/react-router";
import { EditableImage, EditableText } from "@/components/Editable";
import vocalClassImage from "@/pics/vocalclass.JPG";
import instrumentalClassImage from "@/pics/instrumentalclass.JPG";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes — CKSS Music Program" },
      { name: "description", content: "Vocal, Instrumental, and Guitar classes offered through the CKSS Music Program." },
    ],
  }),
  component: ClassesPage,
});

const CLASSES = [
  {
    key: "vocal",
    title: "Vocal Class",
    img: {vocalClassImage},
    body: "Develop breath support, tone, range, and stage presence through solo and group repertoire spanning classical, musical theatre, and contemporary styles.",
  },
  {
    key: "instrumental",
    title: "Instrumental Classes",
    img: {instrumentalClassImage},
    body: "Woodwinds, brass, and percussion students build fundamentals — tone production, reading, technique — while preparing concert and festival repertoire.",
  },
  // {
  //   key: "guitar",
  //   title: "Guitar Class",
  //   img: {guitarClassImage},
  //   body: "From open chords to fingerstyle and ensemble playing, students explore acoustic and electric guitar across rock, folk, jazz, and classical idioms.",
  // },
];

function ClassesPage() {
  return (
    <div className="container-page py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">Curriculum</span>
        <h1 className="mt-3 text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl">Classes</h1>
        <p className="mt-5 text-base text-muted-foreground">
          Three core courses anchor the CKSS Music Program. Each balances technique, theory, and the joy of making music together.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {CLASSES.map((c) => (
          <article
            key={c.key}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
          >
            <EditableImage
              id={`classes.${c.key}.image`}
              defaultSrc={c.img}
              alt={c.title}
              className="aspect-[4/3] w-full overflow-hidden"
              imgClassName="h-full w-full object-cover transition group-hover:scale-[1.03]"
            />
            <div className="flex flex-1 flex-col p-7">
              <EditableText
                id={`classes.${c.key}.title`}
                as="h2"
                multiline={false}
                defaultValue={c.title}
                className="text-2xl font-semibold text-foreground"
              />
              <EditableText
                id={`classes.${c.key}.body`}
                as="p"
                defaultValue={c.body}
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
