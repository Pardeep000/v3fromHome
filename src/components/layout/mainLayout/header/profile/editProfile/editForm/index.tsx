import React from "react";
import Box from "src/components/shared/atoms/box";
import { Title } from "src/components/shared/atoms/text/Text";
import TextField from "src/components/shared/atoms/textField/TextField";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "src/components/shared/atoms/button";
import { Props } from "./Types";
import useStyles from "./Styles";

const FormikForm: React.FC<Props> = ({
  setEditProfile,
  profile,
  setAnchorEl,
}) => {
  const { classes } = useStyles();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "name must be at least 6 characters")
      .required("name is required"),
    pseudonym: Yup.string()
      .min(3, "pseudonym must be at least 1 character")
      .required("pseudonym is required"),
    number: Yup.number()
      .integer()
      .required("phone is required")
      .min(8, "Number must be at correct"),
  });

  const handleCancel = () => {
    setEditProfile(false);
  };

  const handleSubmit = async () => {
    setAnchorEl(null);
    setEditProfile(false);
  };

  const { name, pseudonym, designation, number } = profile;
  const initialValues = { name, pseudonym, designation, number };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik: any) => (
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          className={classes.box}
        >
          <Box className={classes.marginTop}>
            <Title text="Full name" />
          </Box>
          <Box>
            <TextField
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>

          <Box className={classes.marginTop}>
            <Title text="Pseudonym" />
            <TextField
              id="pseudonym"
              name="pseudonym"
              value={formik.values.pseudonym}
              onChange={formik.handleChange}
              helperText={formik.touched.pseudonym && formik.errors.pseudonym}
            />
          </Box>
          <Box className={classes.marginTop}>
            <Title text="Phone number" />
          </Box>
          <Box>
            <TextField
              id="number"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              helperText={formik.touched.number && formik.errors.number}
            />
          </Box>
          {/* buttons */}
          <Box className={classes.buttonBox}>
            <Box className={classes.paddingRight}>
              <Button
                color="info"
                className={classes.cancelButton}
                handleClick={handleCancel}
              >
                Cancel
              </Button>
            </Box>

            <Box>
              <Button
                type="submit"
                variant="contained"
                className={classes.submitButton}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default FormikForm;
