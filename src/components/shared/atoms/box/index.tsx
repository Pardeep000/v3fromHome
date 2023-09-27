/* eslint-disable react/require-default-props */
import { Box } from "@mui/material";
import { FC, ReactNode, MouseEvent, ElementType } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  component?: ElementType;
  onSubmit?: any;
}

const KuikwitBox: FC<Props> = ({
  children,
  className,
  onClick,
  component,
  onSubmit,
}) => {
  return (
    <Box
      component={component}
      className={className}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </Box>
  );
};
KuikwitBox.defaultProps = {
  className: "",
  component: "div",
};
export default KuikwitBox;
