import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import useStyles from "./Styles";

interface statusRenderProps {
  cellData: string;
}

const Status: React.FC<statusRenderProps> = ({ cellData }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.statusIcon}>
      <FiberManualRecordIcon
        className={classes.statusIcon}
        sx={{
          color:
            cellData === "BLOCKED"
              ? "#E34D59"
              : cellData === "ACTIVE"
              ? "#00BA34"
              : "#FF8A00",
        }}
      />
      <Typography
        className={classes.statusText}
        sx={{
          color:
            cellData === "BLOCKED"
              ? "#E34D59"
              : cellData === "ACTIVE"
              ? "#00BA34"
              : "#FF8A00",
        }}
      >
        {cellData}
      </Typography>
    </Box>
  );
};

const statusRender: React.FC<statusRenderProps> = ({ cellData }) => (
  <Status cellData={cellData} />
);

export default statusRender;
