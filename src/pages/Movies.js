import React from 'react'
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import dummyData from 'data'

const Movies = () => {
  const filterData = dummyData.filter((m) => m.type === 'movie')

  return (
    <Main>
      <h2 css={{ marginBottom: '1.6rem' }}>Movies</h2>
      <CardList items={filterData} />
    </Main>
  )
}

export default Movies
