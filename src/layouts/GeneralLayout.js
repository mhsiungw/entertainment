/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'

const Layout = (props) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const style = {
    display: 'flex',
    flexDirection: 'column',
    [mq[1]]: {
      flexDirection: 'row',
    },
    maxWidth: '768px',
    margin: '0 auto',
  }

  return <div css={style} {...props} />
}

export default Layout
