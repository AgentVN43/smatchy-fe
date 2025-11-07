import { useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import look1 from "/1.png";
import look2 from "/2.png";

const slides = [
  { id: 1, image: look1 },
  { id: 2, image: look2 },
];

export default function Slider() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative w-full z-50 h-full">
      <Swiper
        spaceBetween={0}
        centeredSlides
        className="w-full overflow-hidden"
        loop
        ref={swiperRef}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img src={slide.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls */}
      {/* Nút điều hướng trái */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full text-[#F49F3F] transition"
        onClick={() => swiperRef.current?.swiper?.slidePrev()}
      >
        <BsArrowLeftShort size={60} />
      </button>

      {/* Nút điều hướng phải */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full text-[#F49F3F] transition"
        onClick={() => swiperRef.current?.swiper?.slideNext()}
      >
        <BsArrowRightShort size={60} />
      </button>
    </div>
  );
}
