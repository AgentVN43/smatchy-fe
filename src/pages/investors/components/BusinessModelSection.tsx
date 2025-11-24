import background from "/investors/background.png";
import line from "/line_bg.svg";
import Yay from "/Yay.png";
// import salesCommission from "/investors/sales-commission.png";
// import targeted from "/investors/targeted.png";
// import b2bOffers from "/investors/b2b-offers.png";
import { useInvestor } from "../../../hooks/useInvestor";
import { InvestorPopulateType } from "../../../services/strapi";
import Loading from "../../../components/Loading";
// const revenueStreams = [
//   {
//     icon: salesCommission,
//     title: "Sales Commission",
//     description:
//       "10–15% commission on paid activities organized by verified coaches and clubs.",
//     label: "Revenue Stream #1 · 45% (2018)",
//     color: "#FCA13B",
//     textColor: "#FCA13B",
//   },
//   {
//     icon: targeted,
//     title: "Targeted Advertising",
//     description:
//       "In-app gamification features in combination with targeted brand advertising. Target: 2.5M€ in 2018.",
//     label: "Revenue Stream #2 · 30% (2018)",
//     color: "#EF4444",
//     textColor: "#C73F3F",
//   },
//   {
//     icon: b2bOffers,
//     title: "B2B Offers",
//     description:
//       "Premium subscriptions for coaches, clubs, and corporate partners with advanced statistics and management tools.",
//     label: "Revenue Stream #3 · 25% (2018)",
//     color: "#0A4A60",
//     textColor: "#1A7D9C",
//   },
// ];

const gradientColors = [
  "linear-gradient(135deg, #FCA13BE0 0%, #FDBD764F 50%, #FCA13BA6 100%)",
  "linear-gradient(135deg, #C73F3FE0 0%, #D879794F 50%, #C73F3FA6 100%)",
  "linear-gradient(135deg, #1A7D9CE0 0%, #5FA4BA4F 50%, #1A7D9CA6 100%)",
];

const fontColors = ["#FCA13B", "#C73F3F", "#1A7D9C"];

export default function BusinessModelSection() {
  const { data, isLoading, error } = useInvestor(InvestorPopulateType.BASIC);
  if (isLoading) return <Loading />;
  if (error) return null;

  const {
    data: stats,
    isLoading: isLoadingStats,
    error: errorStats,
  } = useInvestor(InvestorPopulateType.STATS);

  if (isLoadingStats) return <Loading />;
  if (errorStats) return null;

  //console.log(data);

  const titleBlock = data?.blocks?.find(
    (block: any): block is any =>
      block.__component === "blocks.title" &&
      block.title === "Section: Business model"
  );

  const revenueStreams = stats?.blocks?.find(
    (block: any): block is any =>
      block.__component === "blocks.stats" && block.title === "Business Model"
  );

  //console.log(revenueStreams);

  return (
    <div className="relative z-30 w-full min-h-[400px] md:min-h-[500px] lg:min-h-[640px] mb-20 md:mb-28 lg:mb-40">
      <div className="relative z-30 container px-4 md:px-6 lg:px-8">
        <img
          src={line}
          alt=""
          className="absolute w-auto top-[-300px] md:-top-[350px] lg:top-[-390px] left-full scale-[5] md:scale-[7] lg:scale-[10] origin-top-left px-1.5 rotate-[46.67deg]"
        />
      </div>
      <div
        className="relative h-[300px] md:h-[400px] lg:h-[640px] z-20 inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></div>
      <div className="relative -mt-[300px] md:-mt-[400px] lg:-mt-[640px] z-30">
        <div
          className="container pt-8! md:pt-12! lg:pt-20! mb-3! md:mb-4! lg:mb-4!"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center">
            <div className=" inline-flex">
              <div className="relative text-center text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-6 md:mb-8 lg:mb-12">
                <div
                  dangerouslySetInnerHTML={{
                    __html: titleBlock.heading ? titleBlock.heading : "",
                  }}
                />
                <img
                  className="absolute -top-10 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20 w-8 md:w-12 lg:w-auto"
                  src={Yay}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="container grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-8 px-4 md:px-6 lg:px-8"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {revenueStreams.stats_icon.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 md:p-5 lg:p-6 border shadow-sm flex flex-col items-center"
              style={{ borderColor: "#0F262E33" }}
            >
              <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 mb-4 md:mb-6 lg:mb-8">
                <img
                  src={`https://strapi.annk.info${item.icon?.url}`}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#0F262E] mb-1 md:mb-1.5 lg:mb-2">
                {item.heading}
              </h3>
              <p className="flex-1 text-center text-xs md:text-sm lg:text-sm text-[#0F262E] leading-relaxed mb-3 md:mb-3.5 lg:mb-4">
                {item.description}
              </p>

              <span
                className="text-xs md:text-sm lg:text-sm font-semibold px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2 rounded-full"
                style={{
                  background: gradientColors[index % gradientColors.length],
                  color: fontColors[index % fontColors.length],
                }}
              >
                {item.sub_heading}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
