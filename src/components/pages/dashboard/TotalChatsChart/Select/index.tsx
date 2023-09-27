import * as React from "react";
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography, ListItemText } from "@mui/material";
// import { ManagersQueryResultItem } from "../../../../pages/reports/Types";
import useStyles from "./Styles";

interface Props {
  values: string[];
  selectChange?: any;
  value: string;
}
const SelectSmall: React.FC<Props> = ({ values, selectChange, value }) => {
  const { classes } = useStyles();
  const handleChange = (event: SelectChangeEvent) => {
    selectChange(event.target.value);
  };
  return (
    <FormControl size="small" className={classes.formControl}>
      {/* <InputLabel id="demo-select-small" className={classes.inputLabel}>{age}</InputLabel> */}
      <Select
        value={value}
        // label="Time"
        onChange={handleChange}
        className={classes.select}
        // className={classes.form}
      >
        {values.map((val, index) => {
          return (
            <MenuItem key={index} className={classes.menuItem} value={val}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectSmall;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 158,
      width: "150px",
    },
  },
};

interface CompSelectProps {
  type: string;
  //   list?: ManagersQueryResultItem[];
  list?: any[];
  setSelectedIds: (a: any) => void;
}

export const CompSelect: React.FC<CompSelectProps> = ({
  type,
  list,
  setSelectedIds,
}) => {
  const { classes } = useStyles();
  const [personName, setPersonName] = React.useState<string[]>([type]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    const newValues: string[] = Array.isArray(value)
      ? value.filter((val) => val !== "Agent" && val !== "Manager")
      : [];
    setSelectedIds(newValues);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => (
            <Typography className={classes.type}>{type}</Typography>
          )}
          MenuProps={MenuProps}
          className={classes.select}
        >
          {list &&
            list.map((item) => (
              <MenuItem key={item.id} value={item.id} className={classes.menu}>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    style: {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    },
                  }}
                />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};
