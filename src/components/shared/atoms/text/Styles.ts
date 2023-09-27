import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  text: {
    fontWeight: 400,
    [theme.breakpoints.up("md")]: {
      fontSize: "0.875rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.75rem",
    },
    lineHeight: "20px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "18px",
    color: "black",
  },
  title12500: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "18px",
    color: "black",
  },
  title14500: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "18px",
    color: "black",
  },
  contentSmall: {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
    color: theme.palette.text.secondary,
  },
}));
export default useStyles;
