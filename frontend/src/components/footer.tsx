function Footer() {
  return (
    <footer className="min-h-[calc(100vh-16px)] m-2 bg-(--primary-color) text-white rounded-md flex flex-col justify-between p-4">
      <div></div>
      
      {/* Flexbox layout */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Column 1 - Takes full width on mobile, auto on desktop */}
        <div className="w-full md:w-auto flex-1 min-w-50">
          <h4 className="flex h-9 items-center">
            <span className="mr-2">
              <img src="/logo-white.svg" className="h-full w-auto" alt="logo" />
            </span>
            Moeez Raza
          </h4>
          <hr className="my-2 border-white/20" />
          <p className="text-sm text-white/80 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, maiores.
          </p>
        </div>

        {/* Column 2 */}
        <div className="w-[calc(50%-1rem)] md:w-auto flex-1 min-w-30">
          <h4 className="font-semibold">Quick Links</h4>
          <hr className="my-2 border-white/20" />
          <ul className="space-y-1 text-sm text-white/80">
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Tools</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-[calc(50%-1rem)] md:w-auto flex-1 min-w-30">
          <h4 className="font-semibold">Social</h4>
          <hr className="my-2 border-white/20" />
          <ul className="space-y-1 text-sm text-white/80">
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Stack Overflow</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="w-full md:w-auto flex-1 min-w-37.5">
          <h4 className="font-semibold">Contact</h4>
          <hr className="my-2 border-white/20" />
          <ul className="space-y-1 text-sm text-white/80">
            <li className="break-all">moeezrazaseven@gmail.com</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>

      <div>
        <p className="text-center text-sm text-white/70">
          All copyrights reserved @moeezraza.dev
        </p>
      </div>
    </footer>
  );
}

export default Footer;