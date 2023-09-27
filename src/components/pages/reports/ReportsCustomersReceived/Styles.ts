import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()((theme) => ({
  root: {
    height: "70px",
    width: "100%",
    borderRadius: "10px"
  },
  text: {
    color: theme.palette.text.secondary,
    fontSize: 14,
    fontWeight: 400,
  },
  figure: {
    color: theme.palette.text.primary,
    fontSize: 28,
    fontWeight: 700,
  },
}));
export default useStyles;
