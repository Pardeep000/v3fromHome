import React from "react";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SvgIcon, OutlinedInput, Typography } from "@mui/material";
import useStyles from "./Styles";

const FilledArrowIcon = () => {
  return (
    <SvgIcon style={{ position: "relative", left: "-150px" }}>
      <path
        d="M16.5 9.5h-9c-.3 0-.5.2-.5.5v2c0 .2.1.4.2.5l3.4 3.4c.4.4 1 .4 1.4 0l3.4-3.4c.1-.1.2-.3.2-.5v-2c0-.3-.2-.5-.5-.5z"
        fill="currentColor"
      />
      <polygon points="7,10.5 12,15.1 17,10.5" fill="currentColor" />
    </SvgIcon>
  );
};

interface Props {
  emailName: string;
  emailValue: string;
  handleChange: () => void;
  onErrorEmail: any;
  roleName: string;
  roleValue: string;
  onErrorRole: any;
  emailErrorMessage: string;
  roleErrorMessage: string;
}
// const activeUserDetail: string | null =
//   localStorage.getItem("ActiveUserdetail");
// const mainSuperAdminId: number | null = activeUserDetail
//   ? Number(JSON.parse(activeUserDetail).mainSuperAdminId)
//   : null;

const InviteUserListItem: React.FC<Props> = ({
  emailName,
  emailValue,
  handleChange,
  onErrorEmail,
  roleName,
  roleValue,
  onErrorRole,
  roleErrorMessage,
  emailErrorMessage,
}) => {
  const { classes } = useStyles();
  return (
    <>
      <div style={{ marginBottom: "5px" }}>
        <OutlinedInput
          className={classes.root}
          name={emailName}
          value={emailValue}
          onChange={handleChange}
          onError={onErrorEmail}
          //
          fullWidth
          placeholder="Enter email address to invite"
        />
        <Select
          className={classes.selectInput}
          IconComponent={FilledArrowIcon}
          sx={{
            "& legend": {
              width: 0,
            },
          }}
          name={roleName}
          value={roleValue}
          onChange={handleChange}
          onError={onErrorRole}
          //
          fullWidth
          displayEmpty
          inputProps={{
            disableUnderline: true,
            style: { borderBottom: "none" },
          }} //
          disableUnderline
          //
        >
          <MenuItem
            value=""
            disabled
            className={classes.selectMenuItem}
            style={{
              display: "none",
            }}
          >
            <Typography className={classes.selectText}>
              select anyone...
            </Typography>
          </MenuItem>
          {/* {mainSuperAdminId === Number(authUserId) && ( */}
          <MenuItem value="Super Admin" className={classes.selectMenuItem}>
            Super Admin
          </MenuItem>
          {/* {authPanelType !== "MANAGER" && ( */}
          <MenuItem value="Manager" className={classes.selectMenuItem}>
            Manager
          </MenuItem>
          <MenuItem value="Agent" className={classes.selectMenuItem}>
            Agent
          </MenuItem>
        </Select>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "-0.5rem",
          marginBottom: "0.5rem",
        }}
      >
        {onErrorEmail && (
          <FormHelperText className={classes.errorStyle} error>
            {emailErrorMessage}
          </FormHelperText>
        )}
        {onErrorRole && (
          <FormHelperText className={classes.errorStyle} error>
            {roleErrorMessage}
          </FormHelperText>
        )}
      </Box>
    </>
  );
};

export default InviteUserListItem;
