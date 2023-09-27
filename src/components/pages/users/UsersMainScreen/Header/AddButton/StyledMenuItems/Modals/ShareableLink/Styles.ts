import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  selectInput: {
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
    position: "relative",
    top: "-1px",
  },
  root: {
    "& .MuiInputBase-input::placeholder": {
      width: "420px",
      height: "15px",
      fontSize: "10px",
      lineHeight: "15px",
      fontWeight: "600",
      fontFamily: "poppins",
      display: "flex",
      alignItems: "center",
    },
  },
  selectMenuItem: {
    width: "116px",
    height: "25px",
    borderRadius: "3px",
    backgroundColor: "#FFFFFF",
    color: "#777777",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "17px",
    fontWeight: "400",
  },
  shareablelink: {
    width: "345px",
    height: "38px",
    color: "'#A1A1A1'",
    borderRadius: "3px",
    backgroundColor: "white",
  },
  selectText: {
    position: "relative",
    left: "-8px",
    fontSize: "12px",
    fontWeight: "400",
    fontFamily: "poppins",
    color: "#B7B7B7",
  },
  errorStyle: {
    fontWeight: "400",
    fontFamily: "poppins",
    fontSize: "12px",
    lineHeight: "18px",
  },
}));
export default useStyles;
