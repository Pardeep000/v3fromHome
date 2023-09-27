import React from "react";
import UserContext from "src/components/context/users/UseContext";
import { Card } from "@mui/material";
import DetailMode from "./detailMode";
import EditMode from "./EditMode";
import PanelHeader from "./panelHeader";

import useStyles from "./Styles";

const RightPanel = () => {
  const { classes } = useStyles();
  const contextData = UserContext();
  //
  const [edit, setEdit] = React.useState(false);

  let contextApiData = false;
  if (contextData) contextApiData = contextData.showRightPanel;
  return (
    <Card
      className={classes.outerBox}
      sx={{ display: contextApiData ? "block" : "none" }}
    >
      <PanelHeader edit={edit} setEdit={setEdit} />
      {edit ? <EditMode /> : <DetailMode />}
    </Card>
  );
};

export default RightPanel;
