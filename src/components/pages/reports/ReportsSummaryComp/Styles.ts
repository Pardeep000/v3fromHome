import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()((theme) => ({
  chart: {
    // width: '1020px',
    height: "450px",
    // height: "100%",
    width: "100%",
    borderRadius: "10px",
    boxShadow: theme.custom?.boxShadow,
  },
  text: {
    color: theme.palette.text.secondary,
    fontSize: 14,
    fontWeight: 400,
  },
  type: {
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 400,
  },
  menu: {
    color: "#777777",
    width: "150px",
    height: "32px",
    borderRadius: "3px",
    fontFamily: "poppins",
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "400",
  },
  select: {
    boxShadow: "0px 1px 2px rgba(21, 34, 50, 0.1)",
    color: "#777777",
    width: "150px",
    height: "32px",
    borderRadius: "3px",
    fontFamily: "poppins",
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "400",
  },
}));
export default useStyles;
