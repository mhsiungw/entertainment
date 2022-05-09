/** @jsxImportSource @emotion/react */
import { Fragment } from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default () => {
  const renderContent = () => {
    return Array.from({ length: 100 }).map((_, i) => (
      <SwiperSlide ket={i}>
        <Card />
      </SwiperSlide>
    ))
  }

  return (
    <div>
      <h2 css={{ marginBottom: '1.6rem' }}>Trending</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={7}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {renderContent()}
      </Swiper>
    </div>
  )
}
