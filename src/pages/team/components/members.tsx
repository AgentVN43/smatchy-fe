import TeamList from "./teamList";
import background from "/background.png";
import line from "/line_bg.svg";
const teamMembers = [
  {
    name: "Philippe Nguyen",
    title: "Lead Partner – Amagumo Labs",
    avatar: "/team/lead-partner.png",
    bio: "Associé dans le projet depuis ses débuts, Johan est le chef d'orchestre derrière toute l'interface technique de l'app. Ses compétences en tant que développeur Full Stack depuis 7 ans font de lui un maillon essentiel dans la chaine de développement. Passionné de sport, triathlète accompli qui enchaine les records sur ses courses, il apporte une passion et du dynamisme à toute l'équipe.",
    social: {
      facebook: "https://facebook.com/philippe.nguyen",
      instagram: "https://instagram.com/philippe.nguyen",
      linkedin: "https://linkedin.com/in/philippe-nguyen",
    },
  },
  {
    name: "Maude Baudier",
    title: "CEO & Fondatrice",
    avatar: "team/CEO.png",
    bio: "C'est celle que l'on voit le plus ! Elle s’occupe de tout le monde et s'assure que le projet avance comme sur des roulettes ! La comm’ et le marketing n'ont pas de secret pour elle. Après avoir travaillé dans le monde du luxe, puis des startups digitales, elle s'est lancée en tant qu'entrepreneuse et a monté deux projets : Print Your Race et Les Bornées. Triathlète, sportive passionnée, on peut la retrouver dans les montagnes annéciennes sur son vélo ou en train de courir.",
    social: {
      facebook: "https://facebook.com/maude.baudier",
      instagram: "https://instagram.com/maude.baudier",
      linkedin: "https://linkedin.com/in/maude-baudier",
    },
  },
  {
    name: "Emilie Fravallo",
    title: "Lead Partner – Maemi",
    avatar: "/team/lead-partner-2.png",
    bio: "La tête pensante derrière toute l'interface de l'app. Elle imagine et crée les écrans et les parcours utilisateurs pour transcender l'expérience des membres. Quand elle ne réalise pas des recettes ou des maquettes sous Figma, on peut la retrouver dans la région d'Annecy sur son vélo, en tain de courir ou de nager. Vous l'aurez compris, c'est aussi une triathlète passionnée qui réalise de magnifique performances sur ses courses.",
    social: {
      facebook: "https://facebook.com/emilie.fravallo",
      instagram: "https://instagram.com/emilie.fravallo",
      linkedin: "https://linkedin.com/in/emilie-fravallo",
    },
  },
];
export default function Members() {
  return (
    <div>
      <div className="relative flex flex-col gap-[30px]">
        <div className="-mt-28">
          <TeamList teamMembers={teamMembers} />
        </div>
        <div>
          <div className="relative w-full z-20">
            <div
              style={{
                width: "100vw",
                height: "422.38px",
                position: "absolute",
                top: "-240px",
                left: "0px",
                transform: "rotate(-4.99deg)",
                opacity: 1,
                backgroundColor: "#E2F6F6",
              }}
            ></div>

            <div
              style={{
                width: "110vw",
                height: "422.38px",
                position: "absolute",
                top: "-30px",
                left: "0px",
                transform: "rotate(6.24deg)",
                opacity: 1,
                backgroundColor: "#E2F6F6",
              }}
            ></div>
          </div>

          <TeamList teamMembers={teamMembers} />
        </div>
        <div className="relative w-full min-h-screen mt-5">
          <div className="relative z-30 container">
            <img
              src={line}
              alt=""
              className="absolute w-auto -top-64 left-[80%] scale-[8] origin-top-left px-1.5 rotate-[40.67deg]"
            />
          </div>
          <div className="relative z-20 w-full h-[360px]">
            <div
              className="absolute z-30 inset-0 bg-cover bg-bottom"
              style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            ></div>
          </div>
          <div className="relative -mt-[380px]">
            <TeamList teamMembers={teamMembers} />
          </div>
        </div>
      </div>
    </div>
  );
}
