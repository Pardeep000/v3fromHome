// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  statusParent: {
    display: "flex",
  },
  statusIcon: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    marginRight: "3px",
  },
  statusText: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
  },
}));

export default useStyles;
