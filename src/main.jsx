import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './css/index.css'
import './css/swiper-index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/mrandmrs",
    element: <App />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
