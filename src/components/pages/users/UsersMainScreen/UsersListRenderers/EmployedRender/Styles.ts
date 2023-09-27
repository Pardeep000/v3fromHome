// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  employedStyle: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    height: "18px",
    color: "#838383",
  },
}));

export default useStyles;
