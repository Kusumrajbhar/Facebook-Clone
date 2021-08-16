import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  header: {
    display: "flex",
    background: "#ffffff",
    justifyContent: "space-between",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  searchTextField: {
    background: "#eeeeee",
    padding: "5px",
    borderRadius: "25px",
    marginTop: "4px",
  },
  icons: {
    height: "30px",
    width: "30px",
    padding: "10px 40px",
    "&:active": {
      color: "blue",
      content: "",
      display: "block",
      borderBottom: "3px solid",
      margin: "0 auto",
    },
  },
  centerHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "50%",
    minWidth: "50%",
    "@media (max-width:1024px)": {
      display: "none",
    },
  },
  name: {
    color: "#000000",
    marginRight: "12px",
    marginTop: "8px",
    marginLeft: "5px",
  },
  circularIcons: {
    background: "#e0e0e0",
    padding: "10px",
    borderRadius: "50%",
    color: "#000000",
    marginLeft: "8px",
    cursor: "pointer",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
  },
  rightContent: {
    display: "flex",
    marginLeft: "auto",
  },
  flex: {
    display: "flex",
  },
  // hover: {
  //   "&:active": {
  //     background: "yellow",
  //   },
  // },
});

export default useStyles;
