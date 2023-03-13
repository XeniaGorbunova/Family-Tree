/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getUserSelector, logOut } from '../../redux/slices/userSlice'
import './HeaderStyles.css'

export function MenuBar({ lightStyle }) {
  const { token } = useSelector(getUserSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogOut() {
    dispatch(logOut())
    navigate('/')
  }

  if (!token) {
    return (
      <Link to="signin" className="link">
        <span>ВОЙТИ / РЕГИСТРАЦИЯ</span>
      </Link>
    )
  }

  return (
    <>
      <input
        className={`${lightStyle ? 'search' : 'search_white'}`}
        type="search"
        placeholder="ПОИСК"
        aria-label="Search"
      />
      <Link to="familytree" className={`${lightStyle ? 'link' : 'link_white'}`}>
        <span>СЕМЕЙНОЕ ДЕРЕВО</span>
      </Link>

      <Link to="location" className={`${lightStyle ? 'link' : 'link_white'}`}>
        <span>КАРТА</span>
      </Link>

      <Link to="/user/:id" className={`${lightStyle ? 'link' : 'link_white'}`}>
        <span>ЛИЧНЫЙ КАБИНЕТ</span>
      </Link>
      <span
        className={`${lightStyle ? 'link' : 'link_white'}`}
        onClick={handleLogOut}
      >
        ВЫЙТИ
      </span>
    </>
  )
}
