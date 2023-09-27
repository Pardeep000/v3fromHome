import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  itemPadding: {
    margin: 0,
    padding: 0,
  },
  iconStyle: {
    color: "#0165E1",
  },
  textStyle: {
    marginLeft: 1,
  },
}));
export default useStyles;
