import { Link, useLocation } from 'react-router-dom'
import './HeaderStyles.css'
import { MenuBar } from './MenuBar'

function Header() {
  const location = useLocation()
  const lightStyle = location.pathname === '/'

  return (
    <div className={`${lightStyle ? 'background_light' : 'background_dark'}`}>
      <div className="d-flex justify-content-md-between">
        <Link to="/" className={`${lightStyle ? 'link' : 'link_white'}`}>
          <span>О ПРОЕКТЕ</span>
        </Link>
        <MenuBar lightStyle={lightStyle} />
      </div>
    </div>
  )
}

export default Header
