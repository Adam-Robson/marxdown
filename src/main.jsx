import React from 'react'
import ReactDOM from 'react-dom/client'
import { MarkdownProvider } from './context/MarkdownContext';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MarkdownProvider>
      <App />
    </MarkdownProvider>
  </React.StrictMode>,
)
