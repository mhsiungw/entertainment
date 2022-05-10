/** @jsxImportSource @emotion/react */
import Card from '../Recommend/Card'
import { useTheme } from '@emotion/react'

const Index = () => {
  const { useMedia } = useTheme()
  const mq = useMedia()
  const renderContent = () => {
    return Array.from({ length: 100 }).map((_) => <Card />)
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
      <h2 css={{ marginBottom: '1.6rem' }}>Recommended for you</h2>
      <div css={cardListStype}>{renderContent()}</div>
    </div>
  )
}

export default Index
