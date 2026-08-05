import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Example from './Example.jsx'
import { Footer } from './components/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Example/>
  <Footer name = "love" Class ="1st class" hobby = "drums" />
  <Footer name = "chetan " Class = "sleeper" hobby = "No hobby" />
  <Footer/>
  <Footer/>
  <Footer/>
  </StrictMode>,
)
