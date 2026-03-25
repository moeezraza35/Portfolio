import { useContext, useEffect, useRef } from "react"
import { DoubleSidedContent, SingleColumnContent } from "../components/content"
import { ScrollContext } from "../context/scroll"

function IntroSection(){
  return (
    <SingleColumnContent name="home">
      <h3 className="text-(--secondary-color)">Hi!</h3>
      <h2>I'm</h2>
      <h1 className="text-wrap">
        <span className="text-(--primary-color) font-bold">Moeez</span> <span>Raza</span>
      </h1>
      <hr />
      <h3>
        <span className="text-(--primary-color)">Full-Stack Web</span> & <span className="text-(--secondary-color)">Mobile App Developer</span>
      </h3>
    </SingleColumnContent>
  )
}
function AboutSection(){
  const thisSection = useRef<HTMLElement>(null)
  const {scrollY} = useContext(ScrollContext)
  useEffect(() => {
    if (!thisSection.current) return
    const viewStart = thisSection.current.offsetTop
    const viewHeight = window.innerHeight
    if (scrollY < viewStart-viewHeight || scrollY > viewStart+viewHeight) return
    
  }, [scrollY])
  return (
    <section ref={thisSection}>
      <div className="h-screen flex justify-center items-center">
        <h2 className="text-center">About Me</h2>
      </div>
      <DoubleSidedContent title="Profile" img="/images/mypic.png">
        <p className="text-justify">
          Hi, I'm Moeez Raza — a Full-Stack Web and Mobile App Developer with a passion for building digital solutions that make a difference. I specialize in creating responsive, user-friendly applications using modern technologies like React, Fast-API, Django and React Native. Whether it's a dynamic website or a cross-platform mobile app, I love turning complex problems into simple, elegant designs. Let's build something great together.
        </p>
      </DoubleSidedContent>
      <DoubleSidedContent title="Skills" img="/images/skills.png" reverse>
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
  )
}
function Home(){
  return (
    <>
      <IntroSection/>
      <AboutSection/>
    </>
  )
}
export default Home