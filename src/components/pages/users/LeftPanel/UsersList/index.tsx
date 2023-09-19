import React, { useEffect } from "react";
import {
  Column,
  Table,
  AutoSizer,
  RowMouseEventHandlerParams,
} from "react-virtualized";
import { Box } from "@mui/material";
import {
  basicProfileRender,
  roleRender,
  statusRender,
  employedRender,
  buttonRender,
} from "../UsersListRenderers";
import "react-virtualized/styles.css";
import useStyles from "./Styles";

const userListData = {
  name: {
    uname: "MainSuperAdmin",
    uemail: "umair_naseer123@yahoo.com",
  },
  role: "Superadmin",
  status: "ACTIVE",
  employed: "21/6/2021 19:11:3",
  action: "View Details",
};

const list = Array.from({ length: 50 }, () => userListData);

const Index = () => {
  const { classes } = useStyles();
  //
  const [hoveredRowIndex, setHoveredRowIndex] = React.useState<null | number>(
    null,
  );

  const handleMouseEnter = (index: RowMouseEventHandlerParams) => {
    console.log("enter index", index.index);
    setHoveredRowIndex(index.index);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
  };

  const [columnWidths, setColumnWidths] = React.useState({
    name: 100,
    role: 100,
    status: 100,
    employed: 100,
    action: 150,
  });

  const updateColumnWidths = ({ width }: { width: number }) => {
    console.log("autoSizervalue__ inside", width);
    const val = width / 100;
    setColumnWidths({
      ...columnWidths,
      name: val * 50,
      role: val * 20,
      status: val * 20,
      employed: val * 20,
      action: val * 30,
    });
  };
  useEffect(() => {
    console.log("valuegotchanged", columnWidths);
  }, [columnWidths]);
  //
  return (
    <Box className={classes.usersListLayout}>
      <AutoSizer onResize={({ width }) => updateColumnWidths({ width })}>
        {({ width, height }) => (
          <Table
            width={width}
            height={height}
            headerHeight={50}
            rowHeight={60}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
            //
            headerClassName={classes.headerStyle}
            rowClassName={({ index }) =>
              index === -1 ? "null" : classes.rowDivider
            }
            onRowMouseOver={(index) => handleMouseEnter(index)}
            onRowMouseOut={() => handleMouseLeave()}
          >
            <Column
              width={(width / 100) * 50}
              // width={columnWidths.name}
              label="Name"
              dataKey="name"
              cellRenderer={({ cellData }) => basicProfileRender({ cellData })}
            />
            <Column
              width={(width / 100) * 20}
              // width={columnWidths.role}
              label="Role"
              dataKey="role"
              cellRenderer={({ cellData }) => roleRender({ cellData })}
            />
            <Column
              width={(width / 100) * 20}
              // width={columnWidths.status}
              label="Status"
              dataKey="status"
              cellRenderer={({ cellData }) => statusRender({ cellData })}
            />
            <Column
              width={(width / 100) * 20}
              // width={columnWidths.employed}
              label="Employed"
              dataKey="employed"
              cellRenderer={({ cellData }) => employedRender({ cellData })}
            />
            <Column
              width={(width / 100) * 30}
              // width={columnWidths.action}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              label=""
              dataKey="action"
              //
              cellRenderer={({ cellData, rowIndex }) =>
                buttonRender({ cellData, hoveredRowIndex, rowIndex })
              }
            />
          </Table>
        )}
      </AutoSizer>
    </Box>
  );
};

export default Index;
