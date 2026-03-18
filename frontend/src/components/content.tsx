import type { ReactNode } from "react"

function DoubleSidedContent(props: {title:string, children?:ReactNode, img:string}) {
  return (
    <div className="doublesided-content">
      <div>
        <h3>{props.title}</h3>
        <hr className="my-2"/>
        {props.children}
      </div>
      <img src={props.img} alt={props.title} />
    </div>
  )
}
function CardContent() {
  return (
    <div>
      <img src="" alt="" />
    </div>
  )
}
export { DoubleSidedContent, CardContent }