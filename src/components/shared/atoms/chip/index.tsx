/* eslint-disable react/prop-types */
import { Chip } from "@mui/material";

interface Props {
  sx?: React.CSSProperties;
  label: string;
  className?: string;
}

const KuikwitChip: React.FC<Props> = ({ sx, label, className }) => {
  return <Chip sx={sx} label={label} className={className} />;
};
// Setting default values for the props of KuikwitButton
KuikwitChip.defaultProps = {
  label: "kuikwit",
  sx: {},
  className: "",
};

export default KuikwitChip;
