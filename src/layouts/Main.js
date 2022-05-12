/** @jsxImportSource @emotion/react */
import SearchBar from '../components/SearchBar'
import { useTheme } from '@emotion/react'

const Main = ({ children }) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    marginTop: '2.4rem',
    [mq[2]]: {
      margin: '4.8rem 0',
    },
    flexGrow: 1,
  }

  return (
    <main css={style}>
      <SearchBar />
      {children}
    </main>
  )
}

export default Main
