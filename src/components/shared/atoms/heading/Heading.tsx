import React from "react";
import Typography from "@mui/material/Typography";
import theme from "src/theme";

interface Props {
  heading: string;
}

const Heading: React.FC<Props> = ({ heading }) => {
  return (
    <Typography
      sx={{
        fontWeight: 600,
        [theme.breakpoints.up("md")]: {
          fontSize: "1.5rem",
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "1.375rem",
        },
        lineHeight: "36px",
        textTransform: "capitalize",
        textAlign: "center",
      }}
    >
      {heading}
    </Typography>
  );
};

export default Heading;
