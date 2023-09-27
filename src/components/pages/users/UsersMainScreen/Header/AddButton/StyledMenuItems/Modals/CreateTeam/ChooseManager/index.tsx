import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import SearchField from "src/components/shared/atoms/SearchField";
import { Avatar, ListItem } from "@mui/material";
import React, { useState } from "react";
// import _ from "lodash";
import AddIcon from "@mui/icons-material/Add";
import ModalLayout from "src/components/shared/atoms/ModalLayout";
import useStyles from "./Styles";

const ChooseManagers: React.FC = () => {
  const { classes } = useStyles();
  const [showError, setShowError] = React.useState(false);

  //   const handleCheckListItem = () => {};

  const managerListData = {
    isSelected: false,
    picture: "wonderfu;",
    name: "jobs",
  };
  const list = Array.from({ length: 50 }, () => managerListData);

  const handleSubmit = () => {};

  //   const [listManagers] = useState<any[]>([]);
  const [listManagers] = useState<any[]>(list);

  React.useEffect(() => {
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }, [showError]);

  const searchBarHandle = () => {};
  const searchFieldProps = {
    onChange: searchBarHandle,
    placeholder: "search",
    className: classes.fieldStyle,
  };
  const modalNode = (
    <>
      <Button className={classes.managerButton} disableRipple>
        <AddIcon className={classes.managerAddIcon} />
      </Button>
      <Typography className={classes.managerText}>Choose Managers</Typography>
    </>
  );
  return (
    <ModalLayout headerText="Choose Managers" modalName={modalNode}>
      <form onSubmit={handleSubmit}>
        <Box>
          <SearchField {...searchFieldProps} />
          <Box
            className={classes.scrollableBox}
            // onScroll={loadMoreDataHandle}
          >
            {/* {!getManagersQueryLoading &&
              listManagers.length == 0 && ( */}
            {listManagers.length === 0 && (
              <div className="m-auto text-center">
                <p className="font-small">No record found</p>
              </div>
            )}

            {listManagers.length > 0 &&
              listManagers.map((item_) => (
                <ListItem
                  //   key={index}
                  alignItems="center"
                  sx={{ padding: "0px" }}
                >
                  <input
                    checked={item_.isSelected}
                    onChange={() => {}}
                    //   handleCheckListItem(item_, item_.isSelected)
                    type="checkbox"
                  />
                  <Avatar
                    alt="John Doe"
                    src={item_.picture}
                    className={classes.managerAvatar}
                  />
                  <Typography
                    variant="subtitle2"
                    className={classes.managerName}
                  >
                    {item_.name}
                  </Typography>
                </ListItem>
              ))}

            {/* {getManagersQueryLoading && ( */}
            <div className="text-center">
              <CircularProgress
                className={classes.progressIndicator}
                thickness={5}
              />
            </div>
          </Box>
        </Box>
        <Box className={classes.submit}>
          <Button
            className={classes.submitButton}
            variant="contained"
            type="submit"
          >
            Invite
          </Button>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default ChooseManagers;
