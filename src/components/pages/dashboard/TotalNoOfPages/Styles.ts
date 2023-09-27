import { makeStyles } from "tss-react/mui";
// function pxToRem(number: number, baseNumber = 16) {
//   return `${number / baseNumber}rem`
// }

const useStyles = makeStyles()(() => ({
  root: {
    // width: '430px',
    height: "404px",

    // marginLeft: -10,
    borderRadius: "10px",
    boxShadow:
      "43px 58px 29px rgba(0, 0, 0, 0.01), 24px 32px 24px rgba(0, 0, 0, 0.03), 11px 14px 18px rgba(0, 0, 0, 0.04), 3px 4px 10px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)",
  },
  typography: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    display: "flex",
    lineHeight: "28px",
    color: "#838383",
  },
  menu: {
    color: "#272525",
    cursor: "pointer",
  },

  top: {
    height: "32px",
  },
  bottom: {
    // height: ""
    marginTop: -5,
  },
  progress: {
    margin: "auto",
    display: "block",
    marginTop: 20,
    fontWeight: "400",
    color: "#4d1277",
  },
}));

export default useStyles;
