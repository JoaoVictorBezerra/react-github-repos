import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from 'react-query'
import './services/queryClient.ts'
import { queryClient } from './services/queryClient.ts'
import { BrowserRouter } from 'react-router-dom'
import './styles/tailwinc.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider >
  </React.StrictMode>,
)
