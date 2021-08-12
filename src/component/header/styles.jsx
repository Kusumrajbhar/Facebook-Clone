import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  header: {
    display: "flex",
    background: "#ffffff",
    justifyContent: "space-between",
  },
  searchTextField: {
    background: "#eeeeee",
    padding: "5px",
    borderRadius: "25px",
  },
  icons: {
    height: "30px",
    width: "30px",
    padding: "10px 40px",
  },
  centerHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default useStyles;
