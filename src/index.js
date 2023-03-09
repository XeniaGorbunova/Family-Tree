/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux/es/exports'
import App from './App'
import Main from './components/Main/Main'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import './index.css'
import { store } from './redux/store'
import PageNotFound from './components/PageNotFound/PageNotFound'
import DetailPage from './components/DatailPage/DetailPage'
import UserPage from './components/UserPage/UserPage'
// import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/products',
        element: <Cathalog />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <DetailPage />,
      },
      {
        path: '/user/:id',
        element: <UserPage />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
