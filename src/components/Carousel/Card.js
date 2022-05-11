/** @jsxImportSource @emotion/react */
import Bookmark from 'components/Bookmark'
import { useTheme } from '@emotion/react'

const Card = ({ item }) => {
  const { colors, useMedia } = useTheme()
  const mq = useMedia()

  const cardStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundImage: `url(${item.regular.small})`,
    [mq[1]]: {
      backgroundImage: `url(${item.regular.medium})`,
    },
    [mq[2]]: {
      backgroundImage: `url(${item.regular.large})`,
    },
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '14rem',
    [mq[1]]: {
      minHeight: '23rem',
    },
    borderRadius: '.8rem',
    padding: '0 .8rem 1.6rem 1.6rem',
  }

  const BookMarkStyle = {
    position: 'absolute',
    right: '.8rem',
    top: '.8rem',
    width: '32px',
    height: '32px',
    backgroundColor: colors.black,
    opacity: '0.5',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  const isBookMarked = () => {
    let StorageValue = JSON.parse(localStorage.getItem('movies'))
    return StorageValue.some((v) => v.name === item.name)
  }

  return (
    <div className="bookmark__container" data-movie={item.name} css={cardStyle}>
      <Bookmark isBookMarked={isBookMarked()} />
      <div>
        <div css={{ opacity: 0.75, fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>2019．Movie．PG</div>
        <h3 css={{ fontWeight: 300, fontSize: 'clamp(1.5rem, 3.9vw, 2.4rem)' }}>{item.name}</h3>
      </div>
    </div>
  )
}

export default Card
