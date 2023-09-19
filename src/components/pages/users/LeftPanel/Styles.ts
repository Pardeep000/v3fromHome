// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  leftPanelLayout: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "10px 20px",
    //
    flex: "1",
    overflowY: "hidden",
  },
}));

export default useStyles;
