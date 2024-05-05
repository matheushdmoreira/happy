import { BrowserRouter } from 'react-router-dom'

import './styles/global.css'
import 'leaflet/dist/leaflet.css'

import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
