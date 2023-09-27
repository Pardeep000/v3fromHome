import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  inside: {
    width: "400px",
    height: "50px",
  },
  profile: {
    width: "30px !important",
    height: "30px !important",
    marginTop: 10,
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
    // marginBottom: 10,
    fontSize: "12px",
    fontWeight: 500,
  },
  name: {
    fontWeight: 400,
    fontSize: "12px",
    fontFamily: "Poppins",
    marginLeft: -25,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  figure: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    // lineHeight: '16.94px',
    color: "#272525",
    paddingTop: 5,
    marginLeft: -40,
  },
  tooltip: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "18px",
    fontStyle: "normal",
    color: "#fff",
    lineWidth: "20px",
    background: "black",
  },
}));

export default useStyles;
