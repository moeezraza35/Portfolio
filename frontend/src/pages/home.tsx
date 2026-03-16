import { useContext, useEffect, useRef } from "react"
import { ScrollContext, type Section } from "../context/scroll"

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
    if (scrollY > viewHeight+1) return
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
    <HeroSection/>
  )
}
export default Home