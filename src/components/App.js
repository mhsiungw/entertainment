/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import Layout from 'layouts/GeneralLayout'
import Header from '../layouts/Header'
import { Outlet } from 'react-router-dom'

function App(props) {
  const { colors, useMedia } = useTheme()
  const mq = useMedia()

  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  )
}

export default App
