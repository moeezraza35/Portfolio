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
function CardContent() {
  return (
    <div>
      <img src="" alt="" />
    </div>
  )
}
export { SingleColumnContent, DoubleSidedContent, CardContent }