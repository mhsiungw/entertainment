/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'

const Layout = (props) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [mq[1]]: {
      flexDirection: 'row',
      minWidth: '768px',
    },
    [mq[2]]: {
      maxWidth: '1440px',
    },
  }

  return <div css={style} {...props} />
}

export default Layout
