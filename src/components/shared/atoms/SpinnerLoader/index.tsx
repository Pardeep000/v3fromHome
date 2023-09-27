import { Backdrop, CircularProgress } from "@mui/material";
import useStyles from "./Styles";

const Spinner = () => {
  const { classes } = useStyles();

  return (
    <Backdrop className={classes.backdrop} open>
      <CircularProgress color="inherit" />
      <div>Loading...</div>
    </Backdrop>
  );
};
export default Spinner;
