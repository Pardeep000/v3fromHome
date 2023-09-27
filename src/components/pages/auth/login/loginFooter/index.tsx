/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Box from "src/components/shared/atoms/box";
import Typography from "src/components/shared/atoms/typography";
import { useNavigate } from "react-router-dom";
import useStyles from "./Styles";

const LoginFooter = () => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography>
        Need new account? &nbsp;{" "}
        <span
          style={{
            color: "#0d6efd",
            fontWeight: 400,
            cursor: "pointer",
          }}
          onClick={() => navigate("/signup")}
        >
          Sign up free
        </span>
      </Typography>
    </Box>
  );
};

export default LoginFooter;
