import { useState, type ChangeEvent } from "react"
import Input from "../components/input"

function Login(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [visible, setVisible] = useState(false)
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="space-x-2 space-y-2 border-(--highlight-color) border pl-4 pr-2 py-4 rounded-md shadow-md">
        <Input
          name="username"
          type="text"
          value={username}
          handleChange={(e:ChangeEvent<HTMLInputElement>) => {setUsername(e.target.value)}}/>
        <Input
          name="password"
          type={visible?"text":"password"}
          value={password}
          handleChange={(e:ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}/>
        <label className="gap-2">
          <input type="checkbox" id="visible" onChange={e => setVisible(e.target.checked)}/>
          <pre className="inline">{
            visible?" Hide Password":" Show Password"
          }</pre>
        </label>
      </form>
    </div>
  )
}
export default Login