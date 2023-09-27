import { makeStyles } from "tss-react/mui";
// import theme from '../../style/theme';
//
const useStyles = makeStyles()(() => ({
  root: {
    // width: "360px",
    width: "100% !important",
    height: "38px",
    border: "0.0px solid #BDC0CC",
    borderRadius: "3px",
    background: "#FFFFFF",
    //
    "& .MuiInputBase-input": {
      "&::placeholder": {
        color: "purple",
      },
      "&$input": {
        color: "red",
        fontWeight: "bold",
      },
    },
    "& .MuiInputBase-input::placeholder": {
      // width: '420px',
      width: "100%",
      // height: '15px',
      height: "38px",
      // fontSize: '10px',
      fontSize: "12px",
      lineHeight: "15px",
      fontWeight: "600",
      fontFamily: "poppins",
      //
      display: "flex",
      alignItems: "center",
    },
  },
  teamNameStyle: {
    width: "100%",
    height: "38px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    fontFamily: "poppins",
    //
    padding: "0",
    paddingLeft: "10px",
  },
  formerHelperTextStyle: {
    color: "red",
  },
  rowStyle: {
    display: "flex",
    marginTop: "20.5px",
    marginBottom: "20px",
  },
  agentRow: {
    display: "flex",
    marginRight: "50px",
    cursor: "pointer",
  },
  managerRow: {
    display: "flex",
    cursor: "pointer",
  },
  //
  selectedMembersList: {
    width: "100%",
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "17px",
    color: "#A0A0A0",
    marginTop: "10px",
  },
  membersBox: {
    marginTop: "10px",
    maxHeight: "165px",
    overflowY: "auto",
    //
    scrollbarWidth: "thin",
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
  selectedMemberRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  memberAvatarName: {
    width: "30px",
    height: "30px",
    marginLeft: "10px",
    marginRight: "5px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  selectedMemberName: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "18px",
    marginTop: 0,
    color: "#272525",
    marginRight: "7px",
  },
  //
  cutMember: {
    height: "18px",
    width: "18px",
    color: "#B9B9B9",
    marginRight: "8px",
    cursor: "pointer",
  },
  bottomButtonBar: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  },
  //
  cancelButton: {
    width: "73px",
    height: "28px",
    background: "#F5F5F5",
    borderRadius: "3px",
    //
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#777777",
    marginRight: "5px",
    "&:hover": {
      color: "#777777",
      backgroundColor: "#F5F5F5",
    },
    //
    textTransform: "capitalize",
    boxShadow: "none",
  },
  createButton: {
    width: "63px",
    height: "28px",
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
}));
export default useStyles;
