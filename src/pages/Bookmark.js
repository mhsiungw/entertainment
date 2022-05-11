/** @jsxImportSource @emotion/react */
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import { useEffect, useState } from 'react'

const BookMark = () => {
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('movies')))
  }, [])
  const [data, setData] = useState([])

  if (!data)
    return (
      <Main>
        <div>You haven't bookmarked any thing yet.</div>
      </Main>
    )

  return (
    <Main>
      <CardList title="Series" items={data} setData={setData} />
    </Main>
  )
}

export default BookMark
