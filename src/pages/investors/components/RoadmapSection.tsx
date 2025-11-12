import Yay3 from "/Yay3.png"; // thay đường dẫn hình ảnh của bạn

const roadmap = [
  {
    quarter: "Q1",
    title: "Fundraising & Monetization",
    items: [
      "Fundraising TMC for 20% equity to accelerate growth",
      "Launch of commissions and advertising model",
    ],
  },
  {
    quarter: "Q2",
    title: "B2B & Gamification Launch",
    items: [
      "Deployment of B2B offers for coaches and clubs",
      "Introduction of gamification and rewards features",
    ],
  },
  {
    quarter: "Q3",
    title: "Geographic Expansion",
    items: [
      "Deployment to new countries after successful product validation",
      "Local adaptation and partnerships",
    ],
  },
  {
    quarter: "Q4",
    title: "Strategic Partnerships",
    items: [
      "Establish alliances with major sports and lifestyle brands",
      "Co-marketing and sponsorship programs",
    ],
  },
];
export default function RoadmapSection() {
  return (
    <div className="container relative z-30 pb-16!">
      {/* Tiêu đề */}
      <div className="flex flex-col items-center">
        <div className="inline-flex">
          <h2 className="relative text-center text-5xl text-[#0A4A60] font-bold mb-8">
            12-24 MONTH <span className="text-[#FCA13B]">ROADMAP</span>
            <img
              className="absolute -top-10 -right-10 w-16 h-16"
              src={Yay3}
              alt="decor"
            />
          </h2>
        </div>
      </div>

      {/* Các khối Q1–Q4 */}
      <div className="bg-[#E2F6F6] p-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {roadmap.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between text-white gap-3 pr-5 ${
                index < roadmap.length - 1
                  ? "md:border-r md:border-[#0A4A6026]"
                  : ""
              }`}
            >
              <div className="h-16 w-16 flex items-center justify-center text-xl text-white font-bold bg-[#0A4A60] rounded-full">
                {step.quarter}
              </div>
              <h3 className="text-xl font-bold text-[#0A4A60]">{step.title}</h3>
              <ul className="list-disc marker:text-xl marker:text-[#0A4A60] pl-5 text-sm text-[#0F262E] space-y-1">
                {step.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
