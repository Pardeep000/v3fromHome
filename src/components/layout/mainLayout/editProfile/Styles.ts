import { makeStyles } from "tss-react/mui";
import addAlpha from "src/theme/functions/addAlpha";

const useStyles = makeStyles()((theme) => ({
  menuItem: {
    cursor: "arrow",
    "&:hover": {
      backgroundColor: "transparent",
      cursor: "arrow",
    },
  },
  addImageBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  boxChip: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  chip: {
    height: 20,
    borderRadius: 0,
    fontSize: "9px",
    whiteSpace: "normal",
    color: "#0085FF",
    backgroundColor: addAlpha("#0085FF", 0.1),
    display: "flex",
    justifyContent: "center",
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  cancelButton: {
    height: "30px",
    width: "85px",
    fontSize: "12px",
    fontWeight: 400,
    background: "#F5F5F5",
    textDecoration: "none",
    textTransform: "capitalize",
  },
  submitButton: {
    height: "30px",
    width: "85px",
    fontSize: "12px",
    fontWeight: 400,
    textDecoration: "none",
    textTransform: "capitalize",
  },
  profile: {
    width: "30px",
    height: "30px",
    marginTop: "8px",
  },
  selectStyling: {
    border: "0.5px solid #E8E8E8",
    color: "#777777",
    width: "100px",
    height: "25px",
    borderRadius: "3px",
    paddingLeft: "7px",
    fontFamily: "poppins",
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "400",
  },

  profileName: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "5px",
    color: "#272525",
    //
    width: "100%",
    height: "20px",
    //
    display: "flex",
    justifyContent: "center",
  },
  profilePseudonym: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#777777",
    //
    width: "100%",
    height: "18px",
    //
    display: "flex",
    justifyContent: "center",
  },
  profileRole: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#0085FF",
    //
    marginTop: "5px",
    //
    width: "100%",
    height: "18px",
    //
    display: "flex",
    justifyContent: "center",
  },

  profileInfo: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    marginTop: "20px",
    color: "#272525",
    // width: '66px',
    width: "100%",
    height: "15px",
  },
  text1: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    marginTop: "10px",
    color: "#777777",
    // width: '39px',
    width: "100%",
    height: "18px",
  },
  text1Box: {
    // width: '260px',
    width: "100%",
    height: "30px",
    //
    border: "0.5px solid #BDC0CC",
    borderRadius: "3px",
    //
    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#272525",
    //
    padding: "6px 10px 6px 10px",
    //
    //
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },

  rowBox: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  },

  rowBox1: {},
  rowBox2: {
    marginLeft: "10px",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0px",
    },
  },
  text2: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    marginTop: "10px",
    // marginLeft: "10px",
    color: "#777777",
    // width: '48px',
    width: "100%",
    height: "18px",
  },
  text2Box: {
    width: "125px",
    height: "30px",
    border: "0.5px solid #E8E8E8",
    borderRadius: "3px",
    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#272525",
    padding: "6px 10px 6px 10px",
    //
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  text3: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    marginTop: "10px",
    color: "#777777",
    width: "100%",
    height: "18px",
  },
  text3Box: {
    width: "125px",
    height: "30px",
    border: "0.5px solid #E8E8E8",
    borderRadius: "3px",
    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#272525",
    padding: "6px 10px 6px 10px",
    //
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  text4: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#777777",
    width: "100%",
    height: "18px",
  },
  text4Box: {
    width: "260px",
    height: "30px",
    border: "0.5px solid #E8E8E8",
    borderRadius: "3px",
    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#272525",
    padding: "6px 10px 6px 10px",
    //
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  text5: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#777777",
    width: "100%",
    height: "18px",
  },
  text5Box: {
    width: "260px",
    height: "30px",
    border: "0.5px solid #E8E8E8",
    borderRadius: "3px",
    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#272525",
    padding: "6px 10px 6px 10px",
    //
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  chatLimit1: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    marginTop: "20px",
    color: "#272525",
    width: "100%",
    height: "21px",
  },
  chatLimit2: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "15px",
    marginLeft: "5px",
    color: "#272525",
    width: "100%",
    height: "15px",
  },
  selectBoxText: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    marginTop: "20px",
    color: "#272525",
    // width: '65px',
    width: "100%",
    height: "21px",
  },
  MenuItem: {
    width: "96px",
    height: "25px",
    borderRadius: "3px",
    backgroundColor: "#F7F7F7",
    color: "#777777",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "15px",
    fontWeight: "400",
    paddingLeft: "10px",
  },
  collapseText: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    // marginTop: "20px",
    // marginLeft: "5px",
    color: "#272525",
    // width: '76px',
    width: "100%",
    height: "21px",
  },
  collapseBox: {
    //
    marginTop: "5px",
    //
    width: "250px",
    maxHeight: "10vh",
    minHeight: "12vh",
    overflowY: "auto",
    padding: "10px",
    //
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    //
    overflowX: "hidden",
    //
    scrollbarWidth: "thin",
    scrollbarColor: "#ccc transparent",
    //
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ccc",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
  },
  collapseBoxText: {
    //
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "#ccc transparent",
    //
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ccc",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    //
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "15px",
    // marginTop: "20px",
    marginLeft: "5px",
    color: "#272525",
    width: "175px",
    height: "16px",
    //
    [theme.breakpoints.down("lg")]: {
      fontSize: "8px",
    },
  },
}));
export default useStyles;
