import React from 'react'
import {
    Typography,
    Stack,
    FormControl,
    InputAdornment,
    IconButton,
    OutlinedInput,
  } from "@mui/material";
  import CheckIcon from "@mui/icons-material/Check";
  import ButtonCommon from "../commonElements/ButtonCommon";
function SignUp() {
  return (
 
          <FormControl sx={{ m: 1, width: "100%" }}>
            <OutlinedInput
              sx={{
                width: "100%",

                borderRadius: "15em",
              }}
              variant="outlined"
              id="input-with-icon-adornment"
              placeholder='Your-Email'
              endAdornment={
                <InputAdornment position="end">
                    <ButtonCommon text="Sign Up" />
                </InputAdornment>
              }
              label="sign"
            ></OutlinedInput>
          </FormControl>
  )
}

export default SignUp
