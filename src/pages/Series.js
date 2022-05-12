/** @jsxImportSource @emotion/react */
import Main from 'layouts/Main'
import CardList from '../components/CardList'
import dummyData from 'assets/data'

const Series = () => {
  const filterData = dummyData.filter((m) => m.type === 'series')

  return (
    <Main>
      <CardList title="Series" items={filterData} />
    </Main>
  )
}

export default Series
