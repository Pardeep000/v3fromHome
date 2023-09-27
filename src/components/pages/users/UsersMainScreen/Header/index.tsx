import { Box } from "@mui/material";
import SearchField from "src/components/shared/atoms/SearchField";
import AddModals from "./AddButton";
import useStyles from "./Styles";

const Header = () => {
  const { classes } = useStyles();
  // for using queries for further processes
  // const searchBarHandle = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const searchBarHandle = () => {};

  const searchFieldProps = {
    onChange: searchBarHandle,
    placeholder: "search",
    className: classes.fieldStyle,
  };

  return (
    <Box className={classes.headerBox}>
      <SearchField {...searchFieldProps} />
      <AddModals />
    </Box>
  );
};

export default Header;
