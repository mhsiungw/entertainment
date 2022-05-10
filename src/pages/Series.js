import React from 'react'
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import dummyData from 'data'

const Series = () => {
  const filterDate = dummyData.filter((m) => m.type === 'series')

  return (
    <Main>
      <CardList title="Series" items={filterDate} />
    </Main>
  )
}

export default Series
