import { useEffect, useState } from 'react'
// import { FaWhatsapp } from 'react-icons/fa'
import { FiClock, FiInfo } from 'react-icons/fi'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { useParams } from 'react-router-dom'

import { api } from '../services/api'

import mapIcon from '../utils/mapIcon'

import Sidebar from '../components/Sidebar'

import '../styles/pages/orphanage.css'

interface Orphanage {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: string
  images: Array<{
    id: number
    url: string
  }>
}

type OrphanageParams = {
  id: string
}

export function Orphanage() {
  const params = useParams() as OrphanageParams

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [orphanage, setOrphanage] = useState<Orphanage>()

  useEffect(() => {
    fetchOrphanages(params.id)
  }, [params.id])

  async function fetchOrphanages(orphanageId: string) {
    const response = await api.get(`/orphanages/${orphanageId}`)
    setOrphanage(response.data)
  }

  if (!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <div className="images">
            {orphanage.images.map((image, index) => (
              <button
                key={image.id}
                className={activeImageIndex === index ? 'active' : ''}
                type="button"
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>

            <p>{orphanage.about}</p>

            <div className="map-container">
              <MapContainer
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={15}
                style={{
                  width: '100%',
                  height: 280,
                }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                  // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </MapContainer>

              <footer>
                <a
                  target="_blank"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  rel="noopener noreferrer"
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            {/* <button className="primary-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> */}
          </div>
        </div>
      </main>
    </div>
  )
}
