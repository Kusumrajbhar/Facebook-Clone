import { makeStyles } from "@material-ui/core";
const userStyle = makeStyles({
  imageBackground: {
    background: "linear-gradient(#bdbdbd 30% , #e0e0e0, #f5f5f5, #fafafa)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "15px",
    marginTop: "60px",
    textAlign: "center",
  },
  belowData: {
    margin: "2% 20% ",
    alignItems: "left",
    display: "flex",
    justifyContent: "left",
  },
  introPaper: {
    padding: "3%",
    alignItems: "left",
  },
  lists: {
    display: "flex",
  },
  lineGapOfData: {
    marginTop: "10px",
  },
  introData: {
    marginTop: "3%",
    fontSize: "18px",
  },
  borderRadiusFifty: {
    borderRadius: "50%",
  },
  postCardOver: {
    textAlign: "center",
    marginTop: "3%",
  },
  userInfoPlace: {
    display: "flex",
    alignItems: "center",
    width: "500px",
  },
  RightTopCard: {
    marginTop: "-6%",
  },
});

export default userStyle;
