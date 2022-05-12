/** @jsxImportSource @emotion/react */
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTheme } from '@emotion/react'
import 'swiper/css'

export default ({ items, update, setUpdate }) => {
  const { useMedia } = useTheme()
  const mq = useMedia()

  const renderContent = () => {
    return items.map((movie, i) => (
      <SwiperSlide key={i}>
        <Card update={update} setUpdate={setUpdate} item={movie} />
      </SwiperSlide>
    ))
  }

  return (
    <div css={{ marginLeft: '1.6rem', [mq[1]]: { marginLeft: '2.4rem' } }}>
      <h1 css={{ marginBottom: '1.6rem' }}>Trending</h1>
      <Swiper
        spaceBetween={16}
        slidesPerView={2.2}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          2200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        loop={true}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        {renderContent()}
      </Swiper>
    </div>
  )
}
