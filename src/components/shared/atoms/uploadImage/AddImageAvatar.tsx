/* eslint-disable consistent-return */

import React, { useRef, useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import uploadImage from "src/utils/shared/useUploadImage";

interface CustomAvatarProps {
  picture: string | undefined;
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sx?: React.CSSProperties;
  id: string;
  className?: string;
}

const UploadImage: React.FC<CustomAvatarProps> = ({
  sx,
  id,
  picture,
  className,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [, setNewImageUploaded] = useState(false);

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const openFileUpload = () => {
    setFile(null);
    setNewImageUploaded(true);
    if (hiddenFileInput.current !== null) {
      hiddenFileInput?.current.click();
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedfile = uploadImage(event);
    if (uploadedfile) {
      // setFile(uploadedfile);
    }
  };
  const [preview, setPreview] = useState<string | undefined>(picture);
  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);
  const [, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={<PhotoCameraIcon />}
        onClick={openFileUpload}
      >
        <Avatar
          onLoad={handleLoad}
          src={!preview ? picture : preview}
          className={className}
          sx={sx}
          id={id}
        />
      </Badge>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        id="uploadFile"
        name="uploadFile"
        style={{ display: "none" }}
      />
    </>
  );
};
UploadImage.defaultProps = {
  sx: {},
  className: "",
};

export default UploadImage;
