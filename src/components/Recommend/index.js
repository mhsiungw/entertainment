/** @jsxImportSource @emotion/react */
import Card from '../Recommend/Card'
import { useTheme } from '@emotion/react'
import { useState } from 'react'
import dummyData from 'data'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Index = ({ title }) => {
  useEffect(() => {
    switch (pathname) {
      case '/':
        break
      case '/movies':
        setMovies(movies.filter((m) => m.type === 'movie'))
        break
      case '/series':
        setMovies(movies.filter((m) => m.type === 'series'))
        break
      default:
        break
    }
  }, [])
  const { pathname } = useLocation()
  const [movies, setMovies] = useState(dummyData)
  const { useMedia } = useTheme()
  const mq = useMedia()

  const renderContent = () => {
    return movies.map((movie, i) => <Card key={i} movie={movie} />)
  }

  const cardListStype = {
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(16rem, 1fr) )',
    [mq[0]]: {
      gridTemplateColumns: 'repeat( auto-fit, minmax(20rem, 1fr) )',
    },
    [mq[1]]: {
      gridTemplateColumns: 'repeat( auto-fit, minmax(22rem, 1fr) )',
    },
    [mq[2]]: {
      gridTemplateColumns: 'repeat( auto-fit, minmax(28rem, 1fr) )',
    },
    gap: '1.5rem',
  }

  return (
    <div>
      <h2 css={{ marginBottom: '1.6rem' }}>{title}</h2>
      <div css={cardListStype}>{renderContent()}</div>
    </div>
  )
}

export default Index
