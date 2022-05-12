/** @jsxImportSource @emotion/react */
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import dummyData from 'assets/data'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Search = () => {
  const location = useLocation()

  useEffect(() => {
    setSearchTerm(localStorage.getItem('searchTerm'))
  }, [location])

  const [searchTerm, setSearchTerm] = useState('')

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
