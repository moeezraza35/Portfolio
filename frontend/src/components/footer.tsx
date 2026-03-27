import type { ReactNode } from "react";

function TitleCol(){
  return (
    <div className="footer-title">
      <h4>
        <span className="mr-2">
          <img src="/logo-white.svg" className="h-full w-auto" alt="logo" />
        </span>
        Moeez Raza
      </h4>
      <hr />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, maiores.
      </p>
    </div>
  )
}
function FooterCol(props: {children: ReactNode, title: string}) {
  return (
    <div className="footer-col">
      <h4 className="font-semibold">{props.title}</h4>
      <hr />
      <ul>
        {props.children}
      </ul>
    </div>
  )
}
function Footer() {
  return (
    <footer>
      <div></div>
      <div className="footer-row">
        <TitleCol/>
        <FooterCol title="Quick Links">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Tools</li>
          <li>Contact</li>
        </FooterCol>

        <FooterCol title="Social">
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Stack Overflow</li>
            <li>Facebook</li>
            <li>Instagram</li>
        </FooterCol>

        <FooterCol title="Contact">
          <li className="break-all">moeezrazaseven@gmail.com</li>
          <li>WhatsApp</li>
        </FooterCol>
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