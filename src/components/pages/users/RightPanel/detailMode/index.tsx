import React from "react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Collapse,
  MenuItem,
  Select,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import FixedVirtualizedList from "../FixedVirtualizedList";
import useStyles from "./Styles";

const Index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleChatChannels = () => {
    setExpanded(!expanded);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.userProfile}>
        <Avatar
          alt="John Doe"
          //   src={data.picture}
          sx={{ height: "80px", width: "80px" }}
        />
        <Typography variant="subtitle2" className={classes.profileName}>
          {/* {data?.name} */}
          MainSuperAdmin
        </Typography>

        <Typography variant="subtitle2" className={classes.profilePseudonym}>
          {/* {data?.pseudonym} */}
          admin
        </Typography>

        <Typography variant="subtitle2" className={classes.profileRole}>
          {/* {data?.designation?.paneltype} */}
          SUPERADMIN
        </Typography>
      </Box>

      <Typography variant="subtitle2" className={classes.profileInfo}>
        Personal info
      </Typography>

      <Typography variant="subtitle2" className={classes.fullName}>
        Full name
      </Typography>
      {/* <Box className={classes.text1Box}>{data?.name}</Box> */}
      <Box className={classes.fullNameValue}>MainSuperAdmin</Box>

      <Box className={classes.rowBox}>
        <Box className={classes.rowBox1}>
          <Typography variant="subtitle2" className={classes.pseudonym}>
            Pseudonym
          </Typography>

          {/* <Box className={classes.text2Box}>{data?.pseudonym}</Box> */}
          <Box className={classes.pseudonymValue}>psyuedynym</Box>
        </Box>

        <Box className={classes.rowBox2}>
          <Typography variant="subtitle2" className={classes.jobTitle}>
            Job title
          </Typography>
          {/* <Box className={classes.text3Box}>{data?.designation?.paneltype}</Box> */}
          <Box className={classes.jobTitleValue}>adminStatus</Box>
        </Box>
      </Box>

      <Typography variant="subtitle2" className={classes.uemail}>
        Email
      </Typography>

      {/* <Box className={classes.text4Box}>{data?.email}</Box> */}
      <Box className={classes.uemailValue}>umair_naseer123@yahoo.com</Box>

      <Typography variant="subtitle2" className={classes.phoneNumber}>
        Phone number
      </Typography>

      {/* <Box className={classes.text5Box}>{data?.number}</Box> */}
      <Box className={classes.phoneNumberValue}>032023032623</Box>

      <Typography variant="subtitle2" className={classes.chatLimit}>
        Chat limit
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          // variant="outlined"
          disabled
          type="number"
          //   value={data?.agentlimitchatassign}
          value={0}
          InputProps={{
            disableUnderline: true,
            inputProps: {
              style: {
                padding: "4px 0px 4px 5px",
                width: "60px",
                height: "20px",
              },
            },
          }}
        />
        <Typography variant="subtitle2" className={classes.concurrentChat}>
          Concurrent chat
        </Typography>
      </Box>

      <Typography variant="subtitle2" className={classes.selectStatus}>
        Select status
      </Typography>

      <Select
        className={classes.selectStyling}
        // value={data?.status}
        value="admin"
        fullWidth
        displayEmpty
        inputProps={{
          disableUnderline: true,
          style: { borderBottom: "none" },
        }} //
        disableUnderline
        disabled
        //
      >
        <MenuItem value="ACTIVE" className={classes.MenuItem}>
          <FiberManualRecordIcon className={classes.active} />
          Active
        </MenuItem>
        <MenuItem value="BLOCKED" className={classes.MenuItem}>
          <FiberManualRecordIcon className={classes.block} />
          Block
        </MenuItem>
      </Select>

      <Box>
        <Box className={classes.chatchannels} onClick={handleChatChannels}>
          <Typography variant="subtitle2" className={classes.collapseText}>
            Chat Channels
          </Typography>{" "}
          {expanded ? (
            <RemoveIcon className={classes.icon} />
          ) : (
            <AddIcon className={classes.icon} />
          )}
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {/* {getSpecificPagesLoading} */}
          {/* {!getSpecificPagesLoading && (
            <FixedVirtualizedList data={pagesNames} />
          )} */}
          {true && (
            <FixedVirtualizedList
              data={[
                {
                  id: "587",
                  name: "Cable TV & Internet Bundles",
                },
                { id: "588", name: "Satellite Cable" },
              ]}
            />
          )}
        </Collapse>
      </Box>
    </Box>
  );
};

export default Index;
