/** @jsxImportSource @emotion/react */
import { ReactComponent as BookMark } from '../../assets/icon/icon-bookmark-empty.svg'
import { useTheme } from '@emotion/react'

const Card = () => {
  const { colors } = useTheme()

  const style = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    background: `url(${require('../../assets/thumbnails/beyond-earth/trending/small.jpg')}) no-repeat`,
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '11rem',
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

  return (
    <div css={style}>
      <span css={BookMarkStyle}>
        <BookMark />
      </span>
      <div>
        <div css={{ opacity: 0.75, fontSize: '1.2rem' }}>2019．Movie．PG</div>
        <h3 css={{ fontWeight: 300, fontSize: '1.5rem' }}>Beyond Earth</h3>
      </div>
    </div>
  )
}

export default Card
