/** @jsxImportSource @emotion/react */
import SearchBar from '../components/SearchBar'
import { useTheme } from '@emotion/react'

const Main = ({ children }) => {
  const { useMedia, colors } = useTheme()
  const mq = useMedia()

  const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem 1.6rem',
    flexGrow: 1,
    [mq[1]]: {
      maxWidth: '80%',
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
