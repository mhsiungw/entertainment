import Trending from 'components/Trending'
import Recommend from '../components/Recommend'

import Main from '../layouts/Main'

const Home = () => {
  return (
    <Main>
      <Trending />
      <Recommend title="Recommended for you" />
    </Main>
  )
}

export default Home
