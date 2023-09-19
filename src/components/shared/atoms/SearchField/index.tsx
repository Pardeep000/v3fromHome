import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";
import _ from "lodash";
import useStyles, { StyledInputBase } from "./Styles";

interface Props {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldStyleClass: string;
}

const SearchField: React.FC<Props> = ({
  type,
  value,
  onChange,
  placeholder,
  fieldStyleClass,
}: Props) => {
  const { classes } = useStyles();
  const debounceFn = _.debounce(onChange, 1000);
  return (
    <Box className={classes.search}>
      <Box className={classes.searchIcon}>
        <Search />
      </Box>

      <StyledInputBase
        placeholder={placeholder}
        className={fieldStyleClass}
        type={type}
        value={value}
        onChange={debounceFn}
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

export default SearchField;
