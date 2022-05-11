/** @jsxImportSource @emotion/react */
import Trending from 'components/Carousel'
import CardList from '../components/CardList'
import Main from '../layouts/Main'
import dummyData from 'data'

const Home = () => {
  return (
    <Main>
      <Trending />
      <CardList title="Recommended for you" items={dummyData} />
    </Main>
  )
}

export default Home
