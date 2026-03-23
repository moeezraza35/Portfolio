import { useContext, useEffect, useState } from "react"
import { AboutIcon, AutoIcon, ContactIcon, DarkIcon, HomeIcon, LightIcon, MenuIcon, ToolsIcon, WorkIcon } from "./icons"
import { getTheme, setTheme } from "../utils/theme"
import { ScrollContext } from "../context/scroll"

function Header(){
  const {scrollY} = useContext(ScrollContext)
  const [theme, setLabel] = useState(getTheme)
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    if (scrollY > 0 && !scrolled){
      setScrolled(true)
    } else if (scrollY == 0 && scrolled) {
      setScrolled(false)
    }
    return
  }, [scrollY])
  return (
    <header className={scrolled?"scrolled":"ontop"}>
      <div className="title">
        <img src={scrolled?"/favicon.svg":"/logo-white.svg"} alt="" />
        <span>Moeez Raza</span>
      </div>
      <ul className={"nav" + (nav?" active":"")}>
        <li><a href="">
          <HomeIcon/>
          <span>Home</span>
        </a></li>
        <li><a href="">
          <AboutIcon/>
          <span>About</span>
        </a></li>
        <li><a href="">
          <WorkIcon/>
          <span>Work</span>
        </a></li>
        <li><a href="">
          <ToolsIcon/>
          <span>Tools</span>
        </a></li>
        <li><a href="">
          <ContactIcon/>
          <span>Contact</span>
        </a></li>
      </ul>
      <div className="tab">
        <button className="flex items-center" onClick={() => {
          if (theme === "auto") {
            setTheme("light")
            setLabel("light")
          }else if (theme === "light") {
            setTheme("dark")
            setLabel("dark")
          } else {
            setTheme("auto")
            setLabel("auto")
          }
        }}>
          {theme==="light"?<LightIcon width="25px" height="25px"/>
          :theme==="dark"?<DarkIcon width="25px" height="25px"/>
          :<AutoIcon width="25px" height="25px"/>}
          <span className="ml-2 capitalize">{theme}</span>
        </button>
        <button className="menu" onClick={() => setNav(!nav)}>
          <MenuIcon/>
        </button>
      </div>
    </header>
  )
}
export default Header