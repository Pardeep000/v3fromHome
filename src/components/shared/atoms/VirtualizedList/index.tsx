import { useCallback } from "react";
import { Radio, ListItemText, ListItem, ListItemButton } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { List, AutoSizer } from "react-virtualized";
import useStyles from "./Styles";

const controlProps = (item: string) => ({
  checked: true,
  // onChange,
  value: item,
  name: "size-radio-button-demo",
  inputProps: { "aria-label": item },
});

interface IVirtualizedListFunction {
  index: number;
  key: string;
  style: React.CSSProperties;
}

interface IVirtualizedList {
  data: any[];
  onChange?: (a: any) => void;
}

const VirtualizedList = ({ data, onChange }: IVirtualizedList) => {
  const { classes } = useStyles();

  const renderRow = useCallback(
    ({ index, key, style }: IVirtualizedListFunction) => {
      return (
        <div style={style} key={key}>
          <ListItem component="div" className={classes.itemPadding}>
            <ListItemButton className={classes.itemPadding} disableRipple>
              <Radio {...controlProps("a")} size="small" />
              <FacebookRoundedIcon
                className={classes.iconStyle}
                fontSize="small"
              />
              <ListItemText
                className={classes.textStyle}
                primary={data[index].name}
              />
            </ListItemButton>
          </ListItem>
        </div>
      );
    },
    [],
  );

  return (
    <AutoSizer>
      {({ width }) => (
        <List
          // width={500}
          width={width}
          height={50}
          // height={height}
          rowHeight={30}
          rowRenderer={renderRow}
          rowCount={data.length}
          overscanRowCount={3}
        />
      )}
    </AutoSizer>
  );
};

export default VirtualizedList;

VirtualizedList.defaultProps = {
  onChange: () => {},
};
