import { Link } from 'react-router-dom'
import './HeaderStyles.css'
import { MenuBar } from './MenuBar'

function Header() {
  console.log(1)
  return (
    <div className="bg">
      <div className="d-flex justify-content-md-between">
        <Link to="/" className="link">
          <span>О ПРОЕКТЕ</span>
        </Link>
        <MenuBar />
      </div>
    </div>
  )
}

export default Header
