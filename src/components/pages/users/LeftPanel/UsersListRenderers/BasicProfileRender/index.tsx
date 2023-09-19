import {
  Typography,
  Avatar,
  ListItem,
  ListItemAvatar,
  Box,
} from "@mui/material";

import useStyles from "./Styles";

interface IData {
  uname: string;
  uemail: string;
}

interface BasicProfileProps {
  cellData: IData;
}

const BasicProfile: React.FC<BasicProfileProps> = ({ cellData }) => {
  const { classes } = useStyles();
  const { uname, uemail } = cellData;

  return (
    <Box className={classes.wrap}>
      <ListItem alignItems="center">
        <ListItemAvatar className={classes.avatar}>
          {/* <Avatar src={pic} /> */}
          <Avatar />
        </ListItemAvatar>
        <Box className={classes.nameAndEmailbox}>
          <Typography variant="subtitle2" className={classes.userName}>
            {uname}
          </Typography>
          <Typography variant="subtitle2" className={classes.userEmail}>
            {uemail}
          </Typography>
        </Box>
      </ListItem>
    </Box>
  );
};

const basicProfileRender: React.FC<BasicProfileProps> = ({ cellData }) => (
  <BasicProfile cellData={cellData} />
);

export default basicProfileRender;
