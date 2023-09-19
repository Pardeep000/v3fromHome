import { Chip } from "@mui/material";
import { chipSX, chipBlue, chipOrange, chipRed } from "./rolesChips";

// interface IData {
//   role: string;
// }

interface roleRenderProps {
  cellData: string;
}

const Role: React.FC<roleRenderProps> = ({ cellData }) => {
  // ;
  // console.log("roles__", cellData);

  return cellData === "Superadmin" ? (
    <Chip label={cellData} sx={chipRed} />
  ) : cellData === "Manager" ? (
    <Chip label={cellData} sx={chipBlue} />
  ) : (
    <Chip label={cellData} sx={chipOrange} />
  );
};

const roleRender: React.FC<roleRenderProps> = ({ cellData }) => (
  <Role cellData={cellData} />
);

export default roleRender;
