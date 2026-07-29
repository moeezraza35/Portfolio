import { useState } from "react"
import { Send } from "lucide-react";
import RichTextEditor from "../components/richtexteditor";
import { Link } from "react-router-dom";

const TERMS = [
  { title: "Scope & Deliverables", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
  { title: "Payment Terms", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
  { title: "Revisions & Feedback", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { title: "Timeline & Delivery", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Intellectual Property", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
  { title: "Confidentiality", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur." },
  { title: "After-Sale Support", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-36">
        <header className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Let's talk</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Contact</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Read through the engagement terms, then send me a note. I reply within one business day.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Terms column */}
          <section aria-labelledby="terms-heading" className="order-1">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-(--shadow-soft) sm:p-8">
              <p className="eyebrow mb-2">Please review</p>
              <h2 id="terms-heading" className="text-2xl font-bold sm:text-3xl">Terms & Conditions</h2>
              <ul className="mt-6 space-y-5">
                {TERMS.map((t) => (
                  <li key={t.title} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 font-mono text-xs font-bold uppercase tracking-widest text-primary"
                    >
                      ◆
                    </span>
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                        {t.title}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Form column — below terms on mobile, side on large */}
          <section aria-labelledby="form-heading" className="order-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-(--shadow-soft) sm:p-8">
              <p className="eyebrow mb-2">Send a message</p>
              <h2 id="form-heading" className="text-2xl font-bold sm:text-3xl">Get in touch</h2>

              <form
                className="mt-6 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Full name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Message</label>
                  <RichTextEditor placeholder="Tell me about your project…" />
                </div>

                {/* <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-(--shadow-soft) transition hover:brightness-110 active:scale-[0.98]"
                >
                  <Send size={16} />
                  Submit
                </button> */}
                <Link to={"/contact/submit/"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-(--shadow-soft) transition hover:brightness-110 active:scale-[0.98]">
                  <Send size={16}/>
                  Submit
                </Link>

                {sent && (
                  <p className="text-sm text-primary" role="status">
                    Thanks — your message has been queued. I'll reply shortly.
                  </p>
                )}
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default ContactPage
