/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'

const Layout = (props) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    justifyContent: 'center',
    [mq[1]]: {
      flexDirection: 'row',
    },
  }

  return <div css={style} {...props} />
}

export default Layout
