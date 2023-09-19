import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  top: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    width: "50px",
    height: "50px",
    // marginTop: 120,
    //
    // [theme.breakpoints.down('md')]: {
    //   marginTop: "210px",
    // },
    // [theme.breakpoints.down('sm')]: {
    //   marginTop: "210px",
    // },
    // [theme.breakpoints.up('md')]: {
    //   marginTop: "120px",
    // },
    // //laptop
    // [theme.breakpoints.down('lg')]: {
    //   marginTop: "210px",
    // },
    //
    [theme.breakpoints.down("md")]: {
      marginTop: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "80px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "120px",
    },
    // laptop
    [theme.breakpoints.down("lg")]: {
      marginTop: "80px",
    },
    //
    marginBottom: 20,
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    // background: url("src/")
  },
  logo: {
    overflow: "visible",
    width: "80%",
    height: "100%",
  },
}));
export default useStyles;
