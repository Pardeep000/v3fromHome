import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import useStyles from "./Styles";
import React from "react";
import { Typography } from "@mui/material";

type Props = {
  type: boolean;
  onTransferClick: () => void;
  text: String;
};
const ToggleImage: React.FC<Props> = ({ text, type, onTransferClick }) => {
  const { classes } = useStyles();
  return (
    <Typography className={classes.typography} onClick={onTransferClick} m={2}>
      {text}
      {type ? (
        <LeaderboardIcon className={classes.transferIcon} />
      ) : (
        <TimelineIcon className={classes.transferIcon} />
      )}
    </Typography>
  );
};

export default ToggleImage;
