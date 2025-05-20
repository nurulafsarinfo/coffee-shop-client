import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './components/Layouts/MainLayout.jsx'
import Home from './components/Home.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import CoffeeDetails from './components/CoffeeDetails.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import Users from './components/Users.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home,
      },
      {
        path: '/addCoffee',
        Component: AddCoffee,
      },
      {
        path: '/coffees/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: '/updateCoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'users',
        loader: () => fetch('http://localhost:3000/users'),
        Component: Users,
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
