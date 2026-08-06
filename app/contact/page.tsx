import Header from "../components/header";
import Form from "../sections/contactform";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Moeez Raza",
  description: "Get in touch with Moeez Raza for web development (FastAPI, Django, React, Go, Next) and mobile app development (React Native). Let's discuss your project.",
  keywords: "contact, get in touch, message, chat, hire, appoint, order, contribute, talk, conversation, ask",
  authors: [{ name: "Moeez Raza" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://moeezraza.netlify.app/",
  },
  openGraph: {
    type: "website",
    url: "https://moeezraza.netlify.app/contact",
    title: "Contact - Moeez Raza | Full-Stack & Mobile Developer",
    description: "Ready to build your next web or mobile app? Contact me for FastAPI, Django, React, Go, Next, or React Native development.",
    images: [
      {
        url: "https://moeezraza.netlify.app/images/banner.png",
        alt: "Contact Moeez Raza - Developer portfolio contact page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://moeezraza.netlify.app/",
    title: "Moeez Raza | Full-Stack & Mobile Developer",
    description: "Let's bring your idea to life. Contact me for web or mobile app development.",
    images: [
      {
        url: "https://moeezraza.netlify.app/images/banner.png",
        alt: "Contact page for Moeez Raza developer portfolio",
      },
    ],
  },
}

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

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header/>
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
                      className="mt-1 shrink-0 font-mono text-xs font-bold uppercase tracking-widest text-primary">
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
              <Form/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default Contact
