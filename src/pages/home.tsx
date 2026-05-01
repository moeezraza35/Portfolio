import { useRef, useState } from "react"
import { DoubleSidedContent, SingleColumnContent, CardContent, ImageBox, RegisteredSection, OnScreenContent } from "../components/content"

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
  const [onScreen, setOnScreen] = useState(false)
  return (
    <OnScreenContent thisSection={thisSection} onScreen={onScreen} setOnScreen={setOnScreen}>
      <RegisteredSection name="about" ref={thisSection}>
        <div className="slide">
          <h2 className={"slide-heading" + (onScreen?"":" opacity-0 scale-200")}>About Me</h2>
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
      </RegisteredSection>
    </OnScreenContent>
  )
}
function WorkSection(){
  const thisSection = useRef<HTMLElement>(null)
  const [onScreen, setOnScreen] = useState(false)
  return (
    <OnScreenContent thisSection={thisSection} onScreen={onScreen} setOnScreen={setOnScreen}>
      <RegisteredSection name="work" ref={thisSection}>
        <div className="slide">
          <h2 className={"slide-heading" + (onScreen?"":" opacity-0 scale-200")}>My Work</h2>
        </div>
        <div className="flex flex-wrap gap-2 justify-center min-h-screen bg-(--bg-color) py-10">
          <CardContent img="/images/obmms.jpg" title="OBMMS">
            <p>Online Bus Monitoring & Management System developed for companies providing the private transportation services for their staff or students.</p>
          </CardContent>
          <CardContent img="/images/gtrs.png" title="GTRS Dashboard">
            <p>A Dashboard pannel for car insurance company. Worked as a backend developer for a client project. Helps in saving cars data along with owner's details.</p>
          </CardContent>
          <CardContent img="/images/ric.jpg" title="RIC MS">
            <p>Riphah International College Management System. Primarily focus on both staff and students based on their categories</p>
          </CardContent>
          <CardContent img="/images/arduino.jpg" title="RFID Attendance">
            <p>Radio Frequency Identification Attendance System is Arduino based project, for marking attendance using card scanning and save it into local database.</p>
          </CardContent>
          <CardContent img="/images/vista.jpg" title="Vista Pakistan">
            <p>Vista Pakistan is a management software developed for Final Year Project in Associate Degree Program (ADP). This software helps in managing a tourist support companies.</p>
          </CardContent>
        </div>
      </RegisteredSection>
    </OnScreenContent>
  )
}
function ToolsSection(){
  const thisSection = useRef<HTMLElement>(null)
  const [onScreen, setOnScreen] = useState(false)
  return (
    <OnScreenContent thisSection={thisSection} onScreen={onScreen} setOnScreen={setOnScreen}>
      <RegisteredSection name="tools" ref={thisSection}>
        <div className="slide">
          <h2 className={"slide-heading" + (onScreen?"":" opacity-0 scale-200")}>My Tools</h2>
        </div>
        <div className="bg-(--bg-color)">
          <div className="max-w-6xl mx-auto py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <ImageBox name="VS Code" type="Code Editor" img="https://code.visualstudio.com/favicon.ico"/>
              <ImageBox name="Android Studio" type="IDE" img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/3840px-Android_Studio_icon_%282023%29.svg.png"/>
              <ImageBox name="QT Creater" type="IDE" img="//d33sqmjvzgs8hq.cloudfront.net/wp-content/themes/oneqt/assets/images/favicon-32x32.png"/>
              <ImageBox name="GitHub" type="Version Control" img="https://www.svgrepo.com/show/475654/github-color.svg"/>
              <ImageBox name="Docker" type="Containerization" img="https://www.docker.com/favicon.ico"/>
              <ImageBox name="Windows" type="Operating System" img="https://www.microsoft.com/favicon.ico"/>
              <ImageBox name="Ubuntu" type="Operating System" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnlpF-hU-iasxddR5asIvENfxbo0SFf_6gA&s"/>
              <ImageBox name="Zoom" type="Meetings" img="https://www.zoom.com/favicon.ico"/>
              <ImageBox name="Google Meet" type="Meetings" img="https://meet.google.com/favicon.ico"/>
              <ImageBox name="Any Desk" type="Remote Desktop" img="https://anydesk.com/favicon.ico"/>
              <ImageBox name="PUTTY" type="SSH" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeKF_KpCQ4rtqSMz3dC3nJCq9zOUucq6Jtw&s"/>
              <ImageBox name="DeepSeek" type="AI agent" img="https://fe-static.deepseek.com/chat/favicon.svg"/>
              <ImageBox name="Gemini" type="AI agent" img="https://www.gstatic.com/lamda/images/gemini_sparkle_4g_512_lt_f94943af3be039176192d.png"/>
              <ImageBox name="Lovable AI" type="AI agent" img="https://lovable.dev/favicon.ico"/>
              <ImageBox name="Cursor" type="AI agent" img="https://cursor.com/favicon.ico"/>
            </div>
          </div>
        </div>
      </RegisteredSection>
    </OnScreenContent>
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