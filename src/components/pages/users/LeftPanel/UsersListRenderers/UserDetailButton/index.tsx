import { Button } from "@mui/material";
//
import { useApi } from "src/pages/users/ApiContext";
import useStyles from "./Styles";

interface btnRendererProp {
  cellData: string;
  hoveredRowIndex: number | null;
  rowIndex: number;
}

const ActionButton: React.FC<btnRendererProp> = ({
  cellData,
  hoveredRowIndex,
  rowIndex,
}) => {
  const { classes } = useStyles();
  //
  // console.log("datacheck",);
  const contextData = useApi();
  console.log("hoveredRowIndex_", hoveredRowIndex);
  //
  const userDetailHandle = () => {
    // contextData.controlRightPanel(true);
    contextData && contextData.controlRightPanel(true);
  };

  return (
    <div>
      <Button
        onClick={userDetailHandle}
        variant="outlined"
        style={{
          visibility: rowIndex == hoveredRowIndex ? "visible" : "hidden",
        }}
        className={classes.buttonStyle}
      >
        {cellData}
      </Button>
    </div>
  );
};

const buttonRender: React.FC<btnRendererProp> = ({
  cellData,
  hoveredRowIndex,
  rowIndex,
}) => (
  <ActionButton
    cellData={cellData}
    hoveredRowIndex={hoveredRowIndex}
    rowIndex={rowIndex}
  />
);

export default buttonRender;
