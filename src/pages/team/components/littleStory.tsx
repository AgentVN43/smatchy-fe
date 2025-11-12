import Yay from "/Yay3.png";
import backgroundImg from "/team/background-img.png";
import CEO from "/team/CEO-img.png";

export default function LittleStory() {
  return (
    <div className="container flex flex-col items-center relative z-50 mt-10!">
      <div className=" inline-flex">
        <h2 className="relative text-center text-5xl text-[#0A4A60] font-bold mb-12">
          THE LITTLE <span className="text-[#FCA13B] ml-2">STORY</span>
          <img className="absolute -top-20 -right-20 " src={Yay} alt="" />
        </h2>
      </div>
      <div className="flex justify-end items-end gap-10 mb-64">
        <div className="flex justify-center items-center w-3/5 bg-[#E2F6F6] rounded-tl-[50px] rounded-br-[50px] rounded-tr-[150px] rounded-bl-[150px]">
          <div className="z-10 px-24 py-12 rounded-lg text-xl font-medium text-[#0A4A60] space-y-4">
            <p>
              Pendant la période COVID, Maude demande à sa communauté Les
              Bornées pourquoi ils font du sport avec eux. Une question très
              simple qui va être à la naissance du projet Smatchy, car la
              réponse la plus donnée par ses membres est d’une simplicité
              enfantine :
              <span className="text-[#FCA13B]">
                {" "}
                « Je n’aime pas faire du sport seul(e)«{" "}
              </span>
            </p>
            <p>
              Piquée par la curiosité et par cette idée, Maude fait des
              recherches et
              <span className="text-[#FCA13B]">
                {" "}
                ne trouve pas d’application qui réponde vraiment à ce besoin.{" "}
              </span>
              C’est là qu’est née l’idée de Smatchy.
            </p>
            <p>
              Il aura fallu deux années de travail et de développement pour
              sortir la première version de l’application en
              <span className="text-[#FCA13B]"> Décembre 2023.</span>
            </p>
          </div>
        </div>
        <div className="relative w-2/5">
          <img src={backgroundImg} alt="Background" />
          <img
            src={CEO}
            alt="CEO"
            className="absolute bottom-0 z-10 object-contain origin-bottom"
          />
        </div>
      </div>
    </div>
  );
}
