/** @jsxImportSource @emotion/react */
import { Fragment } from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default () => {
  const renderContent = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <SwiperSlide key={i}>
        <Card />
      </SwiperSlide>
    ))
  }

  return (
    <div>
      <h2 css={{ marginBottom: '1.6rem' }}>Trending</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          555: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          655: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          755: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
          1300: {
            slidesPerView: 7,
            spaceBetween: 16,
          },
        }}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {renderContent()}
      </Swiper>
    </div>
  )
}
