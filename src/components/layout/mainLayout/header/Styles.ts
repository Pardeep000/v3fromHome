// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  header: {
    height: "75px",
    color: theme.palette.common.black,
  },
  typography: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    display: "flex",
  },
  text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    display: "flex",
    lineHeight: "48px",
    marginTop: -15,
  },
  appbar: {
    zIndex: 100,
    background: "#E6D9EC",
  },
}));

export default useStyles;
