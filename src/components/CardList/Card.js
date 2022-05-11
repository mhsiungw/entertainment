/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import { useEffect, useState } from 'react'
import Bookmark from 'components/Bookmark'

const Card = ({ item, setData, update, setUpdate }) => {
  const { useMedia } = useTheme()
  const mq = useMedia()
  const [isBookMarked, setIsBookmared] = useState('')

  useEffect(() => {
    let storageValue = JSON.parse(localStorage.getItem('movies'))
    if (!Array.isArray(storageValue)) return
    setIsBookmared(storageValue.some((v) => v.name === item.name))
  }, [update])

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

  return (
    <div>
      <div className="bookmark__container" data-movie={item.name} css={BackGroundStyle}>
        <Bookmark setUpdate={setUpdate} setData={setData} isBookMarked={isBookMarked} />
      </div>
      <div>
        <div css={{ opacity: 0.75, fontSize: 'clamp(1.1rem, 2.9vw, 1.3rem)' }}>2019．Movie．PG</div>
        <h3 css={{ fontWeight: 300, fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)' }}>{item.name}</h3>
      </div>
    </div>
  )
}
export default Card
