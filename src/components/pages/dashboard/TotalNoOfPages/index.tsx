import React from "react";
import {
  CardContent,
  Divider,
  Grid,
  Typography,
  Card,
  Box,
  CircularProgress,
  Badge,
} from "@mui/material";
import useStyles from "./Styles";
import TotalPagesInsideContainer from "./TotalPagesInsideContainer";

interface PendingChatPages {
  name: string;
  pageId: string;
  times: number;
}

interface Props {
  text: String;
  figure?: number;
  data?: PendingChatPages[];
  noChats: string;
  getPendingChatCountQueryLoading?: boolean;
}

const ChatsByPages: React.FC<Props> = ({
  text,
  figure,
  data,
  noChats,
  getPendingChatCountQueryLoading,
}) => {
  const { classes } = useStyles();
  console.log("data__", data);
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Grid container>
            <Grid item xs={12} className={classes.top}>
              <Grid
                container
                alignContent="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Badge color="secondary" badgeContent={figure}>
                    <Typography className={classes.typography}>
                      {text}
                    </Typography>
                  </Badge>
                </Grid>
              </Grid>
            </Grid>
            {!getPendingChatCountQueryLoading ? (
              <Grid
                item
                xs={12}
                sx={{ overflowY: "auto", overflowX: "hidden", height: 372 }}
                pb={2}
              >
                {data && data?.length !== 0 && text !== "Sales by Agents" ? (
                  data?.map((item: PendingChatPages, index: number) => {
                    return (
                      <Box key={index}>
                        <TotalPagesInsideContainer
                          tooltipText={item.name}
                          name={item?.name}
                          pageId={item.pageId}
                          times={item.times}
                        />
                        <Divider />
                      </Box>
                    );
                  })
                ) : (
                  <Box
                    style={{
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      color: "gray",
                      marginTop: "10%",
                    }}
                  >
                    <Typography>{noChats}</Typography>
                  </Box>
                )}
              </Grid>
            ) : (
              <CircularProgress
                size={24}
                sx={{
                  margin: "auto",
                  display: "block",
                  marginTop: 20,
                  fontWeight: "400",
                  color: "#4d1277",
                }}
              />
            )}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ChatsByPages;
