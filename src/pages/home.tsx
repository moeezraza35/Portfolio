import { useEffect } from 'react'
import Header from '../components/header'
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
  useEffect(() => {
    const handleScroll = () => {
    const hash = window.location.hash;
    if (!hash) return;

    const targetId = hash.slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    // Small delay to ensure the DOM is fully updated
    setTimeout(() => {
      const header = document.querySelector('header');
      const headerHeight = header?.getBoundingClientRect().height || 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: targetPosition - headerHeight,
        behavior: 'smooth',
      });
    }, 100);
  };

  // Listen to hash changes
  window.addEventListener('hashchange', handleScroll);
  // Run on mount
  handleScroll();

  return () => window.removeEventListener('hashchange', handleScroll);
}, []);
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
          paragraph="Great software starts with people, not code. I begin by stepping into the user's shoes—analyzing behavior, friction points, and interaction patterns to design intuitive, frictionless experiences. I translate these insights into high-fidelity UI mockups while simultaneously architecting a resilient, normalized database schema tailored to the frontend logic. The backend then serves as a performant, fortified bridge, implementing multi-layered authentication and granular role-based authorization to create an impenetrable security barrier around every transaction."
          image={blueprint}
        />
      </section>

      <section id="modular">
        <ImageWithText
          eyebrow="How I build with"
          heading="Modular Development"
          paragraph="I champion a modular-first philosophy. Instead of building monolithic blocks, I construct and rigorously test isolated prototypes in a sandboxed environment—validating business logic and authentication flows before they ever interact. This decoupling enables surgical debugging, parallel development, and faster feature delivery. It scales effortlessly across architectures, whether I'm orchestrating a fleet of microservices or structuring a clean, maintainable monolith with clearly defined domain boundaries."
          image={modular}
          reverse
        />
      </section>

      <section id="debug">
        <ImageWithText
          eyebrow="How I handle"
          heading="Debug and Maintain"
          paragraph="I treat debugging as a methodical investigation, not a guessing game. I begin by instrumenting the system to trace data packets across every execution layer—isolating anomalies through controlled, reproducible test scenarios. This forensic precision ensures every fix is validated against edge-case datasets without introducing regressions. Beyond the immediate bug, I engineer for durability: decoupled, side-effect-free modules and clean abstractions ensure that scaling, upgrading, or refactoring isn't a risky overhaul, but a seamless, predictable evolution of the system."
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