import { RiLiveFill } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { HiSave } from "react-icons/hi";
import { BiMovie } from "react-icons/bi";
import joke1 from "../../Assets/Images/joke1.jpg";
import rain1 from "../../Assets/Images/rain1.jpg";
import rain2 from "../../Assets/Images/rain2.jpg";
import kidPage1 from "../../Assets/Images/kidPage1.jpg";
import kidPage2 from "../../Assets/Images/kidPage2.jpg";
import kidPage3 from "../../Assets/Images/kidPage3.jpg";
import nature from "../../Assets/Images/nature.jpg";
import dance1 from "../../Assets/Images/dance1.jpg";
import dance2 from "../../Assets/Images/dance2.jpg";
import monkey from "../../Assets/Images/monkey.jpg";
import girl1 from "../../Assets/Images/girl1.jpg";
import girl2 from "../../Assets/Images/girl2.jpg";

const sideBarUpperHalf = [
  {
    icon: <MdOndemandVideo size="25" />,
    text: "Home",
  },
  {
    icon: <RiLiveFill size="25" />,
    text: "Live",
  },
  {
    icon: <BiMovie size="25" />,
    text: "Shows",
  },
  {
    icon: <HiSave size="25" />,
    text: "Saved Videos",
  },
];

const sideBarLower = [
  {
    image: <img src={joke1} height="50" width="50" alt="" />,
    text: "Latest Videos ",
  },
  {
    image: <img src={joke1} height="50" width="50" alt="" />,
    text: "Laughing Colors ",
  },
  {
    image: <img src={rain2} height="50" width="50" alt="" />,
    text: " Kapil Sharma",
  },
  {
    image: <img src={dance1} height="50" width="50" alt="" />,
    text: "Cutepolish ",
  },
  {
    image: <img src={dance2} height="50" width="50" alt="" />,
    text: "Stylish Eve ",
  },
  {
    image: <img src={nature} height="50" width="50" alt="" />,
    text: "Santa Banta Joke ",
  },
  {
    image: <img src={kidPage1} height="50" width="50" alt="" />,
    text: "WeetNow Fashion Designs ",
  },
  {
    image: <img src={kidPage2} height="50" width="50" alt="" />,
    text: "Beautiful Mumbai ",
  },
  {
    image: <img src={kidPage3} height="50" width="50" alt="" />,
    text: "Chulbule chutkule ",
  },
  {
    image: <img src={monkey} height="50" width="50" alt="" />,
    text: "Animal Love ",
  },
  {
    image: <img src={girl1} height="50" width="50" alt="" />,
    text: "Girlz Facts ",
  },
  {
    image: <img src={girl2} height="50" width="50" alt="" />,
    text: "Girly Talk ",
  },
  {
    image: <img src={joke1} height="50" width="50" alt="" />,
    text: "Joke  ",
  },
];

export { sideBarUpperHalf, sideBarLower };
