import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  root: {},
  fieldStyle: {
    width: "100%",
    height: "100%",
    color: "#838383",
    fontSize: 12,
    fontWeight: 400,
  },
  managerButton: {
    width: "16px",
    height: "16px",
    borderRadius: "2px",
    backgroundColor: "rgba(77, 18, 119, 0.1)",
    //
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  managerAddIcon: {
    width: "12.4px",
    height: "12.4px",
    color: "#4D1277",
    fontWeight: "bold",
  },
  managerText: {
    width: "100%",
    height: "15px",
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "17px",
    color: "#272525",
    marginLeft: "5px",
  },
  //
  scrollableBox: {
    marginTop: "10px",
    height: "200px",
    overflowY: "auto",
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
  managerAvatar: {
    width: "30px",
    height: "30px",
    marginLeft: "10px",
    marginRight: "5px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  managerName: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "18px",
    marginTop: 0,
    color: "#272525",
  },
  progressIndicator: {
    marginLeft: "3px",
    width: "25px",
    height: "25px",
    fontWeight: "400",
    color: "#4d1277",
  },
  submit: { display: "flex", justifyContent: "flex-end", marginTop: "10px" },
  submitButton: {
    width: "63px",
    height: "28px",
    backgroundColor: "#4D1277",
    borderRadius: "3px",
    fontFamily: "poppins",
    fontSize: "12px",
    fontWright: "500",
    lineHeight: "18px",
    color: "#FFFFFF",
    textTransform: "capitalize",
    boxShadow: "none",
  },
}));
export default useStyles;
