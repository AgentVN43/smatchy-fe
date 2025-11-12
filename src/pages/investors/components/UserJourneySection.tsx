import { FaArrowRightLong } from "react-icons/fa6";
import Yay3 from "/Yay3.png";
const steps = [
  {
    number: "01",
    label: "Step 1",
    title: "Sign Up & Profile",
    description: "Create profile with skill level, location, preferences",
  },
  {
    number: "02",
    label: "Step 2",
    title: "Get Matched",
    description: "Find perfect teammates & opponents nearby",
  },
  {
    number: "03",
    label: "Step 3",
    title: "Book & Play",
    description: "Reserve venues, pay through app, show up and play",
  },
  {
    number: "04",
    label: "Step 4",
    title: "Earn & Grow",
    description: "Coaches monetize sessions, athletes earn rewards",
  },
];

const UserJourneySection = () => {
  return (
    <div className="relative z-30 mb-28">
      <div className="container">
        <div className="flex flex-col items-center mt-20">
          <div className=" inline-flex">
            <h2 className="relative text-center text-5xl text-[#0A4A60] font-bold mb-8">
              THE USER <span className="text-[#FCA13B]">JOURNEY</span>
              <img className="absolute -top-20 -right-20 " src={Yay3} alt="" />
            </h2>
          </div>

          <div className="mb-8">
            <button className="flex justify-center items-center gap-2 text-white rounded-full px-4 py-2 font-semibold bg-[#FCA13B] transition">
              Get the App <FaArrowRightLong />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="text-7xl font-medium text-[#A2ABAF] mb-2">
                  {step.number}
                </div>
                <div className="bg-[#E2F6F6] rounded-xl p-6 flex gap-4 items-start shadow-sm">
                  <div>
                    <div className="text-sm inline-flex font-semibold py-1 px-6 rounded-2xl bg-[#D9D9D9A8] bg-linear-to-r from-[#0A4A60]/.88 via-[#7F9EA6]/31 to-[#0A4A60]/65 mb-6">
                      {step.label}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0A4A60] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#0F262E] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserJourneySection;
