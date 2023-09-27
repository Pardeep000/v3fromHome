import { makeStyles } from "tss-react/mui";
import addAlpha from "src/theme/functions/addAlpha";

const useStyles = makeStyles()(() => ({
  upgradeBox: {
    backgroundColor: addAlpha("#FF8A00", 0.1),
    width: "100%",
    padding: 20,
  },
  upgradeButton: {
    marginTop: 10,
    backgroundColor: "#FF8A00",
    textTransform: "capitalize",
  },
  text: {
    overflowWrap: "break-word",
    wordWrap: "break-word",
    fontSize: 12,
    marginTop: 10,
  },
}));
export default useStyles;
