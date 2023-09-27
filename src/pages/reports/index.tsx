import React, { useEffect, useState, useCallback } from "react";
import { Grid } from "@mui/material";
import {
  ReportsSummaryComp,
  ReportsCustomersReceived,
  ReportsPagesBreakdown,
  ReportsDataGridComp,
} from "src/components/pages/reports";
//
import { useSelector } from "react-redux";
import {
  ReportsInitialProp,
  getCustomerCountAndCountsPerPageResultItem,
  CustomerData,
} from "./Types";
import useDocumentTitle from "src/utils/shared/useDocumentTitle";
//
// import {
//   getCustomerCountAndCountsPerPagehandle,
//   tablularDataApiHandle,
//   getTablularData,
//   customerGraphicalReport,
//   customerTabularReport,
// } from "../../utils/reports";

const Report: React.FC<ReportsInitialProp> = () => {
  useDocumentTitle("Reports");
  const [customersReceivedCount, setCustomersReceivedCount] =
    useState<number>(0);
  const [pagesBreakdownData, setPagesBreakdownData] = useState<
    getCustomerCountAndCountsPerPageResultItem[]
  >([]);

  const [tabularData, setTabularData] = useState<CustomerData[]>([]);

  const [StartEnd, setStartEnd] = useState({
    start: "",
    end: "",
  });

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [reportsSummaryComponentData, setReportsSummaryComponentData] =
    useState<any[]>([]);

  const [paginationCount, setpaginationCount] = useState(0);

  return (
    <Grid
      container
      ml={2.5}
      mr={6}
      mt={10}
      sx={{
        height: "90%",
        width: "98%",
        marginBottom: 20,
        boxShadow: "0px 5px 10px rgba(127, 63, 152, 0.1)",
        borderRadius: "10px",
      }}
    >
      <>
        {" "}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <ReportsSummaryComp
                // authPanelType={authPanelType}
                //
                // CustomerCountAndCountsPerPageAccessories={
                //   CustomerCountAndCountsPerPageAccessories
                // }
                //
                // getCustomerCountAndCountsPerPagehandle={
                //   getCustomerCountAndCountsPerPagehandle
                // }
                //
                setSelectedIds={setSelectedIds}
                reportsSummaryComponentData={reportsSummaryComponentData}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ReportsCustomersReceived
                    text="Customers Received"
                    figure={customersReceivedCount}
                    // loading={getCustomerCountAndCountsPerPageLoading}
                    loading={false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReportsPagesBreakdown
                    pagesBreakdownData={pagesBreakdownData}
                    // loading={getCustomerCountAndCountsPerPageLoading}
                    loading={false}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={1}>
          {
            <ReportsDataGridComp
              //   getCustomerTabularDatasLoading={
              //     getCustomerCountAndCountsPerPageLoading ||
              //     getCustomerTabularDatasLoading
              //   }
              getCustomerTabularDatasLoading={false}
              paginationCount={paginationCount}
              //   tablularDataApiHandleAccessories={
              //     tablularDataApiHandleAccessories
              //   }
              //   tablularDataApiHandle={tablularDataApiHandle}
              tabularData={tabularData}
            />
          }
        </Grid>
        <Grid item xs={12} sx={{ height: 40 }}></Grid>
      </>
    </Grid>
  );
};

export default Report;
