import background from "/investors/background.png";
import line from "/line_bg.svg";
import Yay from "/Yay.png";
import salesCommission from "/investors/sales-commission.png";
import targeted from "/investors/targeted.png";
import b2bOffers from "/investors/b2b-offers.png";
const revenueStreams = [
  {
    icon: salesCommission,
    title: "Sales Commission",
    description:
      "10–15% commission on paid activities organized by verified coaches and clubs.",
    label: "Revenue Stream #1 · 45% (2018)",
    color: "#FCA13B",
    textColor: "#FCA13B",
  },
  {
    icon: targeted,
    title: "Targeted Advertising",
    description:
      "In-app gamification features in combination with targeted brand advertising. Target: 2.5M€ in 2018.",
    label: "Revenue Stream #2 · 30% (2018)",
    color: "#EF4444",
    textColor: "#C73F3F",
  },
  {
    icon: b2bOffers,
    title: "B2B Offers",
    description:
      "Premium subscriptions for coaches, clubs, and corporate partners with advanced statistics and management tools.",
    label: "Revenue Stream #3 · 25% (2018)",
    color: "#0A4A60",
    textColor: "#1A7D9C",
  },
];
export default function BusinessModelSection() {
  return (
    <div className="relative z-30 w-full h-[640px] mb-40">
      <div className="relative z-30 container">
        <img
          src={line}
          alt=""
          className="absolute w-auto top-[-390px] left-full scale-[10] origin-top-left px-1.5 rotate-[46.67deg]"
        />
      </div>
      <div
        className="relative h-[640px] z-20 inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container pt-20!">
          <div className="flex flex-col items-center">
            <div className=" inline-flex">
              <h2 className="relative text-center text-5xl text-white font-bold mb-12">
                <span className="text-[#FCA13B]">BUSINESS </span>MODEL
                <img className="absolute -top-20 -right-20 " src={Yay} alt="" />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-[440px] z-30">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {revenueStreams.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border shadow-sm flex flex-col items-center"
              style={{ borderColor: "#0F262E33" }}
            >
              <div className="w-16 h-16 mb-8">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-[#0F262E] mb-2">
                {item.title}
              </h3>
              <p className="flex-1 text-center text-sm text-[#0F262E] leading-relaxed mb-4">
                {item.description}
              </p>

              <span
                className="text-sm font-semibold px-6 py-2 rounded-full"
                style={{
                  backgroundColor: item.color,
                  color: "#FFFFFF",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
