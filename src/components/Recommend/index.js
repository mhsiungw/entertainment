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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [mq[0]]: {
      justifyContent: 'unset',
      gap: '1.5rem 2rem',
    },
    gap: '1.5rem 0',
  }

  return (
    <div>
      <h2 css={{ marginBottom: '1.6rem' }}>Recommended for you</h2>
      <div css={cardListStype}>{renderContent()}</div>
    </div>
  )
}

export default Index
