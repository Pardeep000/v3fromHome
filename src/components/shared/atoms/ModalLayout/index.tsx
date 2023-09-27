import React, { useState, ReactNode } from "react";

import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
//
import { Close } from "@mui/icons-material";
//
import useStyles from "./Styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "2px",
  boxShadow: 24,
};

interface Props {
  headerText: string;
  modalName: string | ReactNode;
  children: ReactNode;
}
const ModalLayout: React.FC<Props> = ({ headerText, modalName, children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { classes } = useStyles();
  return (
    <div>
      <Button
        disableRipple
        onClick={handleOpen}
        className={classes.modalButton}
      >
        {modalName}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box className={classes.headBox}>
              <Typography variant="body1" className={classes.headText}>
                {headerText}
              </Typography>
              <IconButton
                aria-label="Delete"
                className={classes.crossIcon}
                onClick={handleClose}
              >
                <Close />
              </IconButton>
            </Box>
            <Divider />
            <Box className={classes.centerBody}>{children}</Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalLayout;
