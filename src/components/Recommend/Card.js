/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import { ReactComponent as BookMark } from '../../assets/icon/icon-bookmark-empty.svg'

const Card = () => {
  const { useMedia, colors } = useTheme()
  const mq = useMedia()

  const BackGroundStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    background: `url(${require('../../assets/thumbnails/beyond-earth/trending/small.jpg')}) no-repeat`,
    backgroundSize: 'cover',
    borderRadius: '.8rem',
    padding: '0 .8rem 1.6rem 1.6rem',
    width: '100%',
    height: '11rem',
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
    <div>
      <div css={BackGroundStyle}>
        <span css={BookMarkStyle}>
          <BookMark />
        </span>
      </div>
      <div>
        <div css={{ opacity: 0.75, fontSize: '1.2rem' }}>2019．Movie．PG</div>
        <h3 css={{ fontWeight: 300, fontSize: '1.5rem' }}>Beyond Earth</h3>
      </div>
    </div>
  )
}
export default Card
