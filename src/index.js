import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Layout from './layouts/GeneralLayout'
import { ThemeProvider, Global } from '@emotion/react'
import theme from './assets/styles/theme'
import globalstyles from './assets/styles/globalstyles'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalstyles} />
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
)
