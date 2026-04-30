import { StrictMode, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { LoadingProvider } from './context/loading'
import { ScrollProvider } from './context/scroll'
import { loadTheme } from './utils/theme'
import Header from './components/header'
import Footer from './components/footer'
import ContactForm from './pages/form'
import NotFound from './pages/404'
import Submit from './pages/submit'
import './assets/App.css'

function App(){
  useEffect(() => {loadTheme()}, [])
  return (
    <BrowserRouter>
      <LoadingProvider>
        <ScrollProvider>
          <Header/>
          <Routes>
            <Route path='/contact/' element={<ContactForm/>}/>
            <Route path="/contact/submit/" element={<Submit/>}/>
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
