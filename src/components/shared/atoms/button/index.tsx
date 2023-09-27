/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface ButtonProps {
  type?: "button" | "reset" | "submit" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  variant: "text" | "contained" | "outlined";
  size: "small" | "medium" | "large";
  circular?: boolean;
  children: React.ReactNode;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
  sx?: React.CSSProperties;
  className?: string;
}

const KuikwitButton = ({
  color,
  variant,
  size,
  circular,
  children,
  sx,
  handleClick,
  type,
  className,
}: ButtonProps) => {
  const defaultSx: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: 400,
    textDecoration: "none",
    textTransform: "capitalize",
  };

  return (
    <Button
      disableRipple
      disableElevation
      type={type}
      className={className}
      color={color}
      variant={variant}
      size={size}
      sx={{ ...defaultSx, ...sx }}
      onClick={handleClick}
      disabled={circular}
      endIcon={circular && <CircularProgress size={10} color="inherit" />}
    >
      {children}
    </Button>
  );
};

KuikwitButton.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "primary",
  circular: false,
  type: "button",
};

export default KuikwitButton;
