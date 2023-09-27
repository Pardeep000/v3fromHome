import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import useStyles from "../../Styles";
import { ManagersQueryResultItem } from "./Types";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 158,
      width: "150px",
    },
  },
};

interface Props {
  type: string;
  list?: ManagersQueryResultItem[];
  setSelectedIds: (a: any) => void;
}

const ReportsSummaryCompSelect: React.FC<Props> = ({
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
            list.map(({ id, name }: ManagersQueryResultItem) => (
              <MenuItem key={id} value={id} className={classes.menu}>
                <ListItemText
                  primary={name}
                  primaryTypographyProps={{
                    style: {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    },
                  }}
                />
                <Checkbox size="small" checked={personName.indexOf(id) > -1} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default ReportsSummaryCompSelect;
