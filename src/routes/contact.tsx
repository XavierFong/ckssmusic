import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { EditableLink, EditableText } from "@/components/Editable";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CKSS Music Program" },
      { name: "description", content: "Get in touch with the CKSS Music Program — Instagram and email." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">Get in Touch</span>
        <EditableText
          id="contact.title"
          as="h1"
          multiline={false}
          defaultValue="Let's make music together."
          className="mt-3 text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl"
        />
        <EditableText
          id="contact.body"
          as="p"
          defaultValue="Questions about auditions, performances, or joining the program? Reach out — we'd love to hear from you."
          className="mt-5 text-base text-muted-foreground"
        />
      </div>

      <div className="mx-auto mt-14 grid max-w-2xl gap-5 sm:grid-cols-2">
        <div className="group rounded-3xl border border-border bg-card p-7 transition hover:border-primary hover:shadow-xl hover:shadow-primary/10">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-accent-foreground">
            <Instagram className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-lg font-semibold text-foreground">Follow on Instagram</h2>
          <p className="mt-1 text-sm text-muted-foreground">Performances, behind-the-scenes, and announcements.</p>
          <div className="mt-5">
            <EditableLink
              id="contact.instagram"
              defaultHref="https://instagram.com/ckssmusic"
              defaultLabel="@ckssmusic"
              external
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-foreground/90"
              icon={<Instagram className="h-4 w-4" />}
            />
          </div>
        </div>

        <div className="group rounded-3xl border border-border bg-card p-7 transition hover:border-primary hover:shadow-xl hover:shadow-primary/10">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-accent-foreground">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-lg font-semibold text-foreground">Email the Program</h2>
          <p className="mt-1 text-sm text-muted-foreground">For audition info, parent questions, and inquiries.</p>
          <div className="mt-5">
            <EditableLink
              id="contact.email"
              defaultHref="mailto:music@ckss.edu"
              defaultLabel="music@ckss.edu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
              icon={<Mail className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
