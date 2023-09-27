import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  //
  footer: {
    //
    width: "100% !important",
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
    "& .MuiTypography-root": {
      fontSize: "12px",
      color: theme.palette.text.primary,
      fontWeight: 500,
      lineHeight: "18px",
      //
      [theme.breakpoints.up("xl")]: {
        textAlign: "center",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        width: "65%",
      },
      [theme.breakpoints.up("lg")]: {
        width: "100%",
        textAlign: "center",
      },

      //
    },
    "& .MuiLink-root": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
    //
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
    },
    [theme.breakpoints.up("xl")]: {
      width: "19%",
      textAlign: "center",
    },
  },
}));

export default useStyles;
