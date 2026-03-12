import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/App.css'
// import App from './App.tsx'

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
