import { Chip } from "@mui/material";
import { chipBlue, chipOrange, chipRed } from "./rolesChips";

// interface IData {
//   role: string;
// }

interface RoleRenderProps {
  cellData: "Superadmin" | "Manager" | "Agent";
}

const Role: React.FC<RoleRenderProps> = ({ cellData }) => {
  const userRoles = {
    Superadmin: { label: "Superadmin", sx: chipRed },
    Manager: { label: "Manager", sx: chipOrange },
    Agent: { label: "Agent", sx: chipBlue },
  };

  const { label, sx } = userRoles[cellData] || userRoles.Agent;
  return <Chip label={label} sx={sx} />;
};

const roleRender: React.FC<RoleRenderProps> = ({ cellData }) => (
  <Role cellData={cellData} />
);

export default roleRender;
