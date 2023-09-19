// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  rowDivider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default useStyles;
