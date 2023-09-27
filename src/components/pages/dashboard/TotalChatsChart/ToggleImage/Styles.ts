import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  typography: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "16px",
    color: theme.palette.text.secondary,
  },
  transferIcon: {
    width: "17px",
    height: "17px",
    margin: "0px 0px 0px 8px",
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
