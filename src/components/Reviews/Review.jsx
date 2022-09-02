import {
  Badge,
  Box,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import AlarmIcon from "@mui/icons-material/Alarm";
import SettingsIcon from "@mui/icons-material/Settings";
import TopicIcon from "@mui/icons-material/Topic";
import BackupIcon from "@mui/icons-material/Backup";
import Reviewer1 from '../../images/reviewer1.jpg'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
function Review({ review }) {
  const [shadow, setShadow] = useState(false);
  return (
    <Paper
      elevation={shadow ? 8 : 4}
      onMouseEnter={() => {
        setShadow(true);
      }}
      onMouseLeave={() => {
        setShadow(false);
      }}
      sx={{
        width:"100%",
        // height: "fit-content",
        transition: "300ms all ",
        "&:hover": {
          transform: "translatey(-4%)",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          gap: "1em",
          position: "relative",
        }}
      >
        <Typography variant="h5">{review.text}</Typography>
        <Typography variant="body2" color="textSecondary">
          Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu
          lorem convenire incorrupte. Vis mutat altera percipit ad.
        </Typography>
        <Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "start",
              gap: "1em",
              height: "100%",
              width: "100%",
            }}
          >
            <Stack sx={{
                height:'80px',
                width:'80px',
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1em",
              }}>
              <Grid container elevation={5}>
        <Grid item elevation={5} xl={12} xs={12} sm={12} md={12}>
        <Stack
        elevation={5}
        >
            <img 
            sx={{
            Width:'2em',
            Height:'2em',
            borderRadius:'50rem !important',
            }}src='http://evelynn-react.ui-lib.com/assets/images/face-2.jpg'/>
        </Stack>
        </Grid>
    </Grid>
            </Stack>

            <Stack
              sx={{
                width: "100%",
              }}
            >
              <Typography variant="h6">{review.name}</Typography>
              <Typography variant="body2" color="textSecondary">
{
 review.job
}              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Paper>
  );
}

export default Review;
