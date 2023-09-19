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
    //
    textTransform: "capitalize",
  },
  buttonMenuItem: {
    // width: '146px',
    width: "100%",
    // height: '28px',
    borderRadius: "3px",
    height: "38.5px",
  },

  menuIcon: {
    color: "#7F3F98",
    fontSize: "20px",
  },

  MenuItemStyling: {
    // width: '78px',
    width: "100%",
    height: "18px",
    fontFamily: "poppins",
    fontWeight: "400",
    // fontSize: '12px',
    lineHeight: "18px",
    fontSize: "15px",
  },
}));

export default useStyles;
