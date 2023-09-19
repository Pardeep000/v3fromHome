import { makeStyles } from "tss-react/mui";
//
const useStyles = makeStyles()((theme) => ({
  outerBox: {
    height: "auto",
    width: "280px",
    marginLeft: "20px",
    backgroundColor: "#FFFFFF",
    //
    boxShadow: "0px 5px 10px rgba(127, 63, 152, 0.1)",
    borderRadius: "10px",
    // laptop
    [theme.breakpoints.down("lg")]: {
      maxHeight: "83vh",
      overflowY: "auto",
      // backgroundColor:"orange"
    },
    //
  },
  topPanel: {
    display: "flex",
    justifyContent: "space-between",
    //
    alignItems: "center",
    marginTop: "20px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  topPanelRow: {
    // width: '55px',
    width: "100%",
    height: "27px",
    fontWeight: "500",
    fontFamily: "poppins",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#272525",
    // marginTop: '20px',
    // marginLeft: '10px',
  },
  crossIcon: {
    height: "18.8px",
    width: "18.8px",
    color: "#B9B9B9",
    // marginTop: '13.61px',
    // marginRight: '13.6px',
    cursor: "pointer",
  },
  divider: {
    width: "600px",
    marginTop: "10px",
    color: "#E8E8E8",
  },
  textAndSwitchOuterBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //
    padding: "0px 10px 0px 10px",
  },
  textAndSwitchInnerBox: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#272525",
  },
  switchButtonBox: {
    display: "flex",
    alignItems: "center",
  },
  switchButtonBoxText: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#838383",
  },
}));
export default useStyles;
