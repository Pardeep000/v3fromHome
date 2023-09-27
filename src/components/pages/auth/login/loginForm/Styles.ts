import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  marginTop: {
    marginTop: 10,
  },
  terms: {
    margin: "0px !important",
    maxWidth: "300px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& .MuiSvgIcon-root": { fontSize: 20 },
    //
    // extra large
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
  terms2: {
    //
    [theme.breakpoints.up("md")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "25px",
      minWidth: "85px",
    },
    // laptop
    [theme.breakpoints.down("lg")]: {
      marginLeft: "35px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "3px",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "1px",
    },
  },
  terms1: {
    //
    marginBottom: "0px",
    [theme.breakpoints.up("md")]: {
      width: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "75px",
    },
    // extra large
    [theme.breakpoints.up("xl")]: {
      width: "50%",
    },
  },
  label: {
    margin: "0px !important",
    fontSize: "11px",
    [theme.breakpoints.up("md")]: {
      width: "295px",
      "& .MuiLink-root": {
        WebkitAlignItems: "flex-end",
        textDecoration: "none",
        marginRight: 25,
      },
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "10px",
      "& .MuiLink-root": {
        WebkitAlignItems: "flex-end",
        textDecoration: "none",
        marginRight: 0,
      },
    },
    // laptop
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    // extra large
    [theme.breakpoints.up("xl")]: {
      width: "18.5vw",
      // fontSize: '1.375rem',
    },
    //
    //
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    lineHeight: "15px",
    fontWeight: 450,
  },
}));
export default useStyles;
