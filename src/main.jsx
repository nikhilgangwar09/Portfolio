import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/reset.css'
import './styles/index.css'

// Marks that JS is running so reveal animations can kick in.
// Without this class the site is fully visible, even with JS disabled.
document.documentElement.classList.add('js')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)