function Home(){
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-max">
        <h3>Hi!</h3>
        <h2>I'm</h2>
        <h1>Moeez Raza</h1>
        <hr />
        <h3 className="mt-4">Full-Stack Web & Mobile App Developer</h3>
      </div>
      <div className="absolute z-[-1] opacity-50">
        <img src="/images/background.png" width="100%" height="100vh" />
      </div>
    </section>
  )
}
export default Home