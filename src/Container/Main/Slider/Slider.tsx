import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import './Slider.scss'

type Props = {}
const Slider = (props: Props) => {
    return (
        <Swiper
            className="swiper"
            navigation={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className="slide">
                <img src="Slides/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="slide">
                <img src="Slides/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="slide">
                <img src="Slides/3.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}
export default Slider
