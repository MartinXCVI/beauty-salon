import type { ImageCarouselProps } from '@interfaces/ICarouselImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import type { FunctionComponent } from 'react';


const BannerSlider: FunctionComponent<ImageCarouselProps> = ({ images }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden mx-auto">
      <Swiper
        className='home-banner-swiper min-h-screen'
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
        aria-live='polite'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover brightness-[.85] transition-transform
                duration-700 ease-in-out scale-100 hover:scale-105 cursor-grab"
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button
          className="swiper-button-prev absolute left-4 top-1/2 z-20 -translate-y-1/2 
          bg-white/20 hover:bg-white/40 text-white p-5 backdrop-blur-md 
          shadow-md transition-all duration-300"
          aria-label="Previous Slide"
        ></button>
        <button
          className="swiper-button-next absolute right-4 top-1/2 z-20 -translate-y-1/2 
          bg-white/20 hover:bg-white/40 text-white p-5 backdrop-blur-md 
          shadow-md transition-all duration-300"
          aria-label="Next Slide"
        ></button>
      </Swiper>
    </div>
  );
}

export default BannerSlider