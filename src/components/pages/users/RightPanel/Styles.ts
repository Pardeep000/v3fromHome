import { makeStyles } from "tss-react/mui";
//
const useStyles = makeStyles()((theme) => ({
  outerBox: {
    height: "auto",
    width: "280px",
    marginLeft: "20px",
    backgroundColor: "#FFFFFF",
    //
    boxShadow: "0px 5px 10px rgba(127, 63, 152, 0.1)",
    borderRadius: "10px",
    // laptop
    [theme.breakpoints.down("lg")]: {
      maxHeight: "83vh",
      overflowY: "auto",
      // backgroundColor:"orange"
    },
  },
}));
export default useStyles;

// // eslint-disable-next-line import/no-extraneous-dependencies
// import { makeStyles } from "tss-react/mui";

// const useStyles = makeStyles()((theme) => ({
//   rootPanel: {
//     marginLeft:"20px",
//     // backgroundColor:"orange",
//     backgroundColor: "#FFFFFF",
//     width: "280px",
//     boxShadow: "0px 5px 10px rgba(127, 63, 152, 0.1)",
//     borderRadius: "10px",
//     // height: "calc(100% + 20px)",
//     //////////////////////////////////////
//     //laptop
//     // [theme.breakpoints.down("lg")]: {
//     //   maxHeight: "83vh",
//     //   overflowY: "auto",
//     //   // backgroundColor:"orange"
//     // },
//     //
//   },
// }));

// export default useStyles;
