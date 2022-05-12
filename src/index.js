import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { ThemeProvider, Global } from '@emotion/react'
import theme from './assets/styles/theme'
import globalstyles from './assets/styles/globalstyles'
import App from './components/App'
import Home from 'pages/Home'
import Movies from 'pages/Movies'
import Series from 'pages/Series'
import Bookmark from 'pages/Bookmark'
import Search from 'pages/Search'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalstyles} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
)
