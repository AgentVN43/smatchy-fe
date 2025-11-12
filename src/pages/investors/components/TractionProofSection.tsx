import background from "/investors/background.png";
import user from "/investors/user.png";
import growth from "/investors/growth.png";
import star from "/investors/star.png";
import award from "/investors/award.png";
import Yay from "/Yay.png";
const tractionData = [
  {
    icon: user,
    title: "10,000+",
    subtitle: "Active users",
  },
  {
    icon: growth,
    title: "+10%",
    subtitle: "Organic growth",
  },
  {
    icon: star,
    title: "4.5/5",
    subtitle: "User rating",
  },
  {
    icon: award,
    title: "25,000+",
    subtitle: "Activities created",
  },
];

const tractionBoxes = [
  {
    title: "Early Adopters",
    text: "+800 people in the first month / 95% retention rate for the app on stores",
  },
  {
    title: "Brand Partnerships",
    text: "Collaborating with communities such as Les Bonnes, event organizers and brands.",
  },
  {
    title: "High Engagement",
    text: "45K views per month on social networks in October 2023",
  },
];
const TractionProofSection = () => {
  return (
    <div className="relative z-30 w-full h-[640px]">
      <div
        className="absolute z-30 inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container py-16!">
          <div className="flex flex-col items-center">
            <div className=" inline-flex">
              <h2 className="relative text-center text-5xl text-white font-bold mb-12">
                <span className="text-[#FCA13B]">TRACTION </span>& PROOF
                <img className="absolute -top-20 -right-20 " src={Yay} alt="" />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {tractionData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 text-center text-white"
              >
                <div className="w-16 h-16 mx-auto">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-5xl font-bold">{item.title}</h3>
                <p className="text-[#DADEDF] leading-relaxed whitespace-pre-line">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* 3 box mô tả bên dưới */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tractionBoxes.map((item, i) => (
              <div
                key={i}
                className="bg-[#FFFFFFC4] border border-[#0A4A605C] text-[#0F262E] rounded-2xl p-6 shadow-md"
              >
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionProofSection;
