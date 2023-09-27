// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";
// import { grey } from '@mui/material/colors'
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles()(() => ({
  search: {
    position: "relative",
    borderRadius: 3,
    minHeight: "unset",
    border: "0.5px solid #E8E8E8",
    marginLeft: 0,
    // width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   // marginLeft: theme.spacing(3),
    //   width: "auto",
    // },

    height: "32px",
    width: "250px",
    //
  },
  searchIcon: {
    // padding: 10,
    padding: "0 0 0 5px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default useStyles;

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `3em`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      // width: "15ch",
      width: "200px",
    },
  },
}));
