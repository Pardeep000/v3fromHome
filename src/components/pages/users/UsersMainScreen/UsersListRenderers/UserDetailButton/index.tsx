import { Button } from "@mui/material";
import UserContext from "src/components/context/users/UseContext";
import useStyles from "./Styles";

interface BtnRendererProp {
  cellData: string;
  hoveredRowIndex: number | null;
  rowIndex: number;
}

const ActionButton: React.FC<BtnRendererProp> = ({
  cellData,
  hoveredRowIndex,
  rowIndex,
}) => {
  const { classes } = useStyles();
  const contextData = UserContext();
  const userDetailHandle = () => {
    if (contextData) contextData.setShowRightPanel(true);
  };

  return (
    <div>
      <Button
        onClick={userDetailHandle}
        variant="outlined"
        style={{
          visibility: rowIndex === hoveredRowIndex ? "visible" : "hidden",
        }}
        className={classes.buttonStyle}
      >
        {cellData}
      </Button>
    </div>
  );
};

const buttonRender: React.FC<BtnRendererProp> = ({
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
