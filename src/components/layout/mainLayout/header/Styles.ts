import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  grid1: {
    padding: "20px 30px 0px 60px",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  grid2: {
    padding: "20px 40px 0px 30px",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  header: {
    height: "75px",
    color: theme.palette.common.black,
  },
  typography: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    display: "flex",
  },
  text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    display: "flex",
    lineHeight: "48px",
    marginTop: -15,
  },
  appbar: {
    zIndex: 100,
    background: "#E6D9EC",
  },
}));

export default useStyles;
