/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'

const Layout = (props) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const style = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '768px',
    justifyContent: 'center',
    [mq[1]]: {
      flexDirection: 'row',
      maxWidth: '100vw',
    },
  }

  return <div css={style} {...props} />
}

export default Layout
