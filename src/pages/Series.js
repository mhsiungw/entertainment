import React from 'react'
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import dummyData from 'data'

const Series = () => {
  const filterData = dummyData.filter((m) => m.type === 'series')

  return (
    <Main>
      <h2 css={{ marginBottom: '1.6rem' }}>Series</h2>
      <CardList items={filterData} />
    </Main>
  )
}

export default Series
