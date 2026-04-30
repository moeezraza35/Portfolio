import { createContext, useState, type ReactNode } from "react"

interface LoadingContextType {
  loading: boolean
  setLoading: Function
}
const LoadingContext = createContext<LoadingContextType>({
  loading: true,
  setLoading: () => {}
})
function LoadingProvider(props:{children:ReactNode}){
  const [loading, setLoading] = useState(true)
  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      { props.children }
    </LoadingContext.Provider>
  )
}
export {LoadingContext, LoadingProvider}