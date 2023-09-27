import { ContentSmall } from "src/components/shared/atoms/text/Text";
import Typography from "src/components/shared/atoms/typography";
import Button from "src/components/shared/atoms/button";
import Box from "src/components/shared/atoms/box";
import useStyles from "./Styles";

const UpgragePlan = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.upgradeBox}>
      <Typography>Upgrade your plan</Typography>
      <ContentSmall className={classes.text}>
        05 Days left in your trial, Upgrade your plan
        <br /> now before your account is hold.{" "}
      </ContentSmall>

      <Button
        variant="contained"
        color="primary"
        className={classes.upgradeButton}
      >
        Upgrade now
      </Button>
    </Box>
  );
};

export default UpgragePlan;
