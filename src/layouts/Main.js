/** @jsxImportSource @emotion/react */
import SearchBar from '../components/SearchBar'
import Trending from '../components/Trending'
import Recommend from '../components/Recommend'

const Main = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem 1.6rem',
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
