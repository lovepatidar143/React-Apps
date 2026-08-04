import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Love from './Love.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Love/>
  </StrictMode>,
)
