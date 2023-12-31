import { makeStyles } from "tss-react/mui";
//
const useStyles = makeStyles()(() => ({
  selectText: {
    position: "relative",
    left: "-8px",
    fontSize: "12px",
    fontWeight: "400",
    fontFamily: "poppins",
    color: "#B7B7B7",
  },
  selectInput: {
    "& .MuiSelect-select:focus": {
      borderBottom: "none",
    },
    overflow: "hidden",
    cursor: "pointer",
    border: "0px solid #E8E8E8",
    color: "#B7B7B7",
    width: "120px",
    height: "38px",
    borderRadius: "3px",
    marginLeft: "10px",
    fontSize: "12px",
    fontWeight: "400",
    fontFamily: "poppins",
  },
  share: {
    width: "100%",
    height: "18px",
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#272525",
    //
    marginTop: "15px",
    marginBottom: "10px",
  },
  selectMenuItem: {
    width: "100%",
    height: "25px",
    borderRadius: "3px",
    backgroundColor: "#FFFFFF",
    color: "#777777",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "17px",
    //
    fontWeight: "400",
  },
  shareablelink: {
    width: "345px",
    height: "38px",
    color: "'#A1A1A1'",
    borderRadius: "3px",
    backgroundColor: "white",
  },

  errorStyle: {
    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "18px",
    color: "red",
    marginTop: "5px",
  },
  divider: {
    width: "100%",
    marginTop: "23px",
    marginBottom: "10px",
    color: "#E8E8E8",
  },
  email: {
    height: "18px",
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
  },
  copylink: {
    width: "75px",
    height: "38px",
    backgroundColor: "#F4F4F4",
    borderLeft: "1px solid #E8E8E8",
    borderRadius: "0px 3px 3px 0px",
    color: "#777777",
    fontFamily: "poppins",
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "400",
    marginLeft: "10px",
  },
  copied: {
    width: "75px",
    height: "38px",
    backgroundColor: "#22AA61",
    borderLeft: "1px solid #E8E8E8",
    borderRadius: "0px 3px 3px 0px",
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "10px",
    color: "#FFFFFF",
    lineHeight: "15px",
    marginLeft: "10px",
    //
    "&:hover": {
      backgroundColor: "#22AA61",
      color: "#FFFFFF",
    },
  },
  security: {
    width: "100%",
    height: "15px",

    fontFamily: "poppins",
    fontWeight: "400",
    //
    fontSize: "12px",
    lineHeight: "17px",
    //
    color: "#838383",
    marginTop: "10px",
  },
  generate: {
    color: "#4D1277",
    cursor: "pointer",
    fontWeight: "500",
    fontFamily: "poppins",
    // fontSize: "10px",
    // lineHeight: "15px",
    fontSize: "12px",
    lineHeight: "17px",
  },
  cancel: {
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
  invite: {
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
  btnBar: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
export default useStyles;
