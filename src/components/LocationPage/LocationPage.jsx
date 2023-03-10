import Container from 'react-bootstrap/Container'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

function LocationPage() {
  return (
    <Container className="p-3" fluid>
      <h1 style={{ textAlign: 'center' }} className="m-5">НАЙДИ ОТКУДА ТЫ РОДОМ</h1>
      <YMaps style={{ width: '100%' }}>
        <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 9,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark defaultGeometry={[55.75, 37.57]} />
        </Map>
      </YMaps>
    </Container>
  )
}

export default LocationPage
