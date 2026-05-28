import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import './i18n'
import Template from './App.tsx'
import Homepage from './childpage/index.tsx'
import FriendlyLinksContent from './childpage/friendlylinks.tsx'
import FourZeroFour from './childpage/404.tsx'
import ToastPlayground from './childpage/toast_playground.tsx'
import { Styletest, ComponentsDoc } from './childpage/styletest.tsx'

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Homepage />
  },
  {
    "path": "/friendlylinks",
    "element": <Template element={FriendlyLinksContent} />
  },
  {
    "path": "/styletest",
    "element": <Template element={Styletest} />
  },
  {
    "path": "/styletest/doc/components",
    "element": <Template element={ComponentsDoc} />
  },
  {
    "path": "/styletest/play/toast",
    "element": <Template element={ToastPlayground} />
  },
  {
    "path": "*",
    "element": <Template element={FourZeroFour} />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
