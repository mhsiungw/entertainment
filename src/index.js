import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ThemeProvider, Global } from '@emotion/react'
import theme from './assets/styles/theme'
import globalstyles from './assets/styles/globalstyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Movies from 'pages/Movies'
import Series from 'pages/Series'
import Bookmark from 'pages/Bookmark'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalstyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
