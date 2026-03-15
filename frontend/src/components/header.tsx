import { useState } from "react"
import { AboutIcon, AutoIcon, ContactIcon, DarkIcon, HomeIcon, LightIcon, ToolsIcon, WorkIcon } from "./icons"
import { getTheme, setTheme } from "../utils/theme"

function Header(){
  const [theme, setLabel] = useState(getTheme)
  return (
    <header>
      <div className="title">
        <img src="/logo-white.svg" alt="" />
        <span>Moeez Raza</span>
      </div>
      <ul className="nav">
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
          <span className="text-center"><ContactIcon/></span>
          <span>Contact</span>
        </a></li>
      </ul>
      <div className="tab">
        <button className="flex" onClick={() => {
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
          <span className="ml-2">{theme}</span>
        </button>
      </div>
    </header>
  )
}
export default Header