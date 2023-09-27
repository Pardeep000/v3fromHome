/* eslint-disable react/no-array-index-key */
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface Props {
  menuItems: string[];
  handleChange: () => void;
  value: string;
}
const SelectSmall: React.FC<Props> = ({ menuItems, handleChange, value }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        onChange={handleChange}
      >
        {menuItems.map((item, index) => {
          return <MenuItem key={index}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectSmall;
