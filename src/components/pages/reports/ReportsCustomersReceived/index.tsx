import React from "react";
import { Grid, Card, Typography, CircularProgress } from "@mui/material";
import useStyles from "./Styles";

interface Props {
  text: string;
  figure: number;
  loading: boolean;
}

const ReportsCustomersReceived: React.FC<Props> = ({
  text,
  figure,
  loading,
}) => {
  const { classes } = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container justifyContent="space-between" alignItems="center" mt={1}>
        <Typography ml={2} mt={1} gutterBottom className={classes.text}>
          {text}
        </Typography>

        {loading ? (
          <CircularProgress size={24} style={{ marginRight: 5 }} />
        ) : (
          <Typography mr={2} className={classes.figure}>
            {figure}
          </Typography>
        )}
      </Grid>
    </Card>
  );
};

export default ReportsCustomersReceived;
