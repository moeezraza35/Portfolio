import { useContext, useEffect, useRef, type ReactNode, type RefObject } from "react"
import { ScrollContext, type Section } from "../context/scroll"

function SingleColumnContent(props: {children?: ReactNode, name: string}){
  const { scrollY } = useContext(ScrollContext)
  const thisSection = useRef<HTMLDivElement>(null)
  const slider = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!thisSection.current) return
    const viewHeight = window.innerHeight
    const viewStart = thisSection.current.offsetTop
    const scrollStart = scrollY - viewStart
    if (
      scrollStart < 0 ||
      scrollStart > thisSection.current.clientHeight+viewStart
    ) return // Optimizing the performance

    const ratio = scrollStart / viewHeight
    slider.current?.childNodes.forEach(node => {
      if (node instanceof HTMLElement){
        node.style.opacity = "" + (1 - ratio)
        node.style.scale = "" + (1 + ratio)
      }
    })
  }, [scrollY])
  return (
    <RegisteredSection name={props.name} className="h-[200vh]" ref={thisSection}>
      <div className="fixed" ref={slider}>
        <div className="slide" style={{opacity: 1, scale: 1}}>
          <div className="slide-text">
            { props.children }
          </div>
          <img src="/images/background-left.png" className="img-left"/>
          <img src="/images/background-right.png" className="img-right"/>
        </div>
      </div>
    </RegisteredSection>
  )
}
function RegisteredSection(props: {children?:ReactNode, name:string, className?:string, ref?:RefObject<HTMLElement|null>}){
  const thisSection = useRef<HTMLElement>(null)
  const { setSections } = useContext(ScrollContext)
  props.ref? props.ref.current = thisSection.current : null
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
  return (
    <section ref={thisSection} className={props.className || ""} id={props.name}>
      {props.children}
    </section>
  )
}
function OnScreenContent(props: {children:ReactNode, thisSection: RefObject<HTMLElement|null>, onScreen:boolean, setOnScreen:Function}){
  const { scrollY } = useContext(ScrollContext)
  useEffect(() => {
    if (!props.thisSection.current) return
    const viewStart = props.thisSection.current.offsetTop
    if (scrollY > viewStart-100 && !props.onScreen) {
      props.setOnScreen(true)
    } else if (scrollY < viewStart-100 && props.onScreen) {
      props.setOnScreen(false)
    }
  }, [scrollY])
  return (
    <>
      {props.children}
    </>
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
    <div className="group card">
      <div className="card-img">
        <img 
          src={props.img} 
          alt={props.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="card-overlayer"></div>
      </div>
      <div className="p-5">
        <h4>
          {props.title}
        </h4>
        <div className="body">
          {props.children}
        </div>
        <button>
          Learn More →
        </button>
      </div>
    </div>
  );
}
function ImageBox (props: {name:string, type:string}){
  return (
    <div className="group img-box">
      <div>
        <img src="/favicon.svg" alt=""/>
      </div>
      <h4>
        {props.name}
      </h4>
      <span className="body">
        {props.type}
      </span>
    </div>
  )
}
export { SingleColumnContent, RegisteredSection, OnScreenContent, DoubleSidedContent, CardContent, ImageBox }