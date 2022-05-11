import Trending from 'components/Trending'
import CardList from '../components/CardList'
import Main from '../layouts/Main'
import dummyData from 'data'

const Home = () => {
  return (
    <Main>
      <h2 css={{ marginBottom: '1.6rem' }}>Recommended for you</h2>
      <Trending />
      <CardList items={dummyData} />
    </Main>
  )
}

export default Home
