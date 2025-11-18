import GoEntrepreneurs from "/Go_Entrepreneurs.png";
import Choiseul2 from "/Choiseul 02.png";
import Choiseil3 from "/Choiseul 3.png";
import Choiseil4 from "/Choiseul 4.png";

export default function AwardsSection() {
  const awards = [
    { id: 1, image: GoEntrepreneurs, alt: "Go Entrepreneurs Award" },
    { id: 2, image: Choiseul2, alt: "Choiseul 100 Award 2022" },
    { id: 3, image: Choiseil3, alt: "Choiseul 100 Award 2023" },
    { id: 4, image: Choiseil4, alt: "Choiseul 100 Award 2024" },
  ];
  return (
    <div>
      <div className="container my-12! md:my-20! px-4! md:px-6! lg:px-8!">
        <div className="grid grid-cols-4 justify-center items-end gap-2 md:gap-4">
          {awards.map((award) => (
            <img
              key={award.id}
              src={award.image}
              alt={award.alt}
              className="h-auto w-auto z-50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
