import React from 'react'
import LoginIcon from "@mui/icons-material/Login";


import { Button } from '@mui/material';


function ButtonCommon({text}) {
  return (

    <Button
    variant="contained"
    color='primary'
    startIcon={<LoginIcon />}
    sx={{
      borderRadius:'50px',
      border:'none',
      padding:" 1em 2em",
      marginRight:'-0.6em',
      
      
    }}
  >
{text}  
</Button>

    )}

export default ButtonCommon