import { makeStyles } from "@material-ui/core";

const watchStyles = makeStyles({
  mainWatch: {
    background: "#eceff1",
    marginTop: "65px",
  },
  cardMain: {
    marginTop: "65px",
    paddingTop: "15px",
  },
  cardHeader: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  watchSideBar: {
    marginTop: "63px",
    padding: "10px 10px",
    width: "330px",
    position: "fixed",
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
  centralContent: {
    paddingTop: "23px ",
    paddingLeft: "150px",
    paddingRight: "180px",
  },
});

export default watchStyles;
