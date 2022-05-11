/** @jsxImportSource @emotion/react */
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default ({ items, update, setUpdate }) => {
  const renderContent = () => {
    return items.map((movie, i) => (
      <SwiperSlide key={i}>
        <Card update={update} setUpdate={setUpdate} item={movie} />
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
