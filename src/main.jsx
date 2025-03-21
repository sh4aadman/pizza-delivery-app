import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import WebRoutes from '/src/routes/WebRoutes.jsx'
import "/src/index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <WebRoutes />
    </BrowserRouter>
  </StrictMode>,
)
