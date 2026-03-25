import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoadingProvider } from './context/loading'
import { ScrollProvider } from './context/scroll'
import { loadTheme } from './utils/theme'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import NotFound from './pages/404'
import './assets/App.css'

function App(){
  useEffect(() => {loadTheme()}, [])
  return (
    <BrowserRouter>
      <LoadingProvider>
        <ScrollProvider>
          <Header/>
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
  <StrictMode>
    <App />
  </StrictMode>
)
