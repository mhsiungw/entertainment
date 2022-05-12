/** @jsxImportSource @emotion/react */
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import dummyData from 'assets/data'

const Search = () => {
  const searchTerm = localStorage.getItem('searchTerm')
  const filterData = dummyData.filter((data) => {
    const dataToUpperCase = data.name.toUpperCase()
    const termToUpperCase = searchTerm.toUpperCase()
    return dataToUpperCase.includes(termToUpperCase)
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
