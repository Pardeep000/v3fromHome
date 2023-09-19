import React from "react";
import { useApi } from "src/pages/users/ApiContext";
import { Box, Card, Divider, Typography, Switch } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DetailMode from "./detailMode";
import EditMode from "./EditMode";
import PanelHeader from "./panelHeader";

import useStyles from "./Styles";

const RightPanel = () => {
  const { classes } = useStyles();
  const contextData = useApi();
  //
  const [edit, setEdit] = React.useState(false);

  React.useEffect(() => {
    // setIsEditMode(edit);
  }, [edit]);
  return (
    <Card
      className={classes.outerBox}
      sx={{ display: contextData.showRightPanel ? "block" : "none" }}
    >
      <PanelHeader edit={edit} setEdit={setEdit} />
      {edit ? <EditMode /> : <DetailMode />}
    </Card>
  );
};

export default RightPanel;
