import { DoubleSidedContent, SingleColumnContent } from "../components/content"

function Home(){
  return (
    <>
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
      <section>
        <DoubleSidedContent title="About Me" img="/favicon.svg">
          <p className="text-justify">
            Hi, I'm Moeez Raza — a Full-Stack Web and Mobile App Developer with a passion for building digital solutions that make a difference. I specialize in creating responsive, user-friendly applications using modern technologies like React, Fast-API, Django and React Native. Whether it's a dynamic website or a cross-platform mobile app, I love turning complex problems into simple, elegant designs. Let's build something great together.
          </p>
        </DoubleSidedContent>
        <DoubleSidedContent title="Skills" img="/favicon.svg">
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
      </section>
    </>
  )
}
export default Home