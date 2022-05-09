/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import { Fragment } from 'react'
import Home from '../pages/Home'

function App(props) {
  const { colors, useMedia } = useTheme()
  const mq = useMedia()

  return (
    <Fragment>
      <Home />
    </Fragment>
  )
}

export default App
