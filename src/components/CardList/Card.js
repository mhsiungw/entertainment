/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import Bookmark from 'components/Bookmark'

const Card = ({ item, setData }) => {
  const { useMedia, colors } = useTheme()
  const mq = useMedia()

  const BackGroundStyle = {
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
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

  const isBookMarked = () => {
    let StorageValue = JSON.parse(localStorage.getItem('movies'))
    console.log(StorageValue.some((v) => v.name === item.name))
    return StorageValue.some((v) => v.name === item.name)
  }

  return (
    <div>
      <div className="bookmark__container" data-movie={item.name} css={BackGroundStyle}>
        <Bookmark setData={setData} isBookMarked={isBookMarked()} />
      </div>
      <div>
        <div css={{ opacity: 0.75, fontSize: '1.2rem' }}>2019．Movie．PG</div>
        <h3 css={{ fontWeight: 300, fontSize: '1.5rem' }}>{item.name}</h3>
      </div>
    </div>
  )
}
export default Card
