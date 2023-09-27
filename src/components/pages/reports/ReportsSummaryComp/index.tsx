import { useState, useMemo, useEffect, useCallback } from "react";
import useStyles from "./Styles";
import { Grid, Card, Typography, Button, Stack } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import chartData from "./growth";
import ReportsSummaryCompSelect from "./components/ReportsSummaryCompSelect/ReportsSummaryCompSelect";
import ReportsSummaryCompSelectChips from "./components/ReportsSummaryCompSelectChips/ReportsSummaryCompSelectChips";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import moment from "moment";
import {
  ManagersQueryResultItem,
  getCustomerCountAndCountsPerPageResultItem,
} from "./Types";

interface Props {
  authPanelType?: String;
  setSelectedIds: any;
  getCustomerCountAndCountsPerPagehandle?: (s: any) => void;
  CustomerCountAndCountsPerPageAccessories?: any;
  reportsSummaryComponentData: getCustomerCountAndCountsPerPageResultItem[];
}

const ReportsSummaryComp: React.FC<Props> = ({
  getCustomerCountAndCountsPerPagehandle,
  CustomerCountAndCountsPerPageAccessories,
  authPanelType,
  reportsSummaryComponentData,
  setSelectedIds,
}) => {
  const [datePicker, setDatePicker] = useState<boolean>(false);
  const { classes } = useStyles();
  const [selectedPages, setSelectedPages] = useState([""]);
  const [horizontalData, setHorizontalData] = useState<string[]>([]);
  const [verticalData, setVerticalData] = useState<number[]>([]);

  useEffect(() => {
    const fileredata = reportsSummaryComponentData.filter(
      (item: getCustomerCountAndCountsPerPageResultItem) =>
        selectedPages.includes(item.pageId),
    );
    const { chatDates, pageCountSums } = giveChartCalculatedValues(fileredata);
    setHorizontalData(chatDates);
    setVerticalData(pageCountSums);
  }, [selectedPages]);

  useEffect(() => {
    const { chatDates, pageCountSums } = giveChartCalculatedValues(
      reportsSummaryComponentData,
    );
    setHorizontalData(chatDates);
    setVerticalData(pageCountSums);
  }, [reportsSummaryComponentData]);

  //funciton to calculate the horizontal and vertical values based on the data

  const giveChartCalculatedValues = useCallback((data: any) => {
    const groupedByChatDate: Record<
      string,
      getCustomerCountAndCountsPerPageResultItem[]
    > = {};
    // Iterate through the data and group by chatDate
    data.forEach((item: getCustomerCountAndCountsPerPageResultItem) => {
      const chatDate = item.chatDate;
      if (!groupedByChatDate[chatDate]) {
        groupedByChatDate[chatDate] = [];
      }
      groupedByChatDate[chatDate].push(item);
      // now you are getting key value pairs of chat date of same date
    });
    // Extract chat dates and calculate pageCount sums
    const chatDates: string[] = [];
    const pageCountSums: number[] = [];

    for (const chatDate in groupedByChatDate) {
      if (groupedByChatDate.hasOwnProperty(chatDate)) {
        chatDates.push(chatDate);
        const pageCountSum = groupedByChatDate[chatDate].reduce(
          (sum, item) => sum + item.pageCount,
          0,
        );
        pageCountSums.push(pageCountSum);
      }
    }

    return {
      chatDates,
      pageCountSums,
    };
  }, []);

  // Function to remove duplicate objects based on pageId
  const removeDuplicates = (
    arr: getCustomerCountAndCountsPerPageResultItem[],
  ) => {
    const uniqueMap = new Map();
    arr.forEach((obj: getCustomerCountAndCountsPerPageResultItem) => {
      if (!uniqueMap.has(obj.pageId)) {
        uniqueMap.set(obj.pageId, obj);
      }
    });
    return Array.from(uniqueMap.values());
  };

  const facebookPageList: ManagersQueryResultItem[] = removeDuplicates(
    reportsSummaryComponentData,
  ).map((item: getCustomerCountAndCountsPerPageResultItem) => ({
    id: item.pageId,
    name: item.pageName,
  }));
  const reportData = chartData(horizontalData, verticalData);
  const apexcharts = useMemo(
    () => <ReactApexChart key={"bar"} {...reportData} type={"bar"} />,
    [verticalData, horizontalData],
  );

  const handleDatePickerClick = () => {
    setDatePicker(!datePicker);
  };
  const handleDatePickerSubmit = () => {
    // getCustomerCountAndCountsPerPagehandle(StartEnd)
    //
    // const {
    //   setStartEnd,
    //   authPanelType,
    //   authUserId,
    //   selectedIds,
    //   getCustomerCountAndCountsPerPage,
    // } = CustomerCountAndCountsPerPageAccessories;
    // getCustomerCountAndCountsPerPagehandle({
    //   StartEnd,
    //   setStartEnd,
    //   authPanelType,
    //   authUserId,
    //   selectedIds,
    //   getCustomerCountAndCountsPerPage,
    // });
    //
    // CustomerCountAndCountsPerPageAccessories
    setDatePicker(!datePicker);
  };

  const [StartEnd, setStartEnd] = useState({
    start: "",
    end: "",
  });

  const adate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  const [state, setState] = useState([
    {
      startDate: new Date(adate),
      endDate: new Date(adate),
      key: "selection",
    },
  ]);

  const setDateRange = (item: any) => {
    let startdate = moment(item.selection.startDate).format(
      "YYYY-MM-DD 10:00:00",
    );
    let enddate = moment(item.selection.endDate)
      .add(1, "days")
      .format("YYYY-MM-DD 09:59:59");

    setStartEnd({ start: startdate, end: enddate });

    setState([item.selection]);
  };

  // selects

  const [selectedNames, setSelectedNames] = useState<any[]>([]);
  const [selectedAgentsIds, setSelectedAgentsIds] = useState<string[]>([]);
  const [selectedManagersIds, setSelectedManagersIds] = useState<string[]>([]);
  const [managersList, setManagersList] = useState<ManagersQueryResultItem[]>(
    [],
  );
  const [agentsList, setAgentsList] = useState<ManagersQueryResultItem[]>([]);

  // handle funciton for deleting chips
  const handleDeleteChip = (id: number) => {
    const newChips = selectedNames.filter((chip) => chip.id !== id);
    setSelectedIds(newChips.map((item) => item.id));
    setSelectedNames(newChips);
  };

  return (
    <>
      <Card className={classes.chart}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item md={8} ml={2}>
                <Typography className={classes.text}>Summary</Typography>
              </Grid>
              <Grid item mt={2} mr={2}>
                <Button
                  sx={{
                    height: "32px",
                    width: "109px",
                    fontSize: "12px",
                    fontWeight: 500,
                    textDecoration: "capitalize",
                  }}
                  onClick={handleDatePickerClick}
                  color="primary"
                  variant="contained"
                >
                  Select date{" "}
                </Button>

                {datePicker && (
                  <div
                    className="myclass"
                    style={{
                      position: "absolute",
                      left: "15%",
                      zIndex: "10",
                      top: "25%",
                      boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.1)",
                      display: "flex",
                      flexDirection: "column",
                      background: "white",
                    }}
                  >
                    <DateRangePicker
                      onChange={(item: any) => setDateRange(item)}
                      // showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      ranges={state}
                      rangeColors={["#4D1277"]}
                      direction="horizontal"
                      preventSnapRefocus={true}
                      calendarFocus="backwards"
                    />
                    <Button
                      sx={{
                        height: "32px",
                        width: "109px",
                        fontSize: "12px",
                        fontWeight: 500,
                        textDecoration: "capitalize",
                        marginLeft: "auto",
                        padding: "10px",
                        marginBottom: "10px",
                        marginRight: "20px",
                      }}
                      onClick={handleDatePickerSubmit}
                      color="primary"
                      variant="contained"
                    >
                      Confirm
                    </Button>
                  </div>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    {authPanelType === "SUPERADMIN" && (
                      <ReportsSummaryCompSelect
                        type="Manager"
                        list={managersList}
                        setSelectedIds={setSelectedManagersIds}
                      />
                    )}
                    {authPanelType !== "AGENT" && (
                      <ReportsSummaryCompSelect
                        type="Agent"
                        list={agentsList}
                        setSelectedIds={setSelectedAgentsIds}
                      />
                    )}
                    {
                      <ReportsSummaryCompSelect
                        type="Pages"
                        list={facebookPageList}
                        setSelectedIds={setSelectedPages}
                      />
                    }
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} ml={2} mt={-2}>
                <ReportsSummaryCompSelectChips
                  selectedNames={selectedNames}
                  handleDeleteChip={handleDeleteChip}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {apexcharts}
        </Grid>
      </Card>
    </>
  );
};

export default ReportsSummaryComp;
