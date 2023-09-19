// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  usersLayout: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "10px 20px",
    //
    height: "calc(100% - 40px)",
    //
  },
  rowDivider: {
    borderBottom: "0.8px solid #EFF2F6",
  },
  headerStyle: {
    textTransform: "capitalize",
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    height: "20px",
    color: "#777777",
  },
  usersListLayout: {
    height: "calc(100% - 30px)",
  },
}));

export default useStyles;
