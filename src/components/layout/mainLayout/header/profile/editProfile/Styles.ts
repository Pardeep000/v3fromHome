import { makeStyles } from "tss-react/mui";
import addAlpha from "src/theme/functions/addAlpha";

const useStyles = makeStyles()(() => ({
  root: {
    width: 330,
    height: 440,
  },
  menuItem: {
    cursor: "arrow",
    "&:hover": {
      backgroundColor: "transparent",
      cursor: "arrow",
    },
  },
  addImage: {
    height: "80px !important",
    width: "80px!important",
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
    marginTop: 10,
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

  profileName: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "5px",
    color: "#272525",
    width: "100%",
    height: "20px",
    display: "flex",
    justifyContent: "center",
  },
  profilePseudonym: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#777777",
    width: "100%",
    height: "18px",
    display: "flex",
    justifyContent: "center",
  },
}));
export default useStyles;
