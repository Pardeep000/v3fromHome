/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import React, {
  useEffect,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import Typography from "@mui/material/Typography";
import { Box, Chip, CircularProgress } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AddImageAvatar from "src/components/shared/atoms/uploadImage/AddImageAvatar";
import { Title } from "src/components/shared/atoms/text/Text";
import KuikTextField from "src/components/shared/atoms/textField/TextField";
import { Formik } from "formik";
import * as Yup from "yup";
import uploadImage from "src/utils/shared/uploadImage";
import useStyles from "./Styles";

// type YourFormValues = {
//   name: string;
//   pseudonym: string;
//   email: string;
//   number: string;
//   designation: string;
// };

interface Props {
  setEditProfile: (a: boolean) => void;
  profile: {
    name: string;
    email: string;
    picture: string;
    pseudonym: string;
    designation: string;
    number: string;
  };
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}
const EditProfileSection: React.FC<Props> = ({
  setEditProfile,
  profile,
  setAnchorEl,
}) => {
  const { classes } = useStyles();
  const { name, email, picture, pseudonym, designation, number } = profile;

  const handleClick = (event: { stopPropagation: () => void }) => {
    // Handle menu item click here
    event.stopPropagation();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "name must be at least 6 characters")
      .required("name is required"),
    pseudonym: Yup.string()
      .min(3, "pseudonym must be at least 1 character")
      .required("pseudonym is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    number: Yup.string().min(8, "Number must be at correct"),
  });

  const handleCancel = () => {
    setEditProfile(false);
  };

  const handleSubmit = async () => {
    setAnchorEl(null);
    // meQuery();
    setEditProfile(false);
  };

  const [, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const [file, setFile] = useState<File | null>(null);
  const [, setNewImageUploaded] = useState(false);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const openFileUpload = () => {
    setFile(null);
    setNewImageUploaded(true);
    if (hiddenFileInput.current !== null) {
      hiddenFileInput?.current.click();
    }
  };
  // const { success, error } = useSnackBar();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedfile = uploadImage(event);
    if (uploadedfile) {
      // setFile(uploadedfile);
    }
  };

  const [preview, setPreview] = useState<string | undefined>(picture);
  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <>
      <MenuItem
        onClick={handleClick}
        disableRipple
        className={classes.menuItem}
      >
        <Box className={classes.addImageBox}>
          <AddImageAvatar
            handleLoad={handleLoad}
            id="uploadFile"
            onClick={openFileUpload}
            imageUrl={!preview ? picture : preview}
            sx={{ height: "80px !important", width: "80px!important" }}
          />

          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            id="uploadFile"
            name="uploadFile"
            style={{ display: "none" }}
          />
        </Box>
      </MenuItem>
      <Typography variant="subtitle2" className={classes.profileName}>
        {profile.name}
      </Typography>
      <Typography variant="subtitle2" className={classes.profilePseudonym}>
        {profile.pseudonym}
      </Typography>
      <Box className={classes.boxChip}>
        <Chip className={classes.boxChip} label={profile.designation} />
      </Box>
      <MenuItem
        onClick={handleClick}
        disableRipple
        className={classes.menuItem}
      >
        <Formik
          initialValues={{
            name,
            pseudonym,
            email,
            number,
            designation,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik: any) => (
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                width: "100%",
              }}
            >
              <Box mt={1}>
                <Title text="Full name" />
              </Box>
              <Box>
                <KuikTextField
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Box>

              <Box mt={1}>
                <Title text="Pseudonym" />
                <KuikTextField
                  id="pseudonym"
                  name="pseudonym"
                  value={formik.values.pseudonym}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.pseudonym && formik.errors.pseudonym
                  }
                />
              </Box>
              <Box mt={1}>
                <Title text="Email" />
              </Box>
              <Box>
                <KuikTextField
                  id="email"
                  disabled
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box mt={1}>
                <Title text="Phone number" />
              </Box>
              <Box>
                <KuikTextField
                  id="number"
                  name="number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  helperText={formik.touched.number && formik.errors.number}
                />
              </Box>
              <Box mt={1} className={classes.buttonBox}>
                <Box pr={1}>
                  <Button
                    className={classes.cancelButton}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Box>

                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submitButton}
                    endIcon={<CircularProgress size={10} color="inherit" />}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Formik>
      </MenuItem>
    </>
  );
};

export default EditProfileSection;
