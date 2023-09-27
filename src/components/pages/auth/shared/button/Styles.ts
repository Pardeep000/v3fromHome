import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
    [theme.breakpoints.up("xs")]: {
      maxWidth: "300px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "100%",
      width: "20vw",
    },
    height: "40px",
    margin: "10px 0px 10px 0px",
    borderRadius: "5px",
    textTransform: "capitalize",
  },
}));
export default useStyles;
