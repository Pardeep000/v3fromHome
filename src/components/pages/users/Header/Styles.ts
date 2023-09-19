// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  headerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fieldStyle: {
    width: "100%",
    height: "100%",
    color: "#838383",
    fontSize: 12,
    fontWeight: 400,
  },
}));

export default useStyles;
