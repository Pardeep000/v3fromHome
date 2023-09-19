import { makeStyles } from "tss-react/mui";
//
const useStyles = makeStyles()((theme) => ({
  root: {
    height: "calc(100vh - 29vh)",
    // height: "99%",
    padding: "11px 10px",
    //
    overflowX: "hidden",
    //
    [theme.breakpoints.down("lg")]: {
      maxHeight: "68.5vh",
      overflowY: "auto",
      overflowX: "hidden",
    },
    overflowY: "auto",
    scrollbarWidth: "thin",
    //
    scrollbarColor: "#ccc transparent",
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
  userProfile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  selectStyling: {
    border: "0.5px solid #E8E8E8",
    color: "#777777",
    width: "100px",
    height: "25px",
    borderRadius: "3px",
    // marginLeft: '10px',
    paddingLeft: "7px",
    // paddingTop: '7.5px',
    // paddingBottom: '7.5px',
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
  fullName: {
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
  fullNameValue: {
    // width: '260px',
    width: "100%",
    height: "30px",
    //
    border: "0.5px solid #E8E8E8",
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
  pseudonym: {
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
  pseudonymValue: {
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
  jobTitle: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    marginTop: "10px",
    color: "#777777",
    width: "100%",
    height: "18px",
  },
  jobTitleValue: {
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
  uemail: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    marginTop: "10px",
    color: "#777777",
    width: "100%",
    height: "18px",
  },
  uemailValue: {
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
  phoneNumber: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    marginTop: "10px",
    color: "#777777",
    width: "100%",
    height: "18px",
  },
  phoneNumberValue: {
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
  chatLimit: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    marginTop: "20px",
    color: "#272525",
    width: "100%",
    height: "21px",
  },
  concurrentChat: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "15px",
    marginLeft: "5px",
    color: "#272525",
    width: "100%",
    height: "15px",
  },
  selectStatus: {
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
  chatchannels: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    //
    paddingRight: "10px",
    cursor: "pointer",
  },
  icon: {
    width: "12.6px",
    height: "12.6px",
    color: "#272525",
    marginTop: "3px",
  },

  active: {
    color: "#00BA34",
    width: "5px",
    height: "5px",
    marginRight: "5px",
  },
  block: {
    color: "#E34D59",
    width: "5px",
    height: "5px",
    marginRight: "5px",
  },
  suspended: {
    color: "#FF8A00",
    width: "5px",
    height: "5px",
    marginRight: "5px",
  },
}));
export default useStyles;
