/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import Card from './Card'

const Index = ({ items, setData }) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const renderContent = () => {
    return items.map((item, i) => <Card setData={setData} key={i} item={item} />)
  }

  const cardListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(16rem, 1fr) )',
    [mq[1]]: {
      gridTemplateColumns: 'repeat( auto-fit, minmax(22rem, 1fr) )',
    },
    [mq[2]]: {
      gridTemplateColumns: 'repeat( auto-fit, minmax(26.8rem, 1fr) )',
    },
    gap: '1.5rem',
  }

  return (
    <div>
      <div css={cardListStyle}>{renderContent()}</div>
    </div>
  )
}

export default Index
