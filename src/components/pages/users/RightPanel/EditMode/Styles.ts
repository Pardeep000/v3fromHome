import { makeStyles } from "tss-react/mui";
//
const useStyles = makeStyles()((theme) => ({
  outlineName: {
    width: "100%",
    height: "30px",
    border: "0.0px solid #E8E8E8",
    borderRadius: "3px",
    // padding: "6px 10px 6px 10px",
    marginTop: "0px",
    marginBottom: "0px",

    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#272525",
    "& input::-webkit-input-placeholder": {
      fontWeight: "500",
      fontFamily: "poppins",
      fontSize: "12px",
      lineHeight: "15px",
      color: "#272525",
    },
  },

  outlinedInput: {
    width: "100%",
    height: "30px",
    border: "0.0px solid #E8E8E8",
    borderRadius: "3px",
    // padding: "6px 10px 6px 10px",
    marginTop: "5px",
    marginBottom: "0px",
    "& input::-webkit-input-placeholder": {
      fontWeight: "500",
      fontFamily: "poppins",
      fontSize: "12px",
      lineHeight: "15px",
      color: "#272525",
    },
  },

  responsiveness: {
    // width:"180px",
    [theme.breakpoints.down("lg")]: {
      width: "180px !important",
    },
  },

  formBox: {
    padding: "11px 10px",
    // maxHeight: '72vh',
    height: "calc(100vh - 29vh)",
    // height: "calc(100vh - 56vh)",
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "#ccc transparent",

    [theme.breakpoints.down("lg")]: {
      maxHeight: "68.5vh",
      overflowY: "auto",
      overflowX: "hidden",
    },

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
  profileSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  pseudonym: {
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
  jobTitle: {
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
  uemail: {
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
  phoneNumber: {
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

  changepasswordtext: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    marginTop: "20px",
    // marginLeft: "10px",
    color: "#272525",
    // width: '93px',
    width: "100%",
    height: "21px",
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

  clearButton: {
    width: "55px",
    height: "32px",
    backgroundColor: "#F5F5F5",
    borderRadius: "3px",
    fontFamily: "poppins",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "18px",
    color: "#777777",
    marginRight: "5px",
    "&:hover": {
      color: "#777777",
      backgroundColor: "#F5F5F5",
    },
    textTransform: "capitalize",
    boxShadow: "none",
  },
  submitButton: {
    width: "55px",
    height: "32px",
    backgroundColor: "#4D1277",
    borderRadius: "3px",
    fontFamily: "poppins",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "18px",
    color: "#FFFFFF",
    //
    textTransform: "capitalize",
    boxShadow: "none",
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
    // marginLeft: "5px",
    color: "#272525",
    width: "100%",
    // height: "15px",
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
  icon: {
    width: "12.6px",
    height: "12.6px",
    color: "#272525",
    marginTop: "3px",
  },
  selectButton: {
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
  menuItem: {
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
    marginLeft: "5px",
    color: "#272525",
    // width: '175px',
    width: "100%",
    height: "16px",
    //
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "12px",
    },
  },

  saveButton: {
    width: "100%",
    height: "32px",
    backgroundColor: "#4D1277",
    borderRadius: "3px",
    fontFamily: "poppins",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "18px",
    color: "#FFFFFF",
    //
    textTransform: "capitalize",
    boxShadow: "none",
  },

  cancelPanel: {
    width: "100%",
    height: "32px",
    backgroundColor: "#F5F5F5",
    borderRadius: "3px",
    fontFamily: "poppins",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "18px",
    color: "#777777",
    marginRight: "10px",
    "&:hover": {
      color: "#777777",
      backgroundColor: "#F5F5F5",
    },
    textTransform: "capitalize",
    boxShadow: "none",
  },

  bottomButton: {
    width: "100%",
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
  },

  deleteUser: {
    marginTop: "20px",
    height: "21px",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#272525",
  },
  deleteButton: {
    width: "100%",
    marginTop: "5px",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#E34D59",
    backgroundColor: "rgba(227,77,89,0.1)",
    // opacity: "0.1",
    borderRadius: "3px",
    "&:hover": {
      color: "#E34D59",
      backgroundColor: "rgba(227,77,89,0.1)",
    },
  },
  formikErrorStyle: {
    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "10px",
    lineHeight: "15px",
  },
  backendError: {
    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "18px",
    color: "red",
    width: "100%",
  },
}));
export default useStyles;
