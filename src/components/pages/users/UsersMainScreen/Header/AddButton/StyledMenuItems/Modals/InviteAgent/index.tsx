import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  SvgIcon,
  Divider,
  Typography,
  Button,
  Box,
  MenuItem,
  Select,
  OutlinedInput,
} from "@mui/material";
//
import ModalLayout from "src/components/shared/atoms/ModalLayout";
import InviteUserListItem from "./InviteUserListItem";
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

const InviteAgentModal: React.FC = () => {
  const handleClose = () => {};

  const [showCopied, setShowCopied] = React.useState(false);
  const [showChooseRole, setShowChooseRole] = React.useState(false);

  const [showError, setShowError] = React.useState(true);

  const [roleLink, setRoleLink] = React.useState("");

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

  React.useEffect(() => {
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }, [showError]);

  const { classes } = useStyles();

  // const [initialFormikValues, setInitialFormikValues] = React.useState({
  const [initialFormikValues] = React.useState({
    email1: "",
    role1: "",
    email2: "",
    role2: "",
    email3: "",
    role3: "",
  });

  const validationSchema: any = Yup.object().shape({
    email1: Yup.string().email("Invalid email address"),
    role1: Yup.string().test(
      "is-required-for-email1",
      "Role is required for email 1",
      function (
        value: string | undefined,
        { parent }: { parent: Record<string, any> },
      ) {
        if (parent.email1 && parent.email1.length > 0) {
          return !!value && value !== parent.email2 && value !== parent.email3;
        }
        return true;
      },
    ),
    email2: Yup.string()
      .email("Invalid email address")
      .test(
        "is-unique-email2",
        "Email has already been written",
        function (
          value: string | undefined,
          { parent }: { parent: Record<string, any> },
        ) {
          if (parent.email1 && parent.email1.length > 0) {
            return value !== parent.email1;
          }
          return true;
        },
      ),
    role2: Yup.string().test(
      "is-required-for-email2",
      "Role is required for email 2",
      function (
        value: string | undefined,
        { parent }: { parent: Record<string, any> },
      ) {
        if (parent.email2 && parent.email2.length > 0) {
          return !!value && value !== parent.email1 && value !== parent.email3;
        }
        return true;
      },
    ),
    email3: Yup.string()
      .email("Invalid email address")
      .test(
        "is-unique-email3",
        "Email has already been written",
        function (
          value: string | undefined,
          { parent }: { parent: Record<string, any> },
        ) {
          if (parent.email3 && parent.email3.length > 0) {
            return value !== parent.email1 && value !== parent.email2;
          }
          return true;
        },
      ),
    role3: Yup.string().test(
      "is-required-for-email3",
      "Role is required for email 3",
      function (
        value: string | undefined,
        { parent }: { parent: Record<string, any> },
      ) {
        if (parent.email3 && parent.email3.length > 0) {
          return !!value && value !== parent.email1 && value !== parent.email2;
        }
        return true;
      },
    ),
  });

  const [emailRequired, setEmailRequired] = React.useState(false);
  // const [topError, setTopError] = useState(
  const [topError] = useState("At least one email address is required");

  interface FormValuesProps {
    email1: string;
    role1: string;
    email2: string;
    role2: string;
    email3: string;
    role3: string;
  }
  const updatedHandleSubmit = async (
    values: FormValuesProps,
    formikHelpers: any,
  ) => {
    formikHelpers.setSubmitting(false);
    try {
      //
      if (!values.email1 && !values.email2 && !values.email3) {
        setEmailRequired(true);
        setTimeout(() => {
          setEmailRequired(false);
        }, 3000);
      } else {
        setEmailRequired(false);

        // inviting agent

        const tempData = [];
        if (values.email1 !== "") {
          tempData.push({
            email: values.email1,
            designation:
              // eslint-disable-next-line no-nested-ternary
              values.role1 === "Super Admin"
                ? 4
                : values.role1 === "Manager"
                ? 3
                : 14,
          });
        }
        if (values.email2 !== "") {
          tempData.push({
            email: values.email2,
            designation:
              // eslint-disable-next-line no-nested-ternary
              values.role2 === "Super Admin"
                ? 4
                : values.role2 === "Manager"
                ? 3
                : 14,
          });
        }
        if (values.email3 !== "") {
          tempData.push({
            email: values.email3,
            designation:
              // eslint-disable-next-line no-nested-ternary
              values.role3 === "Super Admin"
                ? 4
                : values.role3 === "Manager"
                ? 3
                : 14,
          });
        }
      }
      //
    } catch (error) {
      // console.log("error:", error);
    }
  };

  const formik = useFormik({
    initialValues: initialFormikValues,
    validationSchema,
    onSubmit: updatedHandleSubmit,
  });
  const fieldList = [
    {
      emailName: "email1",
      emailValue: formik.values.email1,
      handleChange: formik.handleChange,
      onErrorEmail:
        formik.touched.email1 && Boolean(formik.errors.email1)
          ? formik.errors.email1
          : undefined,
      roleName: "role1",
      emailErrorMessage: formik.errors.email1,
      roleErrorMessage: formik.errors.role1,
      roleValue: formik.values.role1,
      onErrorRole:
        formik.touched.role1 && Boolean(formik.errors.role1)
          ? formik.errors.role1
          : undefined,
    },
    {
      emailName: "email2",
      emailValue: formik.values.email2,
      handleChange: formik.handleChange,
      onErrorEmail:
        formik.touched.email2 && Boolean(formik.errors.email2)
          ? formik.errors.email2
          : undefined,
      roleName: "role2",
      emailErrorMessage: formik.errors.email2,
      roleErrorMessage: formik.errors.role2,
      roleValue: formik.values.role2,
      onErrorRole:
        formik.touched.role2 && Boolean(formik.errors.role2)
          ? formik.errors.role2
          : undefined,
    },
    {
      emailName: "email3",
      emailValue: formik.values.email3,
      handleChange: formik.handleChange,
      onErrorEmail:
        formik.touched.email3 && Boolean(formik.errors.email3)
          ? formik.errors.email3
          : undefined,
      roleName: "role3",
      emailErrorMessage: formik.errors.email3,
      roleErrorMessage: formik.errors.role3,
      roleValue: formik.values.role3,
      onErrorRole:
        formik.touched.role3 && Boolean(formik.errors.role3)
          ? formik.errors.role3
          : undefined,
    },
  ];
  const [futureTime, setFutureTime] = React.useState("");

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
    //
    setFutureTime(localFutureTime);
    //
  });
  return (
    <ModalLayout headerText="Invite Agents" modalName="Invite Agents">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          className={classes.email}
          sx={{
            margin: showError ? "0px 0px 0px 0px" : "10px 0px 0px 0px",
          }}
          variant="body1"
        >
          Email
        </Typography>
        {emailRequired && (
          <Typography
            className={classes.email}
            sx={{
              margin: showError ? "0px 0px 0px 0px" : "10px 0px 0px 0px",
              color: "red",
            }}
            variant="body1"
          >
            {topError}
          </Typography>
        )}
      </Box>

      <Box component="form" onSubmit={formik.handleSubmit}>
        <Box sx={{ padding: "2px 0px 0px 0px" }}>
          <>
            {fieldList.map(
              ({
                emailName,
                emailValue,
                handleChange,
                onErrorEmail,
                roleName,
                emailErrorMessage,
                roleErrorMessage,
                roleValue,
                onErrorRole,
              }) => {
                return (
                  <InviteUserListItem
                    emailName={emailName}
                    emailValue={emailValue}
                    handleChange={handleChange}
                    onErrorEmail={onErrorEmail}
                    roleName={roleName}
                    emailErrorMessage={emailErrorMessage}
                    roleErrorMessage={roleErrorMessage}
                    roleValue={roleValue}
                    onErrorRole={onErrorRole}
                  />
                );
              },
            )}
          </>

          <Typography className={classes.share} variant="body1">
            Shareable invite link
          </Typography>

          <Box style={{ display: "flex" }}>
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
              value={roleLink}
              onChange={(event) => setRoleLink(event.target.value)}
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

            {!showCopied ? (
              <Button
                onClick={() => {
                  //
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
                className={classes.copylink}
              >
                Copy Link
              </Button>
            ) : (
              <Button className={classes.copied}>Copied!</Button>
            )}
          </Box>

          {showChooseRole && (
            <Typography className={classes.errorStyle} variant="body1">
              Select role before sharing link
            </Typography>
          )}

          <Typography className={classes.security} variant="body1">
            For security reason, this link will expire in 6 days ({futureTime}
            ). <span className={classes.generate}>Generate new link</span>
          </Typography>
        </Box>
        <Divider className={classes.divider} />

        <Box className={classes.btnBar}>
          <Button
            onClick={handleClose}
            variant="contained"
            className={classes.cancel}
            type="submit"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className={classes.invite}
            type="submit"
            // disabled={inviteAgentsQueryLoading}
            endIcon={
              // inviteAgentsQueryLoading && (
              <CircularProgress size={13} color="inherit" />
            }
          >
            invite
          </Button>
        </Box>
      </Box>
    </ModalLayout>
  );
};

export default InviteAgentModal;
