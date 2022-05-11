/** @jsxImportSource @emotion/react */
import Carousel from 'components/Carousel'
import CardList from '../components/CardList'
import Main from '../layouts/Main'
import dummyData from 'data'

const Home = () => {
  const trendingMovies = dummyData.filter((t) => {
    return t.hasOwnProperty('trending')
  })

  return (
    <Main>
      <Carousel items={trendingMovies} />
      <CardList title="Recommended for you" items={dummyData} />
    </Main>
  )
}

export default Home
