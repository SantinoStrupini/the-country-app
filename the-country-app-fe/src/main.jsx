import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CountriesApp } from './CountriesApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountriesApp />
  </StrictMode>,
)
