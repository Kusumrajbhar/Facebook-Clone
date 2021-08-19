import { makeStyles } from "@material-ui/core";
const userStyle = makeStyles({
  imageBackground: {
    background: "linear-gradient(#bdbdbd 30% , #e0e0e0, #f5f5f5, #fafafa)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "15px",
    marginTop: "60px",
  },
  belowData: {
    margin: "2% 20% ",
    alignItems: "left",
    display: "flex",
    justifyContent: "left",
  },
  introPaper: {
    padding: "3%",
  },
  lists: {
    display: "flex",
  },
  lineGapOfData: {
    marginTop: "10px",
  },
});

export default userStyle;
