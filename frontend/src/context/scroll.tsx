import { createContext, useEffect, useState, type ReactNode } from "react";

type Section = {
  name: string
  start: number
  height: number
}
interface ScrollContextProps {
  currentSection: string
  scrollY: number
  sections: Array<Section>,
  setSections: Function
}
const ScrollContext = createContext<ScrollContextProps>({
  currentSection: "",
  scrollY: 0,
  sections: [],
  setSections: () => {}
})
function ScrollProvider(props:{children:ReactNode}){
  const [sections, setSections] = useState<Array<Section>>([])
  const [currentSection, setSection] = useState<string>("")
  const [scrollY, setScroll] = useState(0)
  const isInSection = (section:Section):Boolean => {
    var viewHeight = window.innerHeight
    var boundary = section.start < viewHeight? 0 : viewHeight / 2
    return scrollY >= section.start - boundary && scrollY <= section.start + section.height - viewHeight / 2
  }
  const handleScroll = () => {
    for (var i=0; i<sections.length; i++){
      if (isInSection(sections[i])) {
        setSection(sections[i].name)
        return
      }
    }
    setSection("")
  }
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY))
  }, [])
  useEffect(() => {
    handleScroll()
  }, [scrollY])
  return (
    <ScrollContext.Provider value={{
      currentSection: currentSection,
      scrollY: scrollY,
      sections: sections,
      setSections: setSections}}>
      { props.children }
    </ScrollContext.Provider>
  )
}
export { ScrollContext, ScrollProvider, type Section }