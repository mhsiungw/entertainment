import React from 'react'
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import { useEffect, useState } from 'react'

const BookMark = () => {
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('movies')))
  }, [])
  const [data, setData] = useState([])

  if (!data.length)
    return (
      <Main>
        <h2>Bookmarked Movies</h2>
      </Main>
    )

  return (
    <Main>
      <h2 css={{ marginBottom: '1.6rem' }}>Bookmarked Movies</h2>
      <CardList title="Bookmarked Movies" items={data} setData={setData} />
    </Main>
  )
}

export default BookMark
