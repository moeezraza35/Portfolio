import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard(){
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/admin/login/")
  }, [])
  return (
    <></>
  )
}
export default Dashboard