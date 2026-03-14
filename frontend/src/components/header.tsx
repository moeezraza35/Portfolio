import { AboutIcon, AutoIcon, ContactIcon, DarkIcon, HomeIcon, LightIcon, ToolsIcon, WorkIcon } from "./icons"

function Header(){
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
        <button className="flex">
          <LightIcon width="25px" height="25px"/>
          <DarkIcon width="25px" height="25px"/>
          <AutoIcon width="25px" height="25px"/>
          <span className="ml-2">Auto</span>
        </button>
      </div>
    </header>
  )
}
export default Header