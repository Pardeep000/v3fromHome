import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Collapse,
  MenuItem,
  Select,
  OutlinedInput,
  CircularProgress,
  FormHelperText,
  Button,
} from "@mui/material";

import AddImageAvatar from "src/components/shared/atoms/addImageAvatar/AddImageAvatar";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import VirtualizedList from "src/components/shared/atoms/VirtualizedList";
import { BackendErrorProps } from "./Types";

import useStyles from "./Styles";

const obj = {
  id: "587",
  name: "Cable TV & Internet Bundles",
};

const pagesList = Array.from({ length: 5 }, () => obj);

const EditMode = () => {
  const { classes } = useStyles();
  const [expanded, setExpanded] = useState(false);

  const [file, setFile] = useState<any>(null);
  const [, setNewImageUploaded] = useState(false);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const [backendError] = useState<BackendErrorProps | null>(null);

  const openFileUpload = () => {
    setFile(null);
    setNewImageUploaded(true);
    if (hiddenFileInput.current !== null) {
      hiddenFileInput?.current.click();
    }
  };

  const [preview, setPreview] = useState<string | undefined | null>(
    "data.picture",
  );
  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    // eslint-disable-next-line consistent-return
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleSelectImage = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const val = event.target.value;
    const file2 = event.target.files?.[0];

    const size = file2?.size ? file2.size / 1024 / 1024 : 0;
    const regex = /(\.jpg|\.jpeg|\.png)$/i;
    if (!regex.exec(val)) {
      // error for snackbar
      // error("File type must be JPEG or PNG");
      return;
    }
    if (size > 1) {
      // error for snackbar
      // error("File size exceeded 1MB, consider optimizing your image");
      return;
    }
    if (file2) {
      setFile(file2);
    }
  };

  // to be used later on
  // const [initialFormikValues, setInitialFormikValues] = useState({
  const [initialFormikValues] = useState({
    name: "null name",
    pname: "",
    title: "",
    email: "",
    phone: "",
    oldpass: "",
    newpass: "",
    conpass: "",
    chatlimit: "",
    rolelink: "",
  });
  // validation schema using Yup
  const formikValidationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    pname: Yup.string().required("pseudonym is required"),
    title: Yup.string().required("title is required"),
    phone: Yup.number().integer().required("phone is required"),
    chatlimit: Yup.number().integer().required("chat-limit is required"),
    rolelink: Yup.string().required("status is required"),
  });
  const handleFormikSubmit = async () =>
    // to be used but just for removing error now
    // FormValues: FormValuesProps,
    // formikHelpers: any,
    {};
  const formik = useFormik({
    initialValues: initialFormikValues,
    validationSchema: formikValidationSchema,
    onSubmit: handleFormikSubmit,
  });

  const passwordValidationSchema = Yup.object().shape({
    oldpass: Yup.string()
      .min(3, "password must be at least 3 characters")
      .required("old password is required"),
    newpass: Yup.string()
      .min(8, "password must be at least 3 characters")
      .required("new password is required"),
    conpass: Yup.string()
      .oneOf([Yup.ref("newpass")], "password must match")
      .required("please confirm your password"),
  });

  const passwordHandleSubmit = async () =>
    // to be used but just for removing error now
    // values: PasswordProps,
    // formikHelpers: any,
    {};
  const formik2 = useFormik({
    initialValues: initialFormikValues,
    validationSchema: passwordValidationSchema,
    onSubmit: passwordHandleSubmit,
  });

  const handleClear = () => {
    formik2.resetForm();
  };
  return (
    <Box
      // component="form"
      // onSubmit={formik.handleSubmit}
      className={classes.formBox}
    >
      <Box className={classes.profileSection}>
        <AddImageAvatar
          id="uploadFile"
          onClick={openFileUpload}
          // imageUrl={!preview ? data.picture : preview}
          imageUrl={!preview ? "" : preview}
          sx={{
            height: "80px !important",
            width: "80px!important",
            cursor: "pointer",
          }}
        />

        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleSelectImage}
          // onClick={(event) => {
          //     event.target.value = null
          // }}
          id="uploadFile"
          name="uploadFile"
          style={{ display: "none" }}
        />

        <Typography variant="subtitle2" className={classes.profileName}>
          {/* Andrew Jones */}
          {/* {data.firstName + " " + data.lastName} */}
          steven thomson
        </Typography>

        <Typography variant="subtitle2" className={classes.profilePseudonym}>
          {/* {data.pseudonym} */}
          Walter White
        </Typography>

        <Typography variant="subtitle2" className={classes.profileRole}>
          {/* {data.jobTitle} */}
          Agent
        </Typography>
      </Box>

      <Typography variant="subtitle2" className={classes.profileInfo}>
        Personal info
      </Typography>

      <Typography variant="subtitle2" className={classes.fullName}>
        Full name
      </Typography>

      <OutlinedInput
        className={classes.outlineName}
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="Enter your full name"
      />

      {formik.errors.name && (
        <FormHelperText
          style={{
            fontWeight: "400",
            fontFamily: "poppins",
            fontSize: "10px",
            lineHeight: "15px",
          }}
          error
        >
          {formik.errors.name}
        </FormHelperText>
      )}

      <Box className={classes.rowBox}>
        <Box className={classes.rowBox1}>
          <Typography variant="subtitle2" className={classes.pseudonym}>
            Pseudonym
          </Typography>

          <OutlinedInput
            className={classes.outlineName}
            name="pname"
            value={formik.values.pname}
            onChange={formik.handleChange}
            error={formik.touched.pname && Boolean(formik.errors.pname)}
            //
            fullWidth
            placeholder="Enter Pseudonym"
          />
          {formik.errors.pname && (
            <FormHelperText
              style={{
                fontWeight: "400",
                fontFamily: "poppins",
                fontSize: "10px",
                lineHeight: "15px",
              }}
              error
            >
              {formik.errors.pname}
            </FormHelperText>
          )}
        </Box>

        <Box className={classes.rowBox2}>
          <Typography variant="subtitle2" className={classes.jobTitle}>
            Job title
          </Typography>

          <OutlinedInput
            className={classes.outlineName}
            disabled
            name="title"
            value={formik.values.title}
            // onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            //
            fullWidth
            placeholder="Enter job title"
          />

          {formik.touched.title && formik.errors.title && (
            <FormHelperText
              style={{
                fontWeight: "400",
                fontFamily: "poppins",
                fontSize: "10px",
                lineHeight: "15px",
              }}
              error
            >
              {formik.errors.title}
            </FormHelperText>
          )}
        </Box>
      </Box>

      <Typography variant="subtitle2" className={classes.uemail}>
        Email
      </Typography>

      <OutlinedInput
        className={classes.outlineName}
        name="email"
        value={formik.values.email}
        // onChange={formik.handleChange}
        disabled
        error={formik.touched.email && Boolean(formik.errors.email)}
        //
        fullWidth
        placeholder="Enter your email address"
      />

      {formik.errors.email && (
        <FormHelperText
          style={{
            fontWeight: "400",
            fontFamily: "poppins",
            fontSize: "10px",
            lineHeight: "15px",
          }}
          error
        >
          {formik.errors.email}
        </FormHelperText>
      )}

      <Typography variant="subtitle2" className={classes.phoneNumber}>
        Phone number
      </Typography>

      <OutlinedInput
        className={classes.outlineName}
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        //
        fullWidth
        placeholder="Enter your contact number"
      />
      {formik.errors.phone && (
        <FormHelperText
          style={{
            fontWeight: "400",
            fontFamily: "poppins",
            fontSize: "10px",
            lineHeight: "15px",
          }}
          error
        >
          {formik.errors?.phone}
        </FormHelperText>
      )}

      <Typography variant="subtitle2" className={classes.changepasswordtext}>
        Change password
      </Typography>

      <OutlinedInput
        className={classes.outlinedInput}
        name="oldpass"
        value={formik2.values.oldpass}
        onChange={formik2.handleChange}
        error={formik2.touched.oldpass && Boolean(formik2.errors.oldpass)}
        //
        fullWidth
        placeholder="Enter your old password"
      />
      {(backendError && backendError.oldPassword && (
        <span className={classes.backendError}>{backendError.oldPassword}</span>
      )) ||
        (formik2.touched.oldpass && formik2.errors.oldpass && (
          <FormHelperText className={classes.formikErrorStyle} error>
            {formik2.errors.oldpass}
          </FormHelperText>
        ))}

      <OutlinedInput
        className={classes.outlinedInput}
        name="newpass"
        value={formik2.values.newpass}
        onChange={formik2.handleChange}
        error={formik2.touched.newpass && Boolean(formik2.errors.newpass)}
        //
        fullWidth
        placeholder="Enter your new password"
      />
      {(backendError && backendError.newPassword && (
        <span className={classes.backendError}>{backendError.newPassword}</span>
      )) ||
        (formik2.touched.newpass && formik2.errors.newpass && (
          <FormHelperText className={classes.formikErrorStyle} error>
            {formik2.errors.newpass}
          </FormHelperText>
        ))}
      <OutlinedInput
        className={classes.outlinedInput}
        name="conpass"
        value={formik2.values.conpass}
        onChange={formik2.handleChange}
        error={formik2.touched.conpass && Boolean(formik2.errors.conpass)}
        //
        fullWidth
        placeholder="Re-enter your new password"
      />
      {(backendError && backendError.confirmedPassword && (
        <span className={classes.backendError}>
          {backendError.confirmedPassword}
        </span>
      )) ||
        (formik2.touched.conpass && formik2.errors.conpass && (
          <FormHelperText className={classes.formikErrorStyle} error>
            {formik2.errors.conpass}
          </FormHelperText>
        ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "7px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          className={classes.clearButton}
          onClick={handleClear}
        >
          Clear
        </Button>

        <Button
          type="button"
          // type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={formik2.handleSubmit}
        >
          {/* Save {true ? <CircularProgress /> : ""} */}
          Save <CircularProgress />
        </Button>
      </Box>

      <Typography variant="subtitle2" className={classes.chatLimit1}>
        Chat limit
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box>
          <TextField
            type="number"
            name="chatlimit"
            value={formik.values.chatlimit}
            onChange={formik.handleChange}
            InputProps={{
              style: { width: "60px", height: "30px" },
              inputProps: { min: 0, max: 20 },
            }}
            error={Boolean(formik.errors.chatlimit)}
          />
        </Box>
        <Box ml={1}>
          <Typography variant="subtitle2" className={classes.chatLimit2}>
            Concurrent chat
          </Typography>
        </Box>
      </Box>
      {formik.errors.chatlimit && (
        <FormHelperText
          style={{
            fontWeight: "400",
            fontFamily: "poppins",
            fontSize: "10px",
            lineHeight: "15px",
          }}
          error
        >
          {formik.errors.chatlimit}
        </FormHelperText>
      )}

      <Typography variant="subtitle2" className={classes.selectBoxText}>
        Select status
      </Typography>

      <Select
        className={classes.selectButton}
        name="rolelink"
        value={formik.values.rolelink}
        onChange={formik.handleChange}
        error={formik.touched.rolelink && Boolean(formik.errors.rolelink)}
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
        <MenuItem value="" disabled style={{ color: "red", display: "none" }}>
          <FiberManualRecordIcon
            style={{
              color: "#00BA34",
              width: "5px",
              height: "5px",
              marginRight: "5px",
            }}
          />
          Active
        </MenuItem>
        <MenuItem value="ACTIVE" className={classes.menuItem}>
          <FiberManualRecordIcon
            style={{
              color: "#00BA34",
              width: "5px",
              height: "5px",
              marginRight: "5px",
            }}
          />
          Active
        </MenuItem>
        {/* {authUserId !== id && ( */}
        {true && (
          <MenuItem value="BLOCKED" className={classes.menuItem}>
            <FiberManualRecordIcon
              style={{
                color: "#E34D59",
                width: "5px",
                height: "5px",
                marginRight: "5px",
              }}
            />
            Block
          </MenuItem>
        )}
      </Select>

      {formik.touched.rolelink && formik.errors.rolelink && (
        <FormHelperText
          style={{
            fontWeight: "400",
            fontFamily: "poppins",
            fontSize: "10px",
            lineHeight: "15px",
          }}
          error
        >
          {formik.errors.rolelink}
        </FormHelperText>
      )}

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            paddingRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => setExpanded(!expanded)}
        >
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
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <VirtualizedList data={pagesList} />
            {/* <FixedSizeList height={(allpagesdata.length + 2) * 20} width="100%" itemSize={54} itemCount={allpagesdata.length} overscanCount={5} itemData={data}> */}
            {/* <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: (allpagesdata.length + 2) * 20,
                minHeight: 100,
                "& ul": { padding: 0 },
              }}
              subheader={<li />}
            >
              {allpagesdata &&
                allpagesdata.length > 0 &&
                allpagesdata.map((item: pagePropdata, index: number) => {
                  const isSelected = data.pages.includes(item.pageId);
                  return (
                    <ListItem
                      key={index}
                      component="div"
                      sx={{
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <ListItemButton
                        disableRipple
                        sx={{
                          margin: 0,
                          padding: 0,
                        }}
                        onClick={() => {
                          handleAddPage(item.pageId, isSelected ? false : true);
                        }}
                      >
                        <Radio value={isSelected} checked={isSelected} />
                        <FacebookRoundedIcon
                          fontSize="small"
                          sx={{
                            color: "#0165E1",
                          }}
                        />
                        <ListItemText
                          sx={{
                            marginLeft: 1,
                          }}
                          primary={item.name}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
            </List> */}
          </Box>
        </Collapse>
      </Box>

      {/* {authUserId !== id && ( */}
      {true && (
        <>
          {" "}
          <Typography variant="subtitle2" className={classes.deleteUser}>
            Delete user ?
          </Typography>
          {/* <Button onClick={handleDeleteUser} className={classes.deleteButton}> */}
          <Button className={classes.deleteButton}>Delete</Button>
        </>
      )}

      <Box className={classes.bottomButton}>
        <Button
          variant="contained"
          color="primary"
          className={classes.cancelPanel}
          onClick={() => {
            // setRightPanelOpened(false);
            // setIsEditMode(false);
          }}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          // type="button"
          variant="contained"
          color="primary"
          // onClick={() => handleFormikSubmit(formik.values, formik)}
          className={classes.saveButton}
          // onClick={handleFormikSubmit}
          //   disabled={updateMutationLoading}
          //   endIcon={
          //     updateMutationLoading && (
          //       <CircularProgress size={20} color="inherit" />
          //     )
          //   }
        >
          Save changes
        </Button>
      </Box>
    </Box>
  );
};

export default EditMode;
