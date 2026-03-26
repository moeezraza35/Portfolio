import { useContext, useEffect, useRef, type ReactNode } from "react"
import { ScrollContext, type Section } from "../context/scroll"

function SingleColumnContent(props: {children?: ReactNode, name: string}){
  const {scrollY, setSections} = useContext(ScrollContext)
  const thisSection = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!thisSection.current) return
    setSections((prev: Section[]) => [
      ...prev, {
        name: props.name,
        start: thisSection.current?.offsetTop,
        height: thisSection.current?.offsetHeight
      }
    ])
  }, [setSections])
  useEffect(() => {
    const viewHeight = window.innerHeight
    if (!thisSection.current) return
    const viewStart = thisSection.current.offsetTop
    const scrollStart = scrollY - viewStart
    if (
      scrollStart < 0 ||
      scrollStart > thisSection.current.clientHeight+viewStart
    ) return // Optimizing the performance

    const ratio = scrollStart / viewHeight
    thisSection.current.childNodes.forEach(node => {
      if (node instanceof HTMLElement){
        node.style.opacity = "" + (1 - ratio)
        node.style.scale = "" + (1 + ratio)
      }
    })
  }, [scrollY])
  return (
    <section ref={thisSection} className="h-[200vh]">
      <div className="slider">
        <div className="slider-text">
          { props.children }
        </div>
        <img src="/images/background-left.png" className="img-left"/>
        <img src="/images/background-right.png" className="img-right"/>
      </div>
    </section>
  )
}
function DoubleSidedContent(props: {title:string, children?:ReactNode, img:string, reverse?: boolean}) {
  return (
    <div className="doublesided-content">
      <div className={props.reverse?"reverse":""}>
        <div>
          <h3 className="text-(--primary-color)">{props.title}</h3>
          <hr className="border-(--secondary-color)" />
          {props.children}
        </div>
        <div className="img-container">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  )
}
function CardContent(props: { img:string, title:string, children?:ReactNode }) {
  return (
    <div className="group max-w-3xs relative bg-(--bg-secondary) rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={props.img} 
          alt={props.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h4 className="text-xl font-bold mb-2 text-(--text-primary) group-hover:text-(--primary-color) transition-colors">
          {props.title}
        </h4>
        <div className="text-(--text-secondary) text-sm leading-relaxed">
          {props.children}
        </div>
        
        {/* Optional: Read more link */}
        <button className="mt-4 text-(--primary-color) text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Learn More →
        </button>
      </div>
    </div>
  );
}
export { SingleColumnContent, DoubleSidedContent, CardContent }