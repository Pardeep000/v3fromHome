import React, { useState } from "react";
import { Grid } from "@mui/material";
import TotalChatsChart from "src/components/pages/dashboard/TotalChatsChart";

const LeftGraphicalChart: React.FC = () => {
  const [totalChatsSelectValue, setTotalChatsSelectValue] = useState("Today");
  const [totalChatsGraphData] = useState([
    { pageCount: 2, pageName: "AppTesting" },
    { pageCount: 3, pageName: "DataMining" },
  ]);
  return (
    <Grid item xs={12} md={8}>
      <TotalChatsChart
        selectValue={totalChatsSelectValue}
        data={totalChatsGraphData}
        selectChange={setTotalChatsSelectValue}
        authPanelType={"SUPERADMIN"}
        text="Total Chats"
      />
    </Grid>
  );
};

export default LeftGraphicalChart;
