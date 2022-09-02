import { CardContent, Paper, Typography } from '@mui/material'
import React from 'react'
import PaymentIcon from "@mui/icons-material/Payment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
function SingleService({service}) {
  return (
    <Paper
    shape="rounded"
    variant="outlined"
    sx={{
      width: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xg: "100%",
      },
      height: "10em",
      transition:
          "300ms all",
      textAlign: "center",
      borderRadius: "0.5em",
      "&:hover": {
        
        boxShadow:
          "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
        color:'#ff9100'
        },
    }}
  >
    <CardContent>
      <Typography>{service.name}</Typography>
    </CardContent>

  {  service.icon =='PaymentIcon'?< PaymentIcon sx={{
  fontSize:'5em',
  }}/>:service.icon==='AccountBalanceIcon'?<AccountBalanceIcon sx={{
    fontSize:'5em',
    }}/>:<ReceiptIcon sx={{
        fontSize:'5em',
        }}/>
  
  }
    
  </Paper>
  )
}

export default SingleService