import { ChangeEvent, FormEvent, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'

import Sidebar from '../components/Sidebar'

import mapIcon from '../utils/mapIcon'

import '../styles/pages/create-orphanage.css'
import { api } from '../services/api'
import { useNavigate } from 'react-router-dom'

interface PositionProps {
  lat: number
  lng: number
}

interface MapMakerProps {
  makerPosition: PositionProps
  setMakerPosition: (props: PositionProps) => void
}

function MapMarker({ makerPosition, setMakerPosition }: MapMakerProps) {
  useMapEvents({
    click(e) {
      const newMarker = e.latlng
      setMakerPosition(newMarker)
    },
  })

  if (makerPosition.lat !== 0) {
    return (
      <Marker interactive={false} icon={mapIcon} position={makerPosition} />
    )
  }
}

export function CreateOrphanage() {
  const navigate = useNavigate()

  const [position, setPosition] = useState<PositionProps>({
    lat: 0,
    lng: 0,
  })

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const { lat, lng } = position

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(lat))
    data.append('longitude', String(lng))
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))

    images.forEach((image) => {
      data.append('images', image)
    })

    await api.post('/orphanages', data)

    alert('Cadastro realizado com sucesso!')

    navigate('/app')
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <MapContainer
              center={[-22.8952008, -47.1134344]}
              zoom={15}
              style={{
                width: '100%',
                height: 280,
              }}
            >
              <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_APP_MAPBOX_TOKEN}`}
              />
              <MapMarker
                makerPosition={position}
                setMakerPosition={setPosition}
              />
            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image) => {
                  return <img key={image} src={image} alt={name} />
                })}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                name=""
                id="image[]"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={(event) => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>

                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="primary-button">Confirmar</button>
        </form>
      </main>
    </div>
  )
}
