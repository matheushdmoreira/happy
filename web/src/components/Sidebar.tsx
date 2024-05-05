import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import mapMarkerImg from '../assets/images/map-marker.svg'

import '../styles/components/sidebar.css'

export default function Sidebar() {
  const navigate = useNavigate()
  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  )
}
