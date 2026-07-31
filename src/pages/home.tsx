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
          paragraph="Great software starts with understanding people, not just code. I design frictionless UIs paired with normalized databases, then fortify the backend with multi-layered authentication and granular role-based authorization—creating a system that is both intuitive to use and impenetrable to threats."
          image={blueprint}
        />
      </section>

      <section id="modular">
        <ImageWithText
          eyebrow="How I build with"
          heading="Modular Development"
          paragraph="By rigorously testing components in isolation, I eliminate integration surprises and accelerate your time-to-market. This approach keeps your system resilient and maintainable—whether we're orchestrating microservices or refining a clean monolith."
          image={modular}
          reverse
        />
      </section>

      <section id="debug">
        <ImageWithText
          eyebrow="How I handle"
          heading="Debug and Maintain"
          paragraph="Methodical debugging ensures your system stays resilient. I trace issues to their root, validate fixes rigorously, and engineer durable, decoupled modules—so updates and scaling are seamless, not risky. Your project remains stable, maintainable, and future-proof."
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