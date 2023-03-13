import './App.css'
import { Outlet } from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="d-flex flex-column" style={{ height: '100vh' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
