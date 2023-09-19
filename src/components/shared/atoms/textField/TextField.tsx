/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useStyles from "./Styles";

interface FieldProps {
  name: string;
  id: string;
  disabled?: boolean;
  label?: string;
  typeField?: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  helperText?: string | boolean | undefined;
}

const KuikTextField: React.FC<FieldProps> = ({
  id,
  label,
  name,
  typeField,
  onChange,
  value,
  disabled,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { classes } = useStyles();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <TextField
      className={classes.textField}
      id={id}
      value={value}
      helperText={helperText}
      name={name}
      type={!showPassword ? typeField : "text"}
      placeholder={label}
      disabled={disabled}
      size="small"
      onChange={onChange}
      InputProps={{
        endAdornment: typeField ? (
          <InputAdornment
            position="end"
            onClick={handleClickShowPassword}
            sx={{ cursor: "pointer" }}
          >
            {showPassword ? (
              <Visibility sx={{ fontSize: 20 }} />
            ) : (
              <VisibilityOff sx={{ fontSize: 20 }} />
            )}
          </InputAdornment>
        ) : null,
      }}
      FormHelperTextProps={{
        className: classes.helperText,
      }}
    />
  );
};

export default KuikTextField;
