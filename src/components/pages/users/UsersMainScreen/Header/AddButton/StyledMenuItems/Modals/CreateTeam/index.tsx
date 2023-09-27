import {
  CircularProgress,
  FormHelperText,
  OutlinedInput,
  Box,
  Typography,
  Button,
  Avatar,
  ListItem,
  Chip,
} from "@mui/material";
// import AgentModal from "../ChooseAgents/ChooseAgents";
// import ManagerModal from "../ChooseManagers/ChooseManager";
// import { InviteListType } from "./Types";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
// import useDocumentTitle from "../../../../../utils/useDocumentTitle";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalLayout from "src/components/shared/atoms/ModalLayout";
import ChooseAgentModal from "./ChooseAgents";
import ChooseManagerModal from "./ChooseManager";
import useStyles from "./Styles";

const chipSX = {
  height: "14px",
  fontWeight: "400",
  fontSize: "8px",
  lineHeight: "14px",
  boxShadow: "none",
  //
  "& .MuiChip-label": {
    padding: "0px 2px",
  },
};
const chipOrange = {
  ...chipSX,
  color: "#FF8A00",
  backgroundColor: "rgba(255, 138, 0,0.05)",
  borderRadius: "2px",
  height: "18px",
};

const chipSX2 = {
  height: "14px",
  fontWeight: "400",
  fontSize: "8px",
  lineHeight: "14px",
  boxShadow: "none",
  //
  "& .MuiChip-label": {
    padding: "0px 2px",
  },
};

const chipBlue = {
  ...chipSX2,
  color: "#0085FF",
  backgroundColor: "rgba(0, 133, 255,0.05)",
  borderRadius: "2px",
  height: "18px",
};

interface InviteListType {
  name: string;
  id: string;
  picture: string;
  isSelected: boolean;
  designation: {
    paneltype: string;
  };
}

const TeamCreate: React.FC = () => {
  const { classes } = useStyles();
  //   const [inviteList, setInviteList] = useState<any>([]);
  const [inviteList] = useState<any>([]);
  //  // validation schema using Yup
  const validationSchema = Yup.object().shape({
    teamName: Yup.string()
      .required("Team name is required")
      .min(4, "Team name must be at least 4 characters"),
  });

  const fieldStyle = {
    width: "360px",
    height: "38px",
    border: "0.0px solid #BDC0CC",
    borderRadius: "3px",
    background: "#FFFFFF",
    padding: "0px",
    marginTop: "0px",
    marginBottom: "0px",
    //
    "& .MuiInputBase-input": {
      "&::placeholder": {
        color: "purple",
      },
      "&$input": {
        color: "red",
        fontWeight: "bold",
      },
    },
  };

  //   const [openChooseAgents, setOpenChooseAgents] = useState(false);
  const handleClose = () => {};

  const handleSubmit = () => {};

  return (
    <ModalLayout headerText="Create Team" modalName="Create Team">
      <Formik
        initialValues={{
          teamName: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik: any) => (
          <Box component="form" onSubmit={formik.handleSubmit}>
            <OutlinedInput
              name="teamName"
              className={classes.root}
              style={fieldStyle}
              value={formik.values.teamName}
              onChange={formik.handleChange}
              fullWidth
              placeholder="Add a name"
              inputProps={{
                disableUnderline: true,
                className: classes.teamNameStyle,
              }}
            />
            <FormHelperText className={classes.formerHelperTextStyle}>
              {formik.errors.teamName}
            </FormHelperText>
            <Box className={classes.rowStyle}>
              <Box
                onClick={(e) => {
                  e.preventDefault();
                  //   setOpenChooseAgents(true);
                }}
                className={classes.agentRow}
              >
                <ChooseAgentModal />
              </Box>

              <Box
                onClick={(e) => {
                  e.preventDefault(); // setOpenChooseManager(true);
                }}
                className={classes.managerRow}
              >
                <ChooseManagerModal />
              </Box>
            </Box>
            <FormHelperText sx={{ color: "red" }}>
              {/* {memebersSelectionError} */}
            </FormHelperText>
            {Array.isArray(inviteList) && inviteList !== null && (
              <Typography
                className={classes.selectedMembersList}
                variant="subtitle2"
              >
                Members
              </Typography>
            )}

            <Box className={classes.selectedMembersList}>
              {Array.isArray(inviteList) &&
                inviteList !== null &&
                // inviteList.map((item: InviteListType, index: number) => (
                inviteList.map((item: InviteListType) => (
                  <ListItem
                    alignItems="center"
                    sx={{
                      padding: "0px",
                      justifyContent: "space-between",
                    }}
                    // key={index}
                  >
                    <Box className={classes.selectedMemberRow}>
                      <Avatar
                        className={classes.memberAvatarName}
                        alt="John Doe"
                        src={item.picture}
                      />
                      <Typography
                        className={classes.selectedMemberName}
                        variant="subtitle2"
                      >
                        {item.name}
                      </Typography>
                      <Chip
                        label={item.designation.paneltype}
                        sx={
                          item.designation.paneltype === "AGENT"
                            ? chipBlue
                            : chipOrange
                        }
                      />
                    </Box>
                    <CloseIcon
                      className={classes.cutMember}
                      //   onClick={() => handleRemoveUser(index)}
                      onClick={() => {}}
                    />
                  </ListItem>
                ))}
            </Box>
            <Box className={classes.bottomButtonBar}>
              <Button
                onClick={handleClose}
                variant="contained"
                type="submit"
                className={classes.cancelButton}
              >
                Cancel
              </Button>
              <Button
                className={classes.createButton}
                variant="contained"
                type="submit"
                // disabled={CreateTeamMutationLoading}
                endIcon={
                  //   CreateTeamMutationLoading && (
                  <CircularProgress size={13} color="inherit" />
                }
              >
                Create
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
      {/* {openChooseAgents && (
    <AgentModal
      check={openChooseAgents}
      closeModal={closeNestedModal}
      setInviteList={setInviteList}
      inviteList={inviteList}
    />
  )}
  {openChooseManager && (
    <ManagerModal
      check={openChooseManager}
      closeModal={closeNestedModal2}
      setInviteList={setInviteList}
      inviteList={inviteList}
    />
  )} */}
    </ModalLayout>
  );
};

export default TeamCreate;
