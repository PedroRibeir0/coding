import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './css/index/index.css'


// import App from './App.jsx'
import Index from './pages/home/Index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
