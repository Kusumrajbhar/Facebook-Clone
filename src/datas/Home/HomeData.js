import { Avatar } from "@material-ui/core";
import {
  FaUserFriends,
  FaHandsHelping,
  FaHandHoldingHeart,
  FaFacebookMessenger,
} from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { ImHome } from "react-icons/im";
import { MdOndemandVideo, MdEvent } from "react-icons/md";
import { BsClockHistory, BsFillStarFill } from "react-icons/bs";
import { AiFillFlag, AiOutlineFieldTime } from "react-icons/ai";
import {
  RiShoppingBagFill,
  RiDropFill,
  RiCommunityFill,
  RiMessengerLine,
} from "react-icons/ri";
import { HiSpeakerphone, HiUserGroup } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { BiShapeTriangle, BiHeartCircle } from "react-icons/bi";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { SiNintendogamecube, SiFacebooklive } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { FcGallery } from "react-icons/fc";
import { TiWeatherPartlySunny } from "react-icons/ti";
import BookmarkIcon from "@material-ui/icons/Bookmark";
//import useStyles from "../../component/modals/StylesModal";
import girl1 from "../../Assets/Images/girl1.jpg";
import girl2 from "../../Assets/Images/girl2.jpg";
import boy1 from "../../Assets/Images/boy1.jpg";
import boy2 from "../../Assets/Images/boy2.jpg";
import boy3 from "../../Assets/Images/boy3.jpg";

const homeLeftData = [
  // const classes = useStyles();
  {
    icon: <FaUserFriends color="blue" size="30" />,
    label: "Friends",
  },
  {
    icon: <HiUserGroup color="teal" size="30" />,
    label: "Groups",
  },
  {
    icon: <ImHome color="blue" size="30" />,
    label: "Marketplace",
  },
  {
    icon: <MdOndemandVideo color="green" size="30" />,
    label: "Watch",
  },
  {
    icon: <MdEvent color="red" size="30" />,
    label: "Events ",
  },
  {
    icon: <BsClockHistory color="teal" size="30" />,
    label: "Memories ",
  },
  {
    icon: <BookmarkIcon color="blue" size="30" />,
    label: " Saved",
  },
  {
    icon: <AiFillFlag color="orange" size="30" />,
    label: " Pages",
  },
  {
    icon: <RiShoppingBagFill color="red" size="30" />,
    label: " Jobs",
  },
  {
    icon: <HiSpeakerphone color="purple" size="30" />,
    label: " Ad Center",
  },
  {
    icon: <GoGraph color="blue" size="30" />,
    label: "Ads Manager ",
  },
  {
    icon: <RiDropFill color="red" size="30" />,
    label: " Blood Donations",
  },
  {
    icon: <BiShapeTriangle color="blue" size="30" />,
    label: "campus ",
  },
  {
    icon: <GiPlantsAndAnimals color="green" size="30" />,
    label: " Climate Science Information Center",
  },
  {
    icon: <RiCommunityFill color="orange" size="30" />,
    label: "community  Help",
  },
  {
    icon: <FaHandsHelping color="purple" size="30" />,
    label: " COVID-19 Information Center",
  },
  {
    icon: <FaHandHoldingHeart color="red" size="30" />,
    label: "Emotional Health ",
  },
  {
    icon: <BsFillStarFill color="orange" size="30" />,
    label: "Favorites ",
  },
  {
    icon: <BiHeartCircle color="orangeRed" size="30" />,
    label: "Fundraisers ",
  },
  {
    icon: <SiNintendogamecube color="blue" size="30" />,
    label: "Gaming Video ",
  },
  {
    icon: <SiFacebooklive color="red" size="30" />,
    label: "Live Video ",
  },
  {
    icon: <FaFacebookMessenger color="purple" size="30" />,
    label: " Messenger",
  },
  {
    icon: <RiMessengerLine color="green" size="30" />,
    label: "Messenger Kids ",
  },
  {
    icon: <AiOutlineFieldTime color="blue" size="30" />,
    label: " Most Recent",
  },
  {
    icon: <FaHandsHelping color="maroon" size="30" />,
    label: "Offers ",
  },
  {
    icon: <IoGameController color="blue" size="30" />,
    label: " Play Games",
  },
  {
    icon: <FcGallery size="30" />,
    label: "Recent Ad Activity ",
  },
  {
    icon: <TiWeatherPartlySunny color="orange" size="30" />,
    label: "Weather ",
  },
];

const contact = [
  {
    icon: (
      <Avatar>
        <img src={girl1} height="100" width="100" alt="" />
      </Avatar>
    ),
    name: "Kusum",
  },
  {
    icon: (
      <Avatar>
        <img src={girl2} height="100" width="100" alt="" />
      </Avatar>
    ),
    name: "Shraddha",
  },
  {
    icon: (
      <Avatar>
        <img src={boy1} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Vishal",
  },
  {
    icon: (
      <Avatar>
        <img src={boy2} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Subrao",
  },
  {
    icon: (
      <Avatar>
        <img src={boy3} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Prashant",
  },
  {
    icon: (
      <Avatar>
        <img src={boy1} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Tenzin",
  },
  {
    icon: (
      <Avatar>
        <img src={boy2} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Anush",
  },
  {
    icon: (
      <Avatar>
        <img src={boy3} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Nishant",
  },
  {
    icon: (
      <Avatar>
        <img src={girl1} height="100" width="100" alt="" />
      </Avatar>
    ),
    name: "Kusum",
  },
  {
    icon: (
      <Avatar>
        <img src={girl2} height="100" width="100" alt="" />
      </Avatar>
    ),
    name: "Shraddha",
  },
  {
    icon: (
      <Avatar>
        <img src={boy1} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Vishal",
  },
  {
    icon: (
      <Avatar>
        <img src={boy2} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Subrao",
  },
  {
    icon: (
      <Avatar>
        <img src={boy3} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Prashant",
  },
  {
    icon: (
      <Avatar>
        <img src={boy1} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Tenzin",
  },
  {
    icon: (
      <Avatar>
        <img src={boy2} height="50" width="50" alt="" />
      </Avatar>
    ),
    name: "Anush",
  },
];

const storyData = [
  {
    image: <img src={girl1} height="200" width="150" alt="" />,
    name: "Shraddha",
  },
  {
    image: <img src={girl2} height="200" width="150" alt="" />,
    name: "Kusum",
  },
  {
    image: <img src={boy1} height="200" width="150" alt="" />,
    name: "Vishal",
  },
  {
    image: <img src={boy2} height="200" width="150" alt="" />,
    name: "Subrao",
  },
  {
    image: <img src={boy3} height="200" width="150" alt="" />,
    name: "Tenzin",
  },
  {
    image: <img src={boy1} height="200" width="150" alt="" />,
    name: "Prashant",
  },
];

export { homeLeftData, contact, storyData };
