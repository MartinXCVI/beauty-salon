import type { ImageCarouselProps } from '@interfaces/ICarouselImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import type { FunctionComponent } from 'react';


const BannerSlider: FunctionComponent<ImageCarouselProps> = ({ images }) => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden mx-auto">
      <Swiper
      className='home-banner-swiper h-[90vh]'
        modules={[Navigation, Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover opacity-90 cursor-grab"
            />
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button
          className="swiper-button-prev text-black absolute left-4 top-1/2 z-10 -translate-y-1/2"
          aria-label="Previous Slide"
        ></button>
        <button
          className="swiper-button-next text-black absolute right-4 top-1/2 z-10 -translate-y-1/2"
          aria-label="Next Slide"
        ></button>
      </Swiper>
    </div>
  );
}

export default BannerSlider