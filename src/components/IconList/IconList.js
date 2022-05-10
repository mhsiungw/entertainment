/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'

const IconList = ({ children }) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const style = {
    display: 'flex',
    alignItems: 'center',
    gap: '2.4rem',
    [mq[2]]: {
      flexDirection: 'column',
    },
  }

  return <ul css={style}>{children}</ul>
}

export default IconList
