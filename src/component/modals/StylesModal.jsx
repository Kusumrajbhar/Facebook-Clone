import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  dialog: {
    height: "750px",
    // display: "flex",
    // alignItems: "flex-end",
    // position: "absolute",
    // left: 0,
    // top: 50,
  },
  searchTextField: {
    background: "#eeeeee",
    borderRadius: "25px",
    marginTop: "4px",
    width: "200px",
  },
  paperMenu: {
    // width: "1350px",
    maxWidth: "350px",
    paddingLeft: "15px",
    paddingRight: "12px",
    paddingBottom: "8px",
    paddingTop: "5px",
  },
  menuTitle: {
    fontSize: "19px",
  },
  menuIcons: {
    background: "#e0e0e0",
    padding: "5px",
    borderRadius: "50%",
    color: "#000000",
    marginLeft: "8px",
    cursor: "pointer",
    marginRight: "10px",
  },
  menuText: {
    marginTop: "15px",
    fontWeight: "bold",
  },
  menuRightPaper: {
    position: "fixed",
    padding: "0px 10px",
  },
  menuRightData: {
    display: "flex",
    alignItems: "center",
  },
});

export default useStyles;
