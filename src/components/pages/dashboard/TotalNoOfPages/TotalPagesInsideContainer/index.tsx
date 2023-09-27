import React, { useState, useEffect } from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import useStyles from "./Styles";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "18px",
    fontStyle: "normal",
    color: "#fff",
    lineWidth: "20px",
    background: "black",
  },
});

interface Props {
  name: string;
  tooltipText?: string;
  pageId?: string;
  times?: number;
}

const ChatsByPagesInsideContainer: React.FC<Props> = ({
  name,
  times,
  tooltipText,
  pageId,
}) => {
  const { classes } = useStyles();

  const [facebookPageImg, setFacebookPageImg] = useState<string>("");
  // useEffect(() => {
  //   window?.FB?.api(
  //     `/${pageId}/picture`,
  //     {
  //       redirect: "0",
  //     },
  //     function (responsePicture: {
  //       error: any;
  //       data: { url: React.SetStateAction<string> };
  //     }) {
  //       if (responsePicture && !responsePicture.error) {
  //         setFacebookPageImg(responsePicture.data.url);
  //       }
  //     },
  //   );
  // }, [pageId]);

  return (
    <Grid container className={classes.inside} direction="column">
      <Grid item xs={1}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={1}>
            <Avatar src={facebookPageImg} className={classes.profile}>
              <Typography>{name?.slice(0, 1)}</Typography>
            </Avatar>
          </Grid>
          <Grid item xs={9} pt={1}>
            <StyledTooltip title={tooltipText}>
              <Typography className={classes.name} display="inline">
                {name}
              </Typography>
            </StyledTooltip>
          </Grid>
          <Grid item>
            <Typography className={classes.figure}>{times}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatsByPagesInsideContainer;
