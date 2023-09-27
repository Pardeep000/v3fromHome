import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import useStyles from "./Styles";

interface StatusRenderProps {
  cellData: string;
}

const Status: React.FC<StatusRenderProps> = ({ cellData }) => {
  const { classes } = useStyles();
  const color = cellData === "BLOCKED" ? "#E34D59" : "#00BA34";
  return (
    <Box className={classes.statusIcon}>
      <FiberManualRecordIcon className={classes.statusIcon} sx={{ color }} />
      <Typography className={classes.statusText} sx={{ color }}>
        {cellData}
      </Typography>
    </Box>
  );
};

const statusRender: React.FC<StatusRenderProps> = ({ cellData }) => (
  <Status cellData={cellData} />
);

export default statusRender;
