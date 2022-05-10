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
      <h2 css={{ marginBottom: '1.6rem' }}>Trending</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          1100: {
            slidesPerView: 3,
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
