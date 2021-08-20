import { makeStyles } from "@material-ui/core";

export const globalStyle = makeStyles(() => ({
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
}));
