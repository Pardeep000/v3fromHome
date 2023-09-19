// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {},
  open: {
    fontSize: "10px",
    marginTop: -3,
    color: "green",
    [theme.breakpoints.down("lg")]: {
      // paddingTop: -3
    },
  },
  closed: {
    fontSize: "10px",
    marginTop: -3,
    color: "red",
    [theme.breakpoints.down("lg")]: {
      // paddingTop: -3
    },
  },
  avatar: {
    marginTop: 5,
  },
  wrap: {
    marginBottom: "10px",
    paddingBottom: "5px",
    "&:hover": {
      background: theme.custom?.background,
    },
    "& .MuiListItem-root": {
      padding: 0,
    },
  },
  icon: {
    marginTop: -15,
  },
  userName: {
    fontFamily: "poppins",
    fontWight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    height: "21px",
    //
    marginTop: 0,
    marginLeft: -1,
    color: "#272525",
  },
  userEmail: {
    fontFamily: "poppins",
    fontWight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    height: "18px",
    //
    marginTop: 0,
    marginLeft: -1,
    color: "#777777",
  },
  nameAndEmailbox: {
    marginTop: "10px",
  },
}));

export default useStyles;
