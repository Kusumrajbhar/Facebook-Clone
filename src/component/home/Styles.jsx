import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  page: {
    background: "#eceff1",
    padding: "10px",
  },
  leftPaper: {
    background: "#eceff1",
    overflow: "scroll",
    marginRight: "auto",
    height: "93vh",
    position: "fixed",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
  },
  icons: {
    background: "#e0e0e0",
    padding: "5px",
    borderRadius: "50%",
    color: "#000000",
    marginLeft: "8px",
    cursor: "pointer",
    marginRight: "10px",
  },
  flowControl: {
    height: "93vh",
    overflow: "scroll",
    position: "fixed",
    right: "0",
    width: "100%",
  },
  midFlow: {
    overflowY: "scroll",
    padding: "2% 6%",
  },
  textField: {
    background: "#eeeeee",
    padding: "5px",
    borderRadius: "25px",
    marginTop: "4px",
  },
  paddingTwoFive: {
    padding: "2% 5%",
  },

  flexWithMarginTwo: {
    display: "flex",
    margin: "2% 0",
  },
  fontFourteen: {
    fontSize: "14px",
  },
  marginBottomThree: {
    marginBottom: "3%",
  },
  flexWithPaddingThree: {
    display: "flex",
    padding: "3%",
    alignItems: "center",
  },
  marginLeftTen: {
    marginLeft: "10px",
  },
});

export default useStyles;
