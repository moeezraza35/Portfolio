import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoadingProvider } from './context/loading'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import NotFound from './pages/404'
import './assets/App.css'
import { ScrollProvider } from './context/scroll'

function App(){
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
