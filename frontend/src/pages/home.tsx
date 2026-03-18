import { useContext, useEffect, useRef } from "react"
import { ScrollContext, type Section } from "../context/scroll"
import { DoubleSidedContent } from "../components/content"

function HeroSection(){
  const {scrollY, setSections} = useContext(ScrollContext)
  const heroSection = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!heroSection.current) return
    setSections((prev: Section[]) => [
      ...prev, {
        name: "home", 
        start: heroSection.current?.offsetTop, 
        height: heroSection.current?.offsetHeight
      }
    ])
  }, [setSections])
  useEffect(() => {
    const viewHeight = window.innerHeight
    // if (scrollY > viewHeight+1) return
    if (!heroSection.current) return
    heroSection.current.childNodes.forEach(node => {
      if (node instanceof HTMLElement){
        node.style.opacity = "" + (1-scrollY/viewHeight)
        node.style.scale = "" + (1+scrollY/viewHeight)
      }
    })
  }, [scrollY])
  return (
    <section ref={heroSection} className="h-[200vh]">
      <div className="slider">
        <div className="min-w-0 mx-auto">
          <h3 className="text-(--secondary-color)">Hi!</h3>
          <h2>I'm</h2>
          <h1>
            <span className="text-(--primary-color) font-bold">Moeez</span>
            <span>Raza</span>
          </h1>
          <hr />
          <h3>
            <span className="text-(--primary-color)">Full-Stack Web</span> & <span className="text-(--secondary-color)">Mobile App Developer</span>
          </h3>
        </div>
        <img src="/images/background-left.png" className="img-left"/>
        <img src="/images/background-right.png" className="img-right"/>
      </div>
    </section>
  )
}
function Home(){
  return (
    <>
      <HeroSection/>
      <section>
        <DoubleSidedContent title="About Me" img="/favicon.svg">
          <p className="text-justify">
            Hi, I'm Moeez Raza — a Full-Stack Web and Mobile App Developer with a passion for building digital solutions that make a difference. I specialize in creating responsive, user-friendly applications using modern technologies like React, Fast-API, Django and React Native. Whether it's a dynamic website or a cross-platform mobile app, I love turning complex problems into simple, elegant designs. Let's build something great together.
          </p>
        </DoubleSidedContent>
        <DoubleSidedContent title="Skills" img="/favicon.svg">
        <p className="text-bold text-(--primary-color)">Frameworks & Libraries</p>
        <ul className="list-disc pl-6 leading-tight mb-2">
          <li>Fast-API</li>
          <li>Django</li>
          <li>ReactJS</li>
          <li>React Native</li>
        </ul>
        <p className="text-bold text-(--primary-color)">Languages</p>
        <ul className="list-disc pl-6 leading-tight mb-2">
          <li>Python</li>
          <li>JavaScript/TypeScript</li>
          <li>C/C++</li>
        </ul>
        </DoubleSidedContent>
      </section>
    </>
  )
}
export default Home