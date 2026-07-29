import { useState } from "react"
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { send } from "../utils/request";
import RichTextEditor from "../components/richtexteditor";

const TERMS = [
  {
    title: "Communication & Response Policy",
    body: "All conversations occur via third-party platforms (Email, WhatsApp, Zoom)—no live chat is available on this site. I manually retrieve your message without OTP verification. Please check your Spam/Trash folder for my reply. I guarantee a response within 24-48 business hours."
  },
  {
    title: "Scope, Timeline & Pricing Model",
    body: "I operate on fixed project scopes with clear deadlines, not hourly billing. You assign the tasks, I deliver the results. Pricing is fully negotiable—if my quote exceeds your budget, you are welcome to make a counter-offer, and we will adjust the scope accordingly."
  },
  {
    title: "Payment Terms",
    body: "Full payment is due upon project completion, strictly before the application is deployed to a production server (VPS). Once the invoice is settled, I proceed with the live deployment."
  },
  {
    title: "Intellectual Property & Confidentiality",
    body: "All your ideas and business logic are treated as strictly confidential and will never be disclosed or reused. Upon full payment, you retain exclusive ownership of the final source code, designs, and all delivered assets."
  },
  {
    title: "After-Sale Support & Maintenance",
    body: "I remain permanently available for your project. Minor updates (e.g., color adjustments, UI tweaks, or bug fixes) are free. Major updates (e.g., new CRUD features, database schema changes, or new functionality) are charged separately with a transparent quote."
  },
  {
    title: "Right to Refuse & Project Withdrawal",
    body: "You may cancel the project at any stage. If the cancellation stems from any shortcoming on my side, I kindly request your feedback to address the issue, improve my workflow, or offer corrective measures—ensuring mutual respect and transparency."
  }
];

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const navigate = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData)
    await send("https://script.google.com/macros/s/AKfycbwqpg1sL5qtPMn2DB7F2NgSpgdtZpJLdLqblEazCFXdy0n7370n0cb5EQh-Ip-PTFia/exec", "POST", formData)
    window.scrollTo(0,0)
    navigate("/contact/submit/")
  };
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-36">
        <header className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Let's talk</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Contact</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Read through the engagement terms, then send me a note. I reply within 2 business days.
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
                onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Message</label>
                  <RichTextEditor
                    value={formData.message}
                    onChange={(message) => setFormData({ ...formData, message })}
                    placeholder="Tell me about your project…"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-(--shadow-soft) transition hover:brightness-110 active:scale-[0.98]"
                >
                  <Send size={16} />
                  Submit
                </button>
                {/* <Link to={"/contact/submit/"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-(--shadow-soft) transition hover:brightness-110 active:scale-[0.98]">
                  <Send size={16}/>
                  Submit
                </Link> */}
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default ContactPage
