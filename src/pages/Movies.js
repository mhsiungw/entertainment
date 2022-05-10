import React from 'react'
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import dummyData from 'data'

const Movies = () => {
  const filterDate = dummyData.filter((m) => m.type === 'movie')

  return (
    <Main>
      <CardList title="Movies" items={filterDate} />
    </Main>
  )
}

export default Movies
