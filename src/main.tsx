import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { LoadingProvider } from './context/loading'
import { ScrollProvider } from './context/scroll'
import { loadTheme } from './utils/theme'
import Footer from './components/footer'
import Home from './pages/home'
import NotFound from './pages/404'
import './assets/styles.css'

function App(){
  useEffect(() => {loadTheme()}, [])
  return (
    <BrowserRouter>
      <LoadingProvider>
        <ScrollProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </ScrollProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <App />
)
