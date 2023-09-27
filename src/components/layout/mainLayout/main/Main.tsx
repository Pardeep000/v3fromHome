import { styled } from "@mui/material/styles";

const Main = styled("main")(({ theme }) => ({
  ...{
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 80,
    marginRight: 20,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${60}px)`,
    [theme.breakpoints.down("md")]: {
      marginLeft: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
    },
  },
}));

export default Main;
