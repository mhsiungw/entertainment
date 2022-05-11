/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import Card from './Card'

const Index = ({ title, items, setData, update, setUpdate }) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const renderContent = () => {
    return items.map((item, i) => (
      <Card update={update} setUpdate={setUpdate} setData={setData} key={item.name} item={item} />
    ))
  }

  const cardListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(16rem, 1fr) )',
    [mq[1]]: {
      gridTemplateColumns: 'repeat( auto-fit, minmax(22rem, 1fr) )',
    },
    [mq[2]]: {
      gridTemplateColumns: 'repeat( auto-fit, minmax(26.8rem, 3rem) )',
    },
    gap: '1.5rem',
  }

  return (
    <div>
      <h1 css={{ marginBottom: '1.6rem' }}>{title}</h1>
      <div css={cardListStyle}>{renderContent()}</div>
    </div>
  )
}

export default Index
