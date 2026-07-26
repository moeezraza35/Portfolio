import Hero from "../components/hero"
import ImageWithText from "../components/imagewithtext"
import Marquee from "../components/marquee"
import Services from "../components/services"
import Projects from "../components/projects"
import Tools from "../components/tools"
import LearnBanner from "../components/learnbanner"
import Testimonials from "../components/testimonials"
import Skills from "../components/skills"
import blueprint from "../assets/blueprint.jpg"
import modular from "../assets/modular.jpg"
import debugImg from "../assets/debug.jpg"

function Home(){
  return (
    <>
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
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Every project starts with a clear map — data flow, contracts, and boundaries drawn before a single line of code."
          image={blueprint}
        />
      </section>

      <section id="modular">
        <ImageWithText
          eyebrow="How I build with"
          heading="Modular Development"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Small, composable units with tight interfaces let features grow without breaking what already works. Every module earns its place."
          image={modular}
          reverse
        />
      </section>

      <section id="debug">
        <ImageWithText
          eyebrow="How I used to"
          heading="Debug and Maintain"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Logs you can read, tests you can trust, and a rollback that always works. Maintenance is a first-class feature, not an afterthought."
          image={debugImg}
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