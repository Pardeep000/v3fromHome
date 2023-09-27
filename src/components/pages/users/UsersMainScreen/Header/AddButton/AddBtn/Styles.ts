import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  addButton: {
    width: "78px",
    height: "30px",
    borderRadius: "3px",
    backgroundColor: "#7F3F98",
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    fontFamily: "poppins",
    textTransform: "capitalize",
  },
}));

export default useStyles;
