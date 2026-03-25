function Footer(){
  return (
    <footer className="h-[calc(100vh-16px)] m-2 bg-(--primary-color) text-white rounded-md flex flex-col justify-between p-4">
      <div></div>
      <div className="flex justify-center gap-4">
        <div className="flex-1">
          <h4 className="flex h-9">
            <span className="mr-2">
              <img src="/logo-white.svg" className="h-full w-auto"/>
            </span>
            Moeez Raza
          </h4>
          <hr />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, maiores.</p>
        </div>
        <div className="flex-1">
          <h4>Quick Links</h4>
          <hr />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Tools</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex-1">
          <h4>Social</h4>
          <hr />
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Stack OverFlow</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="flex-1">
          <h4>Contact</h4>
          <hr />
          <ul>
            <li>moeezrazaseven@gmail.com</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center text-sm text-white/70">All copyrights reserved @moeezraza.dev</p>
      </div>
    </footer>
  )
}
export default Footer