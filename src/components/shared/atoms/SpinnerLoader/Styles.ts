import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  backdrop: {
    zIndex: 9999,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default useStyles;
