import background from "/background.png";
import line from "/line_bg.svg";
import worldmap from "/world-map.svg";
import Yay from "/Yay.png";
// import avt1 from "/avt1.png";
// import avt2 from "/avt2.png";
import Loading from "../../../components/Loading";
import { useTestimonials } from "../../../hooks/useTestimonials";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";
import ReviewSlider from "../../../components/ReviewSlider";
// const testimonials1 = [
//   {
//     id: 1,
//     name: "Thomas Nguyen",
//     text: "J'adore cette app, elle me motive à faire du sport tous les jours.",
//     rating: 5,
//     image: avt1,
//   },
//   {
//     id: 2,
//     name: "Robin Delezenne",
//     text: "Super application avec beaucoup de sport. Trop hâte de rencontrer des cyclistes !",
//     rating: 5,
//     image: avt2,
//   },
//   {
//     id: 3,
//     name: "Alex Martin",
//     text: "Une expérience incroyable, j'ai trouvé plein de partenaires sportifs.",
//     rating: 5,
//     image: avt1,
//   },
// ];

// const renderStars = (rating: number) => {
//   return [...Array(rating)].map((_, index) => (
//     <span key={index} className="text-yellow-400">
//       ★
//     </span>
//   ));
// };

export default function Testimonials() {
  const { data, isLoading, error } = useTestimonials("home");
  const swiperRef = useRef<any>(null);
  // const assetUrl = import.meta.env.VITE_STRAPI_ASSET_URL;
  if (isLoading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const testimonials = data?.map((s) => ({
    id: s.id,
    name: s.author,
    text: s.content,
    rating: 5, // default
    image: s.avatar?.url, // "/uploads/avatar1_d95a6afcff.png"
  }));

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative container z-20">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto -top-20 left-[42%] scale-[3] md:scale-[5] lg:scale-[7.4] origin-top-left px-1.5 rotate-[25.67deg]"
        />
      </div>
      <div className="">
        <div
          className="relative w-full h-auto md:h-[360px] z-30 bg-cover bg-bottom py-8 md:py-16"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div
            className="container flex justify-center items-center py-8! md:py-16!"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button
              className="cursor-pointer absolute left-0 top-1/2 z-10 transform -translate-y-1/2 text-[#FCA13B] px-4 py-2 rounded-full"
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
            >
              <BsArrowLeftShort className="text-2xl md:text-6xl" />
            </button>
            <h2 className="relative inline-flex text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center px-4">
              YOUR
              <span className="text-[#FCA13B] ml-1 md:ml-2"> TESTIMONIALS</span>
              <img
                className="absolute -top-8 -right-4 md:-top-14 md:-right-10 lg:-top-24 lg:-right-16 w-12 md:w-20 lg:w-auto"
                src={Yay}
                alt=""
              />
            </h2>
            <button
              className="cursor-pointer absolute right-0 top-1/2 z-10 transform -translate-y-1/2 text-[#FCA13B] px-4 py-2 rounded-full"
              onClick={() => swiperRef.current?.swiper?.slideNext()}
            >
              <BsArrowRightShort className="text-2xl md:text-6xl" />
            </button>
          </div>

          <ReviewSlider testimonials={testimonials!} swiperRef={swiperRef} />
        </div>
      </div>

      <div
        className="container pb-28! md:py-20! lg:py-18! relative flex justify-center z-30"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img className="w-full h-auto" src={worldmap} alt="" />
      </div>
    </div>
  );
}
