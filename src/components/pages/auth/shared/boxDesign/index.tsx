import Box from "src/components/shared/atoms/box";
import SvgIcon from "@mui/material/SvgIcon";
import useStyles from "./Styles";

const BoxDesign = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.top}>
      <SvgIcon className={classes.logo}>
        <svg viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.592.027l-4.19 1.86-7.553 8.27 3.9 2.018L8.73 22.325l4.992-2.19a2.32 2.32 0 012.379.307l1.617 1.282a.511.511 0 00.794-.219l1.336-3.522a2.317 2.317 0 011.134-1.253l3.587-1.789c.389-.194.685-.534.825-.945L29.984.384A.292.292 0 0029.711 0a.26.26 0 00-.119.027zM5.346 10.798a1.64 1.64 0 00-.9 1.001L.015 25.621a.29.29 0 00.395.354l2.598-1.14 8.137-8.908-3.9-2.018 11.79-9.19-13.688 6.079z"
            fill="#fff"
          />
        </svg>
      </SvgIcon>
    </Box>
  );
};

export default BoxDesign;
