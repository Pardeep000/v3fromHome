import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  tabs: {},
  tab: {},
  chart: {
    // width: '870px',
    height: "404px",
    borderRadius: "10px",
    boxShadow: theme.custom?.boxShadow,
  },
  typography: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "16px",
    color: theme.palette.text.secondary,
    // lineHeight: "28px",
  },
  transferIcon: {
    // position: 'absolute',
    width: "17px",
    height: "17px",
    margin: "0px 0px 0px 8px",
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
