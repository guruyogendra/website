import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: "'IBM Plex Sans', sans-serif",
            borderRadius: '8px',
          },
          success: {
            style: { background: '#0a2540', color: '#fff', border: '1px solid #00b8d4' },
          },
          error: {
            style: { background: '#fff', color: '#0a2540', border: '1px solid #e2e8f0' },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
)
