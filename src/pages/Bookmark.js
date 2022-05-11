/** @jsxImportSource @emotion/react */
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
        <h1>You haven't bookmarked any thing yet.</h1>
      </Main>
    )

  return (
    <Main>
      <CardList title="Bookmarked Movies" items={data} setData={setData} />
    </Main>
  )
}

export default BookMark
