import { useState, type InputHTMLAttributes } from "react"

function TextInput(props: {name:string, type:"text"|"number"|"email"|"password", value:string|number, handleChange:Function}){
  const [focus, setFocus] = useState(false)
  return (
    <label className={"text-input" + (focus?" focus":"")}>
      <span className={props.value!==""||focus?"active":""}>{props.name}</span>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={e => props.handleChange(e)}
        required/>
    </label>
  )
}
function TextArea(props: {name:string, value:string, handleChange:Function}){
  const [focus, setFocus] = useState(false)
  return (
    <label className={"text-input" + (focus?" focus":"")}>
      <span className={props.value!==""||focus?"active":""}>{props.name}</span>
      <textarea
        name={props.name}
        value={props.value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={e => props.handleChange(e)}
        required/>
    </label>
  )
}
function Input(props: {name:string, type:"text"|"number"|"email"|"password"|"textarea", value:string|number, handleChange:Function}){
  const [focus, setFocus] = useState(false)
  const options:InputHTMLAttributes<HTMLInputElement|HTMLTextAreaElement> = {
    name: props.name,
    value: props.value,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    required: true
  }
  return (
    <label className={"text-input" + (focus?" focus":"")}>
      <span className={props.value!==""||focus?"active":""}>{props.name}</span>
      {props.type==="textarea"?
      <textarea
        {...options}
        rows={5}
        onChange={e => props.handleChange(e)}/>:
      <input
        {...options}
        onChange={e => props.handleChange(e)}/>
      }
    </label>
  )
}
export default Input
export { TextInput, TextArea }