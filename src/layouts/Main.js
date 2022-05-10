/** @jsxImportSource @emotion/react */
import SearchBar from '../components/SearchBar'
import Trending from '../components/Trending'
import Recommend from '../components/Recommend'
import { useTheme } from '@emotion/react'

const Main = () => {
  const { useMedia, colors } = useTheme()
  const mq = useMedia()

  const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem 1.6rem',
    [mq[1]]: {
      maxWidth: '80%',
    },
  }

  return (
    <main css={style}>
      <SearchBar />
      <Trending />
      <Recommend />
    </main>
  )
}

export default Main
