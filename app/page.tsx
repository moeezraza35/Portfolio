import Header from './components/header'
import Hero from "./sections/hero"
import ImageWithText from "./components/imagewithtext"
import Marquee from "./sections/marquee"
import Services from "./sections/services"
import Projects from "./sections/projects"
import Tools from "./sections/tools"
import LearnBanner from "./sections/learnbanner"
import Testimonials from "./sections/testimonials"
import Skills from "./sections/skills"
import blueprint from "./assets/blueprint.jpg"
import modular from "./assets/modular.jpg"
import debugImg from "./assets/debug.jpg"

function Home(){
  return (
    <>
      <Header/>
      <section id="hero">
        <Hero />
      </section>

      <section id="marquee">
        <Marquee />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="blueprint">
        <ImageWithText
          eyebrow="How I design"
          heading="Blueprint and Architecture"
          paragraph="Great software starts with understanding people, not just code. I design frictionless UIs paired with normalized databases, then fortify the backend with multi-layered authentication and granular role-based authorization—creating a system that is both intuitive to use and impenetrable to threats."
          image={blueprint.src}
        />
      </section>

      <section id="modular">
        <ImageWithText
          eyebrow="How I build with"
          heading="Modular Development"
          paragraph="By rigorously testing components in isolation, I eliminate integration surprises and accelerate your time-to-market. This approach keeps your system resilient and maintainable—whether we're orchestrating microservices or refining a clean monolith."
          image={modular.src}
          reverse
        />
      </section>

      <section id="debug">
        <ImageWithText
          eyebrow="How I handle"
          heading="Debug and Maintain"
          paragraph="Methodical debugging ensures your system stays resilient. I trace issues to their root, validate fixes rigorously, and engineer durable, decoupled modules—so updates and scaling are seamless, not risky. Your project remains stable, maintainable, and future-proof."
          image={debugImg.src}
        />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="tools">
        <Tools />
      </section>

      <section id="learn">
        <LearnBanner />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </>
  )
}
export default Home