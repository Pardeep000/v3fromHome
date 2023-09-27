import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  headBox: {
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headText: {
    fontWeight: "500",
    fontFamily: "poppins",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#272525",
    textTransform: "capitalize",
  },
  modalButton: {
    textTransform: "capitalize",
    width: "100%",
    color: "black",
    fontSize: "14px",
  },
  crossIcon: {
    padding: "0px",
    width: "17px",
    height: "17px",
    color: "#B9B9B9 !important",
    fontSize: "small",
    cursor: "pointer",
  },
  centerBody: {
    padding: "10px 20px",
  },
}));

export default useStyles;
