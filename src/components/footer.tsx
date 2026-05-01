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
        I build software that works beautifully. Got a question or an idea? I'd love to hear from you - feel free to ask anything.
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
          <li><a href={"/"}>Home</a></li>
          <li><a href={"/#about"}>About</a></li>
          <li><a href={"/#work"}>Work</a></li>
          <li><a href={"/#tools"}>Tools</a></li>
          <li><a href={"/contact/"}>Contact</a></li>
        </FooterCol>

        <FooterCol title="Social">
          <li><a href="https://www.linkedin.com/in/moeez-raza-773103282/">LinkedIn</a></li>
          <li><a href="https://www.fiverr.com/moeez_raza_35">Fiverr</a></li>
          <li><a href="https://www.upwork.com/freelancers/~01e437ccad7a0bf3b0">Upwork</a></li>
          <li><a href="https://sproutgigs.com/u/moeezraza">SproutGigs</a></li>
          <li><a href="https://stackoverflow.com/users/20807706/moeez-raza">Stack Overflow</a></li>
        </FooterCol>

        <FooterCol title="Contact">
          <li className="break-all"><a href="mailto:moeezrazaseven@gmail.com">Email</a></li>
          <li><a href="https://wa.me/923459445922">WhatsApp</a></li>
        </FooterCol>
      </div>

      <div>
        <p className="text-center text-sm text-white/70">
          Copyright © 2026 Moeez Raza.
        </p>
      </div>
    </footer>
  );
}

export default Footer;