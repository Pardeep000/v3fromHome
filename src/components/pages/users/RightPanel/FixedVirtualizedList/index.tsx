import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FixedSizeList, ListChildComponentProps } from "react-window";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Radio from "@mui/material/Radio";

function renderRow(props: ListChildComponentProps | any) {
  const { index, style, data, onChange } = props;

  const controlProps = (item: string) => ({
    checked: true,
    onChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <div style={style} key={data[index].id}>
      <ListItem
        component="div"
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        <ListItemButton
          disableRipple
          sx={{
            margin: 0,
            padding: 0,
          }}
        >
          <Radio {...controlProps("a")} size="small" />
          <FacebookRoundedIcon
            fontSize="small"
            sx={{
              color: "#0165E1",
            }}
          />
          <ListItemText
            sx={{
              marginLeft: 1,
            }}
            primary={data[index].name}
          />
        </ListItemButton>
      </ListItem>
    </div>
  );
}

const FixedVirtualizedList = ({
  data,
  onChange,
}: {
  data: any[];
  onChange?: (a: any) => void;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={(data.length + 2) * 20}
        width="100%"
        itemSize={54}
        itemCount={data.length}
        overscanCount={5}
        itemData={data}
        // to be seen later on
        onScroll={onChange}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
};

export default FixedVirtualizedList;

FixedVirtualizedList.defaultProps = {
  onChange: () => {},
};
