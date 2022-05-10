import Trending from 'components/Trending'
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
