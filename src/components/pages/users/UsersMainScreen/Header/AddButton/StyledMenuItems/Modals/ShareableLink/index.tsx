import React, { useState, FormEvent } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  SvgIcon,
  OutlinedInput,
} from "@mui/material";
import ModalLayout from "src/components/shared/atoms/ModalLayout";
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

const ShareableLinkModal: React.FC = () => {
  const [showCopied, setShowCopied] = useState(false);
  const [showChooseRole, setShowChooseRole] = useState(false);

  const [roleLink, setRoleLink] = useState("");

  React.useEffect(() => {
    if (roleLink !== "") {
      setShowChooseRole(false);
    }
  }, [roleLink]);
  //

  React.useEffect(() => {
    if (showChooseRole === true) {
      setTimeout(() => {
        setShowChooseRole(false);
      }, 2000);
    }
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  const { classes } = useStyles();
  const [futureTime, setFutureTime] = useState("");

  React.useEffect(() => {
    const currentUStime = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      hour12: false,
    });
    const currentUStimeFormat = new Date(currentUStime);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const localFutureTime = `${currentUStimeFormat.getDate() + 6} ${
      monthNames[currentUStimeFormat.getMonth()]
    } ${currentUStimeFormat.getFullYear()}`;
    setFutureTime(localFutureTime);
  });
  return (
    <ModalLayout
      headerText="Shareable invite link"
      modalName="Shareable invite link"
    >
      <Typography
        sx={{
          width: "100%",
          height: "18px",
          fontFamily: "poppins",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "18px",
          color: "#272525",
        }}
        variant="body1"
      >
        Anyone can use the link below to join your team at Kuikwit.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ padding: "10px 0px 0px 0px" }}>
          <div style={{ display: "flex", marginBottom: "0.5rem" }}>
            <OutlinedInput
              className={classes.shareablelink}
              value={`https://salesc.greenmarketing.us/join/${
                // eslint-disable-next-line no-nested-ternary
                roleLink === "Super Admin" ? 4 : roleLink === "Manager" ? 3 : 14
              }/${1}/asdk343ui3lkdjf34934jdklfje94i`}
            />

            <Select
              className={classes.selectInput}
              IconComponent={FilledArrowIcon}
              sx={{
                "& legend": {
                  width: 0,
                },
              }}
              label="Gender"
              value={roleLink}
              onChange={(event) => setRoleLink(event.target.value)}
              fullWidth
              // margin="normal"
              displayEmpty
              inputProps={{
                disableUnderline: true,
                style: { backgroundColor: "grey", borderBottom: "none" },
              }} //
              disableUnderline
            >
              <MenuItem
                value=""
                disabled
                className={classes.selectMenuItem}
                sx={{
                  display: "none",
                }}
              >
                <Typography className={classes.selectText}>
                  select anyone...
                </Typography>
              </MenuItem>
              <MenuItem value="Super Admin" className={classes.selectMenuItem}>
                Super Admin
              </MenuItem>
              <MenuItem value="Manager" className={classes.selectMenuItem}>
                Manager
              </MenuItem>
              <MenuItem value="Agent" className={classes.selectMenuItem}>
                Agent
              </MenuItem>
            </Select>

            {/* showCopied */}
            {!showCopied ? (
              <Button
                onClick={() => {
                  // const inviteLink = document.getElementById("invite-link")
                  // window.navigator.clipboard.writeText(inviteLink.value)
                  // setShowCopied(true)
                  const inviteLink = document.getElementById(
                    "invite-link",
                  ) as HTMLInputElement;
                  if (roleLink !== "") {
                    if (inviteLink) {
                      window.navigator.clipboard.writeText(inviteLink.value);
                      setShowCopied(true);
                    }
                  } else {
                    setShowChooseRole(true);
                  }
                }}
                sx={{
                  width: "75px",
                  // height: '30px',
                  height: "38px",
                  backgroundColor: "#F4F4F4",
                  borderLeft: "1px solid #E8E8E8",
                  borderRadius: "0px 3px 3px 0px",
                  color: "#777777",
                  fontFamily: "poppins",
                  fontSize: "10px",
                  lineHeight: "15px",
                  fontWeight: "400",
                  marginLeft: "10px",
                }}
              >
                Copy Link
              </Button>
            ) : (
              <Button
                sx={{
                  width: "75px",
                  // height: '30px',
                  height: "38px",
                  backgroundColor: "#22AA61",
                  borderLeft: "1px solid #E8E8E8",
                  borderRadius: "0px 3px 3px 0px",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "10px",
                  color: "#FFFFFF",
                  lineHeight: "15px",
                  marginLeft: "10px",
                  //
                  "&:hover": {
                    backgroundColor: "#22AA61",
                    color: "#FFFFFF",
                  },
                }}
              >
                Copied!
              </Button>
            )}
          </div>

          {showChooseRole && (
            <Typography
              className={classes.errorStyle}
              sx={{
                color: "red",
                marginTop: "5px",
              }}
              variant="body1"
            >
              Select role before sharing link
            </Typography>
          )}

          <Typography
            sx={{
              // width: '420px',
              width: "100%",
              height: "15px",

              fontFamily: "poppins",
              fontWeight: "400",
              // fontSize: '10px',
              // lineHeight: '15px',
              fontSize: "12px",
              lineHeight: "17px",
              color: "#838383",
              marginTop: "10px",
              marginBottom: "20px",
            }}
            variant="body1"
          >
            For security reason, this link will expire in 6 days ({futureTime}
            ).{" "}
            <span
              style={{
                color: "#4D1277",
                cursor: "pointer",
                fontWeight: "500",
                fontFamily: "poppins",
                fontSize: "12px",
                lineHeight: "17px",
              }}
            >
              Generate new link
            </span>
          </Typography>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default ShareableLinkModal;
