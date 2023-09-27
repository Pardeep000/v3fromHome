import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
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
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-virtualized/styles.css";
import useStyles from "./Styles";

const userListData = {
  name: {
    uname: "MainSuperAdmin",
    uemail: "umair_naseer123@yahoo.com",
  },
  role: "SuperAdmin",
  status: "ACTIVE", // BLOCKED
  employed: "21/6/2021 19:11:3",
  action: "View Details",
};

const list = Array.from({ length: 50 }, () => userListData);

const UsersList = () => {
  const { classes } = useStyles();
  //
  const [hoveredRowIndex, setHoveredRowIndex] = React.useState<null | number>(
    null,
  );

  const handleMouseEnter = (index: RowMouseEventHandlerParams) => {
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

export default UsersList;
