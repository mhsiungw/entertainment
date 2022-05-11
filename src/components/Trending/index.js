/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import dummyData from 'data'

export default () => {
  const [movies, setMovies] = useState(dummyData)
  const renderContent = () => {
    return movies.map((movie, i) => (
      <SwiperSlide key={i}>
        <Card movie={movie} />
      </SwiperSlide>
    ))
  }

  return (
    <div>
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
            slidesPerView: 4,
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
