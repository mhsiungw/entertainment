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
    gridTemplateColumns: 'repeat( auto-fit, minmax(12rem, 16.3rem) )',
    [mq[1]]: {
      gridTemplateColumns: 'repeat( auto-fit, minmax(22rem, 23rem) )',
    },
    [mq[2]]: {
      gridTemplateColumns: 'repeat( auto-fit, minmax(23rem, 29rem) )',
    },
    gap: '1.5rem',
  }

  return (
    <div
      css={{
        margin: '0 1.6rem 0 1.6rem',
        [mq[1]]: { margin: '0 2.4rem 0 2.4rem' },
        [mq[2]]: { marginRight: '3.2rem' },
      }}
    >
      <h1 css={{ marginBottom: '1.6rem' }}>{title}</h1>
      <div css={cardListStyle}>{renderContent()}</div>
    </div>
  )
}

export default Index
