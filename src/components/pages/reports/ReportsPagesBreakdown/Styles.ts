import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()((theme) => ({
  root: {
    height: "360px",
    width: "100%",
  },
  heading: {
    color: theme.palette.text.secondary,
    fontSize: 14,
    fontWeight: 400,
  },
  text: {
    color: theme.palette.text.primary,
    fontSize: 14,
    width: "15vw",
    fontWeight: 400,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  figure: {
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 600,
    marginRight: 10,
  },
}));
export default useStyles;
