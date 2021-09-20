import { makeStyles } from "@material-ui/core";

export const globalStyle = makeStyles(() => ({
  flex: {
    display: "flex",
  },
  textColor: {
    color: "red",
  },
  blueColor: {
    color: "blue",
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
  sidebarScrolling: {
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

  marginWithBold: {
    fontWeight: "bold",
    marginLeft: "10px",
  },
  flexStartColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
  },
  flexWithCenterJustify: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lineHeightOne: {
    lineHeight: "1px",
  },
  marginRightThree: {
    marginRight: "3%",
  },
  marginBottomTwenty: {
    marginBottom: "20px",
  },
  marginLeft: {
    marginLeft: "12px",
  },
  marginRightTwelve: {
    marginRight: "12px",
  },
  fontSizeFourteen: {
    fontSize: "14px",
  },
  heightWidth: {
    height: "50px",
    width: "50px",
  },
  sideBarTop: {
    display: "flex",
    justifyContent: "space-between",
    padding: "7px",
  },
  sideBarTitle: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  sidebarIconSize: {
    background: "#e0e0e0",
    padding: "5px",
    borderRadius: "50%",
    color: "#000000",
    marginLeft: "8px",
    cursor: "pointer",
    marginRight: "10px",
  },
  inputFieldStyle: {
    background: "#eeeeee",
    borderRadius: "25px",
    width: "100%",
    padding: "3px 10px",
  },
  marginWithPadding: {
    margin: "20px 0",
    padding: "15px",
  },
  marginTopWithPadding: {
    marginTop: "30px",
    padding: "15px",
  },
  greenColor: {
    color: "green",
    marginRight: "7px",
  },

  orangeColor: {
    color: "Orange",
    marginRight: "7px",
  },
}));
