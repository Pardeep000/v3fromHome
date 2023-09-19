import React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

interface CustomAvatarProps {
  imageUrl: string | undefined | null;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sx?: React.CSSProperties;
  id: string;
  handleLoad: () => void;
}

const UploadImage: React.FC<CustomAvatarProps> = ({
  imageUrl,
  onClick,
  sx,
  id,
  handleLoad,
}) => {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{
        // vertical: 'top',0
        vertical: "bottom",
        horizontal: "right",
      }}
      badgeContent={<PhotoCameraIcon />}
      onClick={onClick}
    >
      <Avatar onLoad={handleLoad} src={imageUrl || ""} sx={sx} id={id} />
    </Badge>
  );
};
UploadImage.defaultProps = {
  sx: {},
};

export default UploadImage;
