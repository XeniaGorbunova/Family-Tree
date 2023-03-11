// import { useState } from 'react'
import { Link } from 'react-router-dom'
import './HeaderStyles.css'

export function MenuBar() {
  // const [token] = useState()

  // if (!token) {
  //   return (
  //     <Link to="signin" className="link">
  //       <span>ВОЙТИ / РЕГИСТРАЦИЯ</span>
  //     </Link>
  //   )
  // }

  return (
    <>
      <input
        className="search"
        type="search"
        placeholder="ПОИСК"
        aria-label="Search"
      />
      <Link to="familytree" className="link">
        <span>СЕМЕЙНОЕ ДЕРЕВО</span>
      </Link>

      <Link to="location" className="link">
        <span>КАРТА</span>
      </Link>

      <Link to="/user/:id" className="link">
        <span>ЛИЧНЫЙ КАБИНЕТ</span>
      </Link>
    </>
  )
}
