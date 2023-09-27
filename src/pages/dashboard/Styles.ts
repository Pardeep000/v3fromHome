import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  dashboard: {
    background: theme.custom?.background,
  },
}));

export default useStyles;
