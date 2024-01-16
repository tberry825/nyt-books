import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback="BEEEEEEPPPPP!! You have reached an error in this app. Please refresh your screen and try again">
      <App />
    </ErrorBoundary>

  </React.StrictMode>,
)
