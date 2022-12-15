import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
const HeaderData = [
  {
    path: "/",
    icon: <HomeIcon color="action" className="icons" />,
    toolTipTitle: "Home",
  },
  {
    path: "/watch",
    icon: <OndemandVideoIcon color="action" className="icons" />,
    toolTipTitle: "Watch",
  },
  {
    path: "/marketPlace",
    icon: <StorefrontIcon color="action" className="icons" />,
    toolTipTitle: "MarketPlace",
  },
  {
    path: "/group",
    icon: <PeopleAltIcon color="action" className="icons" />,
    toolTipTitle: "Group",
  },
  {
    path: "gaming",
    icon: <SportsEsportsIcon color="action" className="icons" />,
    toolTipTitle: "Gaming",
  },
];

export {HeaderData };
