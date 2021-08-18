import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainWatch: {
    background: "#eceff1",
    marginTop: "65px",
  },
  sideBarTop: {
    display: "flex",
    justifyContent: "space-between",
  },
  sideBarTitle: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  topIconSize: {
    height: 25,
    width: 25,
    background: "#e0e0e0",
    padding: "5px",
    borderRadius: "50%",
    color: "#000000",
    marginLeft: "8px",
    cursor: "pointer",
    marginRight: "10px",
  },
  marginRightAuto: {
    display: "flex",
    flexDirection: "start",
  },
});

export default useStyles;
