import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  helperText: {
    color: "red !important",
  },
  textField: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "300px",
    },
    // laptop
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    // extra large
    [theme.breakpoints.up("xl")]: {
      width: "100%",
    },
  },
}));
export default useStyles;
