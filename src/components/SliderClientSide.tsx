"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/bigSlider.scss";

type SliderItem = {
  button_url: string;
  image: string;
};

export default function SliderClientSide({
  sliders,
}: {
  sliders: SliderItem[];
}) {
  return (
    <section className="big-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1.34}
        loop={true}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        navigation
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.34,
          },
        }}
        className="big-slider__swiper"
      >
        {sliders.map((item, index) => (
          <SwiperSlide key={index} className="big-slider__slide">
            <a href={item.button_url} className="big-slider__link">
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                width={923}
                height={520}
                className="big-slider__image"
                priority={index === 0}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
