import React from "react";
import { CircularProgress, Box, Button, Typography } from "@mui/material";
import useStyles from "./Styles";

interface Props {
  text: string;
  loading: boolean;
}

const AuthButton: React.FC<Props> = ({ text, loading }) => {
  const { classes } = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      className={classes.root}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        {" "}
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {text}{" "}
          {loading ? (
            <CircularProgress
              style={{
                marginLeft: "3px",
                width: "25px",
                height: "25px",
                color: "white",
              }}
            />
          ) : (
            ""
          )}
        </Box>
      </Typography>
    </Button>
  );
};

export default AuthButton;
