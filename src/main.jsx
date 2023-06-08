import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider.jsx'
import HomeLayout from './pages/layout/HomeLayout.jsx'
import Home from './pages/home/Home.jsx'
import Login from './pages/authentication/Login.jsx'
import Register from './pages/authentication/Register.jsx'
import Instructors from './pages/instructors/Instructors.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/instructors',
        element: <Instructors/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
