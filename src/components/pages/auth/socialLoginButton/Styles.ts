import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  imageIcon: {
    height: "100%",
  },
  root: {
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    // laptop
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    // Extra large
    [theme.breakpoints.up("xl")]: {
      width: "20vw",
    },
    //
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    background: "#fff",
    boxShadow: "0px 1px 2px rgba(24, 24, 28, 0.1)",
    borderRadius: "5px",
    cursor: "pointer",
  },
  box: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "5vw",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 6,
    },
    [theme.breakpoints.up("xs")]: {
      marginLeft: 8,
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: 2,
    },
    fontSize: "12px",
    marginTop: 1,
  },
  text: {
    color: "#272525",
    fontSize: "12px",
    fontWeight: "500",
    marginRight: "35px",
  },
}));
export default useStyles;
