import React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
// import AddIcon from '@mui/icons-material/Add';
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

interface CustomAvatarProps {
  imageUrl: string | undefined | null;
  onClick: any;
  sx?: React.CSSProperties;
  id?: string;
  handleLoad?: any;
}

const AddImageAvatar: React.FC<CustomAvatarProps> = ({
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

export default AddImageAvatar;

AddImageAvatar.defaultProps = {
  sx: {},
  id: "",
  handleLoad: "",
};
