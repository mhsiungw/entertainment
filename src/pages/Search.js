/** @jsxImportSource @emotion/react */
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import dummyData from 'data'

const Search = () => {
  const searchTerm = localStorage.getItem('searchTerm')
  const filterData = dummyData.filter((m) => {
    const o = m.name.toUpperCase()
    const x = searchTerm.toUpperCase()
    return o.includes(x)
  })

  if (!filterData.length)
    return (
      <Main>
        <CardList title="No movies found" items={filterData} />
      </Main>
    )
  return (
    <Main>
      <CardList title="Found results" items={filterData} />
    </Main>
  )
}

export default Search
