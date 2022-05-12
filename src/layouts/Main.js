/** @jsxImportSource @emotion/react */
import SearchBar from '../components/SearchBar'
import { useTheme } from '@emotion/react'

const Main = ({ children }) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const style = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: '2.4rem',
    [mq[1]]: {
      gap: '3.9rem',
    },
    [mq[2]]: {
      margin: '4.8rem 0',
    },
  }

  return (
    <main css={style}>
      <SearchBar />
      {children}
    </main>
  )
}

export default Main
