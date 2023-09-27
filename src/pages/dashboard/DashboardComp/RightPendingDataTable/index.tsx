import React, { useState } from "react";
import { Grid } from "@mui/material";
import TotalNoOfPages from "src/components/pages/dashboard/TotalNoOfPages";

interface PendingChatPages {
  name: string;
  pageId: string;
  times: number;
}

const RightPendingDataChart: React.FC = () => {
  const [pendingChatPages] = useState<PendingChatPages[]>([
    { name: "pendingPageName", pageId: "123456", times: 5 },
  ]);
  return (
    <Grid item xs={12} md={4}>
      <TotalNoOfPages
        text="Pending Chats"
        figure={4}
        data={pendingChatPages}
        noChats=" No Pending Chats"
        getPendingChatCountQueryLoading={false}
      />
    </Grid>
  );
};

export default RightPendingDataChart;
