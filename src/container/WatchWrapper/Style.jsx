import { makeStyles } from "@material-ui/core";

const watchStyles = makeStyles({
  mainWatch: {
    background: "#eceff1",
    marginTop: "65px",
  },
  cardMain: {
    marginTop: "65px",
    paddingTop: "15px",
    padding: "10px",
  },
  cardHeader: {
    //padding: "10px",
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
  subTitle: {
    textAlign: "left",
    //paddingLeft: "10px",
    fontWeight: "bold",
  },
  subTitleDetail: {
    textAlign: "left",
  },
  marginLeft: {
    marginLeft: "12px",
  },
  iconButtons: {
    display: "flex",
    alignItems: "center",
    marginLeft: "22px",
    padding: "6px 14px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(245,245,245)",
    },
  },
  like: {
    background: "rgb(31, 81, 255)",
    padding: "3px",
    borderRadius: "50%",
  },
  heart: {
    background: "red",
    padding: "3px",
    borderRadius: "50%",
  },
  laugh: {
    background: " #FFC300",
    padding: "3px",
    borderRadius: "50%",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    lineHeight: "1px",
    textAlign: "left",
  },
  videoWidth: {
    width: "80%",
  },
});

export default watchStyles;
