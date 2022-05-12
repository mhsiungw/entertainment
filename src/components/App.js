import Layout from 'layouts/GeneralLayout'
import Header from '../layouts/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  )
}

export default App
