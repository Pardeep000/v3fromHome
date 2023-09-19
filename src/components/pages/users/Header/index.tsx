import { Box } from "@mui/material";
import SearchBar from "src/components/shared/atoms/SearchField";
import AddModals from "../AddButton";
import useStyles from "./Styles";

const Index = () => {
  const { classes } = useStyles();
  // for using queries for further processes
  const searchBarHandle = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const searchFieldProps = {
    onChange: searchBarHandle,
    placeholder: "search",
    fieldStyleClass: classes.fieldStyle,
  };

  return (
    <Box className={classes.headerBox}>
      <SearchBar {...searchFieldProps} />
      <AddModals />
    </Box>
  );
};

export default Index;
