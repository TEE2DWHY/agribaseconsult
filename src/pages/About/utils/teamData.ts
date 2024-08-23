import { TeamMember } from "../types/team";
import chinko from "../../../assets/images/chinko.svg";
import insta from "../../../assets/images/insta.svg";
import x from "../../../assets/images/x.svg";
import fb from "../../../assets/images/facebook.svg";

export const teamData: TeamMember[] = [
  {
    image: chinko,
    name: "Dola Manny",
    title: "Farm Manager",
    socials: [
      { link: "https://google.com", icon: fb },
      { link: "https://google.com", icon: insta },
      { link: "https://facebook.com", icon: x },
    ],
  },
  {
    image: chinko,
    name: "TY",
    title: "CTO",
    socials: [
      { link: "https://google.com", icon: fb },
      { link: "https://google.com", icon: insta },
      { link: "https://google.com", icon: x },
    ],
  },
  {
    image: chinko,
    name: "Adisa",
    title: "CEO",
    socials: [
      { link: "https://google.com", icon: fb },
      { link: "https://google.com", icon: insta },
      { link: "https://google.com", icon: x },
    ],
  },
  
];
