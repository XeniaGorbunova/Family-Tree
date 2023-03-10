import Container from 'react-bootstrap/Container'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import lineBottom from '../../assets/lineBottom.png'

function LocationPage() {
  return (
    <Container className="p-3 d-flex flex-column align-items-center" fluid>
      <h1 style={{ textAlign: 'center', fontWeight: '400' }} className="m-5">
        НАЙДИ ОТКУДА ТЫ РОДОМ
      </h1>
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
      <p className="mb-4 mt-5" style={{ maxWidth: '950px', textAlign: 'center' }}>
        Карта мира с отмеченными кородами, где родились члены вашей семьи.Несколько еще строчек,
        пока не придумала каких.
        Несколько еще строчек, пока не придумала каких.

      </p>
      <img src={lineBottom} alt="line" />
    </Container>
  )
}

export default LocationPage
