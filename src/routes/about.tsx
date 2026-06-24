import { createFileRoute } from "@tanstack/react-router";
import { EditableImage, EditableText } from "@/components/Editable";
import aboutPageImage from "@/pics/aboutpage.JPG";

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
          defaultValue="The CKSS Music Program."
          className="mt-3 text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl"
        />
      </div>

      <div className="mt-16 grid items-start gap-12 md:grid-cols-2 md:gap-16">
        <EditableImage
          id="about.image"
          defaultSrc={aboutPageImage}
          alt="Music students rehearsing"
          className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border"
          imgClassName="h-full w-full object-cover"
        />
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Our Story</h2>
            <EditableText
              id="about.story"
              defaultValue="We are the music program from Craig Kielburger Secondary School Milton! We run a variety of both classes and extracurriculars in the musical department. With experienced instructors in both the vocal and instrumental fields of music, our program is very diverse and always eager to grow and learn. Our ensembles compete at various levels and are able to perform alongside groups from all across the country and obtain invaluable learning experiences from professionals in their fields. People who allow our students' passions for music to develop and grow. Our different groups rehearse weekly from September to May, working on repertoire and learning how to work together as one big team. Students are able to work on their leadership and fundraising skills in the Music Council, as well as their interpersonal skills when running events for the general public. Our program works towards building community and encouraging success. We want to build musicians and use our skills to spread a positive message around the school and wider community around us."
              className="mt-3 text-base leading-relaxed text-foreground/80"
            />
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Competitions</h2>
            <EditableText
              id="about.values"
              defaultValue="Competitions are a fundamental part of our program’s performance experience. They make up around half of our yearly performances. Here is a brief list of some of the ones we have competed at in the last few years: OVF, OVJF, and MusicFest Nationals"
              className="mt-3 text-base leading-relaxed text-foreground/80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
