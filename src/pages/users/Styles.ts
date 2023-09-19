// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  mainIndex: {
    // backgroundColor: "#FFFFFF",
    // borderRadius: "10px",
    // paddingBottom: "20px",
    // marginBottom: "20px",
    // height: "auto",
    height: "calc(100% - 10px)",
    //
    display: "flex",
  },
}));

export default useStyles;
