//import heroBanner from "/hero-banner.png";
//import image7 from "/image 7.png";
import Yay from "/Yay.png";
import AppStoreImage from "/App_Store_Image.png";
import image3 from "/image 3.png";
import { useHome } from "../../../hooks/useHome";
export default function HeroBanner() {
  const { isLoading, error, hero } = useHome();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const bg = hero?.background_image.url;
  const main_img = hero?.main_image.url;

  console.log(bg)
  return (
    <>
      <div
        className="w-full pt-20 z-50"
        style={{
          backgroundImage: `url(https://strapi.annk.info${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container z-50 mx-auto">
          <div className="flex gap-20">
            <img
              className="z-50"
              src={`https://strapi.annk.info${main_img}`}
              //src={image7}
              alt=""
            />
            <div className="flex flex-col items-center gap-10">
              <div className="relative font-bold text-5xl leading-[55px] text-white text-center mt-32">
                <img className="absolute -top-24 -right-8" src={Yay} alt="" />
                <div dangerouslySetInnerHTML={{ __html: hero?.heading ? hero.heading : "" }} />
              </div>
              <div
                className="font-medium text-2xl text-white text-center"
                dangerouslySetInnerHTML={{ __html: hero?.sub_heading ? hero.sub_heading : "" }}
              />
              <div className="flex gap-4">
                <img src={AppStoreImage} alt="" />
                <img src={image3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[539px] bg-[#0A4A60]"></div>
      <div className="relative h-[145px] bg-[#0A4A60]"></div> */}
    </>
  );
}
