import { YMaps, Map } from 'react-yandex-maps'

function LocationPage() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1>НАЙДИ ОТКУДА ТЫ РОДОМ</h1>
        <YMaps>
          <div>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
          </div>
        </YMaps>
      </Jumbotron>
    </Container>
  )
}

export default LocationPage
