import background from "../../public/backgroud.png";

export default function Testimonials() {
  return (
    <div>
      <div
        className="w-full h-[360px] mt-20"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></div>
    </div>
  );
}
