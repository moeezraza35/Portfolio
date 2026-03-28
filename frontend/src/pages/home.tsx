import { useContext, useEffect, useRef, useState } from "react"
import { DoubleSidedContent, SingleColumnContent, CardContent, ImageBox } from "../components/content"
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
  const [onScreen, setOnScreen] = useState(false)
  useEffect(() => {
    if (!thisSection.current) return
    const viewStart = thisSection.current.offsetTop
    const viewHeight = window.innerHeight
    if (scrollY > viewStart-(viewHeight/4) && !onScreen) {
      setOnScreen(true)
    } else if (scrollY < viewStart-(viewHeight/4) && onScreen) {
      setOnScreen(false)
    }
    
  }, [scrollY])
  return (
    <section ref={thisSection}>
      <div className="slide">
        <h2 className={"text-center transition-all ease-out duration-700" + (onScreen?"":" opacity-0 scale-200")}>About Me</h2>
      </div>
      <div className="bg-(--bg-color)">
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
      </div>
    </section>
  )
}
function WorkSection(){
  const thisSection = useRef<HTMLElement>(null)
  const {scrollY} = useContext(ScrollContext)
  const [onScreen, setOnScreen] = useState(false)
  useEffect(() => {
    if (!thisSection.current) return
    const viewStart = thisSection.current.offsetTop
    const viewHeight = window.innerHeight
    if (scrollY > viewStart-(viewHeight/4) && !onScreen) {
      setOnScreen(true)
    } else if (scrollY < viewStart-(viewHeight/4) && onScreen) {
      setOnScreen(false)
    }
    
  }, [scrollY])
  return (
    <section ref={thisSection}>
      <div className="slide">
        <h2 className={"text-center transition-all ease-out duration-700" + (onScreen?"":" opacity-0 scale-200")}>My Work</h2>
      </div>
      <div className="flex flex-wrap justify-center min-h-screen bg-(--bg-color) py-10">
        <CardContent img="/favicon.svg" title="OBMMS">
          <p>Online Bus Monitoring & Management System</p>
        </CardContent>
        <CardContent img="/favicon.svg" title="GTRS Dashboard">
          <p>A Dashboard pannel for car insurance company</p>
        </CardContent>
        <CardContent img="/favicon.svg" title="RIC MS">
          <p>Riphah International College Management System. Primarily focus on both staff and students based on their categories</p>
        </CardContent>
        <CardContent img="/favicon.svg" title="RFID Attendance">
          <p>Radio Frequency Identification Attendance System is Arduino (Hardware) based project.</p>
        </CardContent>
        <CardContent img="/favicon.svg" title="Vista Pakistan">
          <p>Vista Pakistan is a fully functional and dynamic website for tourist support agency in Pakistan.</p>
        </CardContent>
      </div>
    </section>
  )
}
function ToolsSection(){
  const thisSection = useRef<HTMLElement>(null)
  const {scrollY} = useContext(ScrollContext)
  const [onScreen, setOnScreen] = useState(false)
  useEffect(() => {
    if (!thisSection.current) return
    const viewStart = thisSection.current.offsetTop
    const viewHeight = window.innerHeight
    if (scrollY > viewStart-(viewHeight/4) && !onScreen) {
      setOnScreen(true)
    } else if (scrollY < viewStart-(viewHeight/4) && onScreen) {
      setOnScreen(false)
    }
    
  }, [scrollY])
  return (
    <section ref={thisSection}>
      <div className="slide">
        <h2 className={"text-center transition-all ease-out duration-700" + (onScreen?"":" opacity-0 scale-200")}>My Tools</h2>
      </div>
      <div className="bg-(--bg-color)">
        <div className="max-w-6xl mx-auto py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
            <ImageBox name="VS Code" type="Code Editor"/>
          </div>
        </div>
      </div>
    </section>
  )
}
function Home(){
  return (
    <>
      <IntroSection/>
      <AboutSection/>
      <WorkSection/>
      <ToolsSection/>
    </>
  )
}
export default Home