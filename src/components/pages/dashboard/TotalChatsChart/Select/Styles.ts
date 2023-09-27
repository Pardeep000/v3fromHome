import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  form: {
    width: 100,
    height: 30,
    marginRight: 10,
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    "& .MuiSvgIcon-root": {
      color: theme.palette.secondary.main,
    },
  },
  inputLabel: {
    color: theme.palette.primary.main,
  },
  formControl: {
    width: "100%",
    height: "34px !important",
    alignItems: "center",
    // paddingRight: 20,
    borderRadius: "3px",
    // margin: 30,
    boxShadow: "0px 1px 4px rgba(21, 34, 50, 0.1)",
    // border: "1px solid black",
    marginTop: 20,
    zIndex: 1,
    border: "1px solid black",
  },
  menuItem: {
    "&:hover": {
      background: theme.custom?.background,
    },
  },
  select: {
    height: "inherit",
    width: "inherit",
  },
  type: {
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 400,
  },
  menu: {
    color: "#777777",
    width: "150px",
    height: "32px",
    borderRadius: "3px",
    fontFamily: "poppins",
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "400",
  },
}));

export default useStyles;
