// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  buttonStyle: {
    cursor: "pointer",
    width: "90px",
    height: "27px",
    borderRadius: "3px",
    fontSize: "11px",
    lineHeight: "16.5px",
    padding: "5px 10px !important",
    textTransform: "capitalize",
    borderColor: "#7F3F98",
    color: "#7F3F98",
    //
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
