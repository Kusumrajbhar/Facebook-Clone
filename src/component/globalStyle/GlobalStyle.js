import { makeStyles } from "@material-ui/core";

export const globalStyle = makeStyles(() => ({
  flex: {
    display: "flex",
  },
  textColor: {
    color: "red",
  },
  marginTopTen: {
    marginTop: "10px",
  },
  alignContentLeft: {
    textAlign: "left",
  },
  marginRightTen: {
    marginRight: "10px",
  },
  paddingFive: {
    padding: "5%",
  },
  scrolling: {
    overflow: "scroll",
    height: "80vh",
  },
  main: {
    marginTop: "65px",
    paddingTop: "15px",
    textAlign: "center",
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
  },
  lineHeightOne: {
    lineHeight: "1px",
  },
  marginRightThree: {
    marginRight: "3%",
  },
  marginLeft: {
    marginLeft: "12px",
  },
  fontSizeFourteen: {
    fontSize: "14px",
  },
  heightWidth: {
    height: "50px",
    width: "50px",
  },
}));
