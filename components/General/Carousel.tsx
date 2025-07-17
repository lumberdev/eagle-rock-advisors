'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import clsx from 'clsx';

interface CarouselImage {
  colorImage: string;
  monochromeImage: string;
  heading: string;
}

interface CarouselProps {
  items: CarouselImage[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const images = items || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
  };

  if (!images?.length) return null;

  // fadeout the nonactive image fast
  const fadeOutDuration = 'duration-[500ms]';
  // animate the active image slow
  const animationDurationClass = 'duration-[900ms]';
  // animate the name slow with delay
  const NameDuration = 'duration-[600ms] delay-[600ms]';
  const slideChangeDuration = 7000;
  return (
    <div className="relative w-full">
      <Swiper
        ref={swiperRef}
        className="w-full"
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 10,
          modifier: 0,
          slideShadows: false,
        }}
        autoplay={{
          delay: slideChangeDuration,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: {
            spaceBetween: '20px',
          },
        }}
      >
        {images.map((item, index) => {
          const isActive = index === activeIndex % images.length;
          return (
            <SwiperSlide
              key={`${item.colorImage}-${index}`}
              className={clsx(
                'relative w-[35%] max-w-[300px] transition-transform',
                isActive ? animationDurationClass : fadeOutDuration,
                'lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[700px]'
              )}
            >
              <h6
                className={clsx(
                  'font-makarony absolute bottom-0 z-10 w-full text-white',
                  'from-eagle-navy bg-gradient-to-t to-transparent',
                  'mt-10 mb-0 pt-[25px] pb-2.5',
                  'px-[10px] text-base leading-[160%] lg:px-[25px] lg:text-[38px]',
                  isActive ? 'opacity-100 ' + NameDuration : 'opacity-0 ' + fadeOutDuration
                )}
              >
                {item?.heading}
              </h6>
              <div className="relative aspect-[1/1] overflow-hidden">
                {/* Color Image (shown when active) */}
                <div
                  className={`relative h-full w-full transition-opacity ${isActive ? animationDurationClass : fadeOutDuration} ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={item.colorImage}
                    alt=""
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>

                {/* Monochrome Image (shown when inactive) */}
                <div
                  className={`absolute inset-0 transition-opacity ${isActive ? fadeOutDuration : animationDurationClass} ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <Image
                    src={item.monochromeImage}
                    alt=""
                    fill
                    className={`object-cover transition-all ${isActive ? fadeOutDuration : animationDurationClass} ${
                      index === activeIndex % images.length ? 'scale-100' : 'scale-90'
                    }`}
                    priority={index < 3}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Progress Bar - Mobile Only */}
      <div className="relative mx-3 mt-[50px] h-[5px] w-[calc(100%-6rem)] px-5 pb-[10px] lg:hidden">
        <div className="bg-steel-blue absolute h-[1px] w-full opacity-25" />
        <div
          className={clsx(
            'bg-champagne-gold absolute mt-[-1px] h-[3px] opacity-100 transition-transform',
            fadeOutDuration
          )}
          style={{
            width: `${100 / images.length}%`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
