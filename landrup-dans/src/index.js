import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import { CookiesProvider } from 'react-cookie'
import { StateProvider } from './Util/StateContext'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <StateProvider>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </StateProvider>
    </CookiesProvider>
  </React.StrictMode>
)
