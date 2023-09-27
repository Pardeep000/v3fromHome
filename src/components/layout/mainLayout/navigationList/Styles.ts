import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
  },
  label: {
    color: "#fff",
  },
  listItem: {
    display: "block",
    padding: 0,
    poPoppinsEvents: "none",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
  listItemButton: {
    px: 2.5,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    justifyContent: "center",
  },
  listItemButtonOpen: {
    justifyContent: "initial !important",
  },
  listItemButtonIcon: {
    minWidth: 0,
    marginRight: "auto",
    marginLeft: "3px",
    justifyContent: "center",
  },
  listItemButtonIconOpen: {
    marginRight: "3 !important",
  },
  drawer: {
    position: "fixed",
    zIndex: 999,
    left: 0,
    top: 0,
    height: "100vh",
    width: "4.166%",
    backgroundColor: "#f5f5f5",
    transition: "width 0.2s ease-in-out",
    "&:hover": {
      width: 200,
    },
  },
  top: {
    borderRadius: "5px",
    width: "40px",
    marginLeft: 25,
    marginTop: -15,
    height: "30px",
    display: "flex",
    alignItem: "center",
    position: "fixed",
    paddingTop: 1.5,
    justifyContent: "center",
  },
  icon: {
    fontSize: 25,
    position: "fixed",
  },
  back: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  },
  full: {
    marginRight: -5,
  },
  logo: {
    overflow: "visible",
    width: "42px",
    height: "40px",
    top: 13,
    left: 10,
    position: "fixed",
  },
  rectangle: {
    backgroundColor: theme.palette.primary.light,
  },
  navListItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      navListText: {
        color: theme.palette.primary.main,
        fontWeight: "500",
        fontSize: "12px",
        background: "rgb(237,231,241)",
        transition: theme.transitions.create(["color"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.standard,
          delay: 100,
        }),
      },
    },
  },
  navListIcon: {
    margin: "auto",
    textAlign: "center",
    color: theme.palette.primary.main,
    fontSize: 28,
  },
  navListText: {
    marginTop: 0,
    textAlign: "left",
    color: theme.palette.primary.main,
  },
  listLink: {
    textDecoration: "none",
    display: "flex",
    color: "#777777",
  },
  linkSelected: {
    color: "#4D1277",
    fontWeight: "bold",
    pointerEvents: "none",
    textDecoration: "none",
  },
  linkSelectedInner: {
    color: theme.palette.primary.main,
  },
  linkSelectedtext: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 5,
    color: "#4D1277",
    fontWeight: 700,
    pointerEvents: "none",
    textDecoration: "none",
  },
  listItemTextTypography: {
    height: "30px",
    alignContent: "center",
    paddingTop: 4,
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Poppins",
    marginLeft: 3,
    opacity: 0,
    textDecoration: "none",
    color: "#777777",
  },
  listItemTextTypographyOpen: {
    fontWeight: 400,
    opacity: 1,
    marginLeft: 55,
  },
  listItemTextTypographyLocation: {
    color: "primary",
  },
  logout: {
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Poppins",
    opacity: 1,
    textDecoration: "none",
    color: "red",
  },
  logoutOpen: {
    opacity: 1,
  },
  uperItems: {
    display: "block",
    padding: 0,
    height: "45px",
  },
  listBelow: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
  },
  listItemBelowButton: {
    justifyContent: "center",
    width: 240,
    marginLeft: 3,
    px: 2.5,
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },
  listItemBelowButtonOpen: {
    justifyContent: "initial !important",
  },
  logoutButton: {
    marginLeft: 3,
    px: 2.5,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    justifyContent: "center",
  },
  logoutButtonOpen: {
    justifyContent: "initial !important",
  },
  logoutText: {
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Poppins",
    opacity: 0,
    textDecoration: "none",
    color: "red",
  },
  logoutTextOpen: {
    opacity: 1,
  },
  help: {
    height: "30px",
    alignContent: "center",
    padding: 0.5,
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Poppins",
    marginLeft: 30,
    opacity: 0,
    textDecoration: "none",
    color: "#777777",
  },
  listItemIcon: {
    minWidth: 0,
    marginRight: "auto",
    justifyContent: "center",
  },
  listItemIconOpen: {
    marginRight: 28,
  },
}));

export default useStyles;
