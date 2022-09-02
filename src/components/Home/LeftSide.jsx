import {
  Typography,
  Stack,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ButtonCommon from "../commonElements/ButtonCommon";
import SignUp from "./SignUp";
const features = [
  "Unlimited Projects",
  "Unlimited Team Members.",
  "Unlimited Disk Space.",
];
function LeftSide() {
  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "50%",
          xl: "50%",
        },
        display: "flex",
        alignItems: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "50%",
          xl: "50%",
        },
        padding: {
          xs: "2em 0",
        },
      }}
    >
      <Stack
        sx={{
          textAlign: {
            xs: "center",
            sm: "center",
            md: "start",
            lg: "center",
            xl: "center",
          },
        }}
      >
        <Typography
          variant="h3"
          color="primary"
          sx={{
            fontWeight: 700,
            display: "flex",
            flexDirection: "column",
            wordBreak: "break-all",
            lineHeight: "1.5em",
            textShadow: "0 4px 4px rgb(0 0 0 / 22%)",
          }}
        >
          Better <span>Management;</span> Less Expense
        </Typography>
      </Stack>

      <Typography variant="h6" color="#000000de">
        Not sure about Pro? Try trial first!
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
            xl: "start",
          },
          gap: "1em",
        }}
      >
        {features.map((feature) => {
          return (
            <span
            key={feature}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1em",
              }}
            >
              <CheckIcon
                sx={{
                  color: "#f97316",
                }}
              />
              {feature}
            </span>
          );
        })}

       <SignUp/>
      </Stack>
    </Stack>
  );
}

export default LeftSide;
