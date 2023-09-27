/* eslint-disable import/no-extraneous-dependencies */
import Typography from "@mui/material/Typography";

interface TypoProps {
  children: React.ReactNode;
  className?: string;
}

const KuikwitTypography: React.FC<TypoProps> = ({ className, children }) => {
  return <Typography className={className}>{children}</Typography>;
};

KuikwitTypography.defaultProps = {
  className: "",
};

export default KuikwitTypography;
