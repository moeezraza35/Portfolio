import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Header from './components/header'
import Footer from './components/footer'
import { LoadingProvider } from './context/loading'
import { ScrollProvider } from './context/scroll'

function App(){
  return (
    <BrowserRouter>
      <LoadingProvider>
        <ScrollProvider>
          <Header/>
          <Routes>
            <Route path='/admin/' element={<Dashboard/>}/>
            <Route path='/admin/login/' element={<Login/>}/>
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
  </StrictMode>,
)
