/** @jsxImportSource @emotion/react */
import Carousel from 'components/Carousel'
import CardList from '../components/CardList'
import Main from '../layouts/Main'
import dummyData from 'data'
import { useState } from 'react'

const Home = () => {
  const trendingMovies = dummyData.filter((t) => {
    return t.hasOwnProperty('trending')
  })

  const [update, setUpdate] = useState({})

  return (
    <Main>
      <Carousel update={update} setUpdate={setUpdate} items={trendingMovies} />
      <CardList update={update} setUpdate={setUpdate} title="Recommended for you" items={dummyData} />
    </Main>
  )
}

export default Home
