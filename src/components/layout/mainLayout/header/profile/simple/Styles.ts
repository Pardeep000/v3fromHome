import addAlpha from "src/theme/functions/addAlpha";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  paddingTop: {
    paddingTop: "10px",
  },
  marginLeft: {
    marginLeft: 10,
  },

  paper: {
    width: 330,
    height: 450,
    overflow: "visible",
    overflowY: "auto",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
  avatar: {
    height: "80px !important",
    width: "80px!important",
  },
  upgradeNow: {
    marginTop: 1,
    backgroundColor: "#FF8A00",
    textTransform: "capitalize",
  },
  upgrade: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  menuItem: {
    cursor: "auto !important",
    "&:hover": {
      backgroundColor: "transparent",
      cursor: "auto !important",
    },
  },
  menuItemHeight: {
    height: 40,
  },
  formControl: {
    display: "block",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  boxChip: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  profileName: {
    fontFamily: "poppins",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "5px",
    color: "#272525",
    width: "100%",
    height: "20px",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    height: 17,
    width: 17,
  },
  button: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  profilePseudonym: {
    fontFamily: "poppins",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#777777",
    width: "100%",
    height: "18px",
    display: "flex",
    justifyContent: "center",
  },
  chip: {
    height: 20,
    borderRadius: 0,
    fontSize: "9px",
    whiteSpace: "normal",
    color: "#0085FF",
    backgroundColor: addAlpha("#0085FF", 0.1),
    display: "flex",
    justifyContent: "center",
  },
}));
export default useStyles;
