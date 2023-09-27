/* eslint-disable react/require-default-props */
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";

interface Props {
  src: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const KuikwitAvatar: React.FC<Props> = ({ src, className, onClick }) => {
  const [, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <Avatar
      src={src}
      onLoad={handleLoad}
      className={className}
      onClick={onClick}
    />
  );
};

export default KuikwitAvatar;
