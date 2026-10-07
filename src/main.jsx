import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/800.css'
import './index.css'
import App from './App.jsx'
import { captureAttribution } from './lib/attribution.js'

captureAttribution()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
