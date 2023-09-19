import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: "16px 16px 0px -16px ",
    cursor: "pointer",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("lg")]: {
      margin: "16px 16px 0px -16px ",
    },
  },
}));

export default useStyles;
