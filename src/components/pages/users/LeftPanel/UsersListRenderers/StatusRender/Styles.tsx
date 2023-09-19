// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  statusParent: {
    display: "flex",
  },
  statusIcon: {
    color: "#00BA34",
    // color:
    //   item.status === "BLOCKED"
    //     ? "#E34D59"
    //     : item.status === "ACTIVE"
    //     ? "#00BA34"
    //     : "#FF8A00",
    //
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    marginRight: "3px",
  },
  statusText: {
    color: "#00BA34",
    //
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    // color:
    // item.status === "BLOCKED"
    //   ? "#E34D59"
    //   : item.status === "ACTIVE"
    //     ? "#00BA34"
    //     : "#FF8A00",
  },
}));

export default useStyles;
