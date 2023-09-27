import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  menuItem: {
    cursor: "arrow",
    "&:hover": {
      backgroundColor: "transparent",
      cursor: "arrow",
    },
  },
}));
export default useStyles;
