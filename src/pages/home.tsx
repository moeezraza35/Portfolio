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