import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/App.css'

function App(){
  return (
    <></>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
