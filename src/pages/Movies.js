/** @jsxImportSource @emotion/react */
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import dummyData from 'assets/data'

const Movies = () => {
  const filterData = dummyData.filter((m) => m.type === 'Movie')

  return (
    <Main>
      <CardList title="Movies" items={filterData} />
    </Main>
  )
}

export default Movies
