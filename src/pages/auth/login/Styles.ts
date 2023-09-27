import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "35px",
    width: "100%",
  },
  style: {
    maxWidth: "300px",
    width: "100%",
  },

  form: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    flexDirection: "column",
    minWidth: "100%", // default maximum width
    [theme.breakpoints.down("sm")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },

  wrapup: {
    minWidth: "100%", // default maximum width
    [theme.breakpoints.down("sm")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },

  divider: {
    width: "100%",
    alignItems: "center",
    color: "#B7B7B7",
  },
  dividerText: {
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
