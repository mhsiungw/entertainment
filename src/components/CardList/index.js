/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import Card from './Card'

const Index = ({ title, items }) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const renderContent = () => {
    return items.map((item, i) => <Card key={i} item={item} />)
  }

  const cardListStyle = {
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
      <div css={cardListStyle}>{renderContent()}</div>
    </div>
  )
}

export default Index
