import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Avatar,
  ListItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import SearchBar from "../../leftPanelHeader/SearchBarTeam/SearchBarTeam";
import _ from "lodash";
import ModalLayout from "src/components/shared/atoms/ModalLayout";
import SearchField from "src/components/shared/atoms/SearchField";
import useStyles from "./Styles";

const ChooseAgents: React.FC = () => {
  const [showError, setShowError] = React.useState(false);
  //   const [allSelected, setAllSelected] = useState(false);
  const [allSelected, setAllSelected] = useState(false);

  //   const [pagination, setPagination] = useState({
  const [pagination] = useState({
    page: 0,
    hasNextPage: false,
    limit: 10,
  });

  const agentListData = {
    isSelected: false,
    picture: "wonderfu;",
    name: "jobs",
  };
  const list = Array.from({ length: 50 }, () => agentListData);

  //   const [query, setQuery] = useState(false);
  const loadMoreDataHandle = (i: React.SyntheticEvent) => {
    const bottom =
      (i.target as HTMLElement).scrollHeight -
        (i.target as HTMLElement).clientHeight -
        (i.target as HTMLElement).scrollTop <
      1;
    if (bottom) {
      if (pagination.hasNextPage) {
        // const activeUserDetail: string | null =
        //   localStorage.getItem("ActiveUserdetail");
        // const mainSuperAdminId: number | null = activeUserDetail
        //   ? Number(JSON.parse(activeUserDetail).mainSuperAdminId)
        //   : null;
        // const panelType: string | null = activeUserDetail
        //   ? JSON.parse(activeUserDetail).paneltype
        //   : null;
      }
    }
  };
  //   const activeUserDetail: string | null =
  //     localStorage.getItem("ActiveUserdetail");
  //   const mainSuperAdminId: number | null = activeUserDetail
  //     ? Number(JSON.parse(activeUserDetail).mainSuperAdminId)
  //     : null;
  //   const panelType: string | null = activeUserDetail
  //     ? JSON.parse(activeUserDetail).paneltype
  //     : null;

  const [listAgents, setListAgents] = useState<any[]>(list);
  const [searchListAgents, setSearchListAgents] = useState<any[]>(list);
  // const [listAgents, setListAgents] = useState<any[]>([]);
  // const [searchListAgents, setSearchListAgents] = useState<any[]>([]);

  const handleSelectAll = (flag: boolean) => {
    // const list = searchListAgentsFlag ? [...searchListAgents] : [...listAgents];
    // list.forEach((element) => {
    //   element.isSelected = flag;
    // });
    // if (!searchListAgentsFlag) { setListAgents(list) }
    // else {
    //   setSearchListAgents(list)
    // }
    // setAllSelected(flag);
    // setSelectedAgentIds(list)
    //
    // for time being
    setAllSelected(flag);
  };

  //   const [selectedAgentIds, setSelectedAgentIds] = useState<any[]>();
  const [, setSelectedAgentIds] = useState<any[]>();
  // inviteList.filter(
  //   (item: { designation: { paneltype: string } }) =>
  //     item.designation.paneltype !== "MANAGER",
  // ),

  const handleCheckListItem = (item_: any, flag: boolean) => {
    // lodash
    const newArr = _.map(listAgents, function (a) {
      return a.id === item_.id ? { ...a, isSelected: !flag } : a;
    });
    setListAgents(newArr);
    // array for selected id
    const selectedIds = newArr.filter((item) => item.isSelected);
    // for search list

    const newArrSearch = _.map(searchListAgents, function (a) {
      return a.id === item_.id ? { ...a, isSelected: !flag } : a;
    });
    setSearchListAgents(newArrSearch);
    const selectedSearchIds = newArrSearch.filter((item) => item.isSelected);

    // setSelectedAgentIds(prev => [...prev, ...selectedIds])
    setSelectedAgentIds([...selectedIds, ...selectedSearchIds]);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    // setInviteList([
    //   ...inviteList.filter(
    //     (item: { designation: { paneltype: string } }) =>
    //       item.designation.paneltype !== "AGENT",
    //   ),
    //   ...selectedAgentIds,
    // ]);
    // closeModal();
  };

  //   const [searchListAgentsFlag, setSearchListAgentsFlag] = useState(false);
  //   const handleSearch = _.debounce((e: React.ChangeEvent<HTMLInputElement>) => {
  //     // setListAgents([])
  //     setSearchListAgents([]);
  //     const query2 = e.target.value;
  //     if (query2 !== "") {
  //       setSearchListAgentsFlag(true);
  //     } else {
  //       setSearchListAgentsFlag(false);
  //       setQuery((prev) => !prev);
  //     }
  //   }, 500);

  React.useEffect(() => {
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }, [showError]);

  const { classes } = useStyles();
  const modalNode = (
    <>
      <Button className={classes.agentButton} disableRipple>
        <AddIcon className={classes.agentAddIcon} />
      </Button>
      <Typography className={classes.agentText}>Choose Agents</Typography>
    </>
  );
  const searchBarHandle = () => {};

  const searchFieldProps = {
    onChange: searchBarHandle,
    placeholder: "search",
    className: classes.fieldStyle,
  };
  return (
    // <ModalLayout headerText="Choose Agents" modalName="Choose Agents">
    <ModalLayout headerText="Choose Agents" modalName={modalNode}>
      <form onSubmit={handleSubmit}>
        <Box>
          {/* <SearchBar onChange={handleSearch} /> */}
          <SearchField {...searchFieldProps} />

          <Box sx={{ marginTop: showError ? "-8px" : "10px" }}>
            <Box>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={() => handleSelectAll(!allSelected)}
                // onChange={() => {}}
              />
              <Box component="span" className={classes.selectAll}>
                Select all
              </Box>
            </Box>
          </Box>

          <Box onScroll={loadMoreDataHandle} className={classes.loadMoreData}>
            {/* {!getAgentsQueryLoading && listAgents.length == 0 && ( */}
            <div className="m-auto text-center">
              <p className="font-small">No record found</p>
            </div>

            {listAgents.map((item_) => (
              <ListItem
                alignItems="center"
                sx={{ padding: "0px" }}
                key={item_.id}
              >
                <input
                  checked={item_.isSelected}
                  onChange={() => handleCheckListItem(item_, item_.isSelected)}
                  type="checkbox"
                />
                <Avatar
                  alt="John Doe"
                  className={classes.image}
                  src={item_.picture}
                />
                <Typography variant="subtitle2" className={classes.name}>
                  {item_.name}
                </Typography>
              </ListItem>
            ))}
            {searchListAgents.map((item_) => (
              <ListItem
                alignItems="center"
                sx={{ padding: "0px" }}
                key={item_.id}
              >
                <input
                  checked={item_.isSelected}
                  onChange={() => handleCheckListItem(item_, item_.isSelected)}
                  type="checkbox"
                />
                <Avatar
                  alt="John Doe"
                  className={classes.image}
                  src={item_.picture}
                />
                <Typography variant="subtitle2" className={classes.name}>
                  {item_.name}
                </Typography>
              </ListItem>
            ))}

            {/* {getAgentsQueryLoading && ( */}
            <div className="text-center">
              <CircularProgress className={classes.progress} thickness={2} />
            </div>
          </Box>
        </Box>

        <Box className={classes.submit}>
          <Button
            variant="contained"
            type="submit"
            //   disabled={selectedAgentIds.length > 0 ? false : true}
            className={classes.submitButton}
          >
            Invite
          </Button>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default ChooseAgents;
