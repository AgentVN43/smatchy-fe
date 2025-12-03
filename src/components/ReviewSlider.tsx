import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import quotation from "/quotation.png";
import type { ReviewSliderProps } from "../pages/home/types";

export default function ReviewSlider({
  testimonials,
  swiperRef,
}: {
  testimonials: ReviewSliderProps[];
  swiperRef: React.RefObject<any>;
}) {
  return (
    <>
      <Swiper
        initialSlide={1}
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={230}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        // breakpoints={{
        //   640: {
        //     coverflowEffect: {
        //       rotate: 0,
        //       stretch: 0,
        //       depth: 150,
        //       modifier: 2.5,
        //       slideShadows: false,
        //     },
        //   },
        //   768: {
        //     coverflowEffect: {
        //       rotate: 0,
        //       stretch: 520,
        //       depth: 150,
        //       modifier: 2.5,
        //       slideShadows: false,
        //     },
        //   },
        //   1024: {
        //     coverflowEffect: {
        //       rotate: 0,
        //       stretch: 500,
        //       depth: 250,
        //       modifier: 2.5,
        //       slideShadows: false,
        //     },
        //   },
        //   1280: {
        //     coverflowEffect: {
        //       rotate: 0,
        //       stretch: 600,
        //       depth: 250,
        //       modifier: 2.5,
        //       slideShadows: false,
        //     },
        //   },
        //   1536: {
        //     coverflowEffect: {
        //       rotate: 0,
        //       stretch: 1000,
        //       depth: 250,
        //       modifier: 2.5,
        //       slideShadows: false,
        //     },
        //   },
        // }}
        className="mySwiper"
        ref={swiperRef}
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="w-[60%]!  md:w-[60%]! lg:w-[40%]!"
          >
            <div
              className="px-2 md:px-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="space-y-3 slide-item bg-[#E2F6F6] rounded-xl md:rounded-2xl p-4 md:p-8 text-center transition-all duration-300">
                <div className="relative">
                  <img className="w-4 md:w-10 " src={quotation} alt="" />
                  <p className="text-left text-[#0A4A60] font-semibold mb-3 md:mb-4 text-xs md:text-base lg:text-xl h-12 md:h-18 lg:h-21 pt-2 md:pt-4 line-clamp-3">
                    {testimonial.text}
                  </p>
                  {/* <img
                        className="absolute bottom-0 right-0 w-4 md:w-10 "
                        src={quotation2}
                        alt=""
                      /> */}
                </div>
                {/* <div className="flex md:flex-row items-center gap-2 md:gap-3">
                      <img
                        src={`${assetUrl}${testimonial.image}`}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-lg md:text-3xl flex justify-start">
                          {renderStars(testimonial.rating)}
                        </div>
                        <h3 className="text-[#0A4A60] text-start text-xs md:text-2xl lg:text-[32px] font-semibold">
                          - {testimonial.name}
                        </h3>
                      </div>
                    </div> */}
                <div className="border border-t-[#0A4A60]" />
                <h3 className="text-[#0F262E] text-start text-xs md:text-xl font-semibold">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
