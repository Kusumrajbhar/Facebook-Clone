import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  main: {
    height: "93vh",
    background: "#eceff1",
    overflow: "hidden",
  },
  page: {
    background: "#eceff1",
    padding: "10px",
  },
  leftPaper: {
    background: "#eceff1",
    overflow: "scroll",
    marginRight: "auto",
    height: "93vh",
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
  },
  midFlow: {
    overflow: "hidden",
  },
});

export default useStyles;
