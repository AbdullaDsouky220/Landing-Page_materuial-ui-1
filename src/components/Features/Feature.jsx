import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import PaymentIcon from "@mui/icons-material/Payment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function Feature({feature}) {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <Grid item sx={{
        display:'flex',
        flexDirection:'column',
        gap:'1em',
        transition:'0.5s all',
        alignItems:"center",
        justifyContent:'center'
    }}>
        <Paper
        onMouseEnter={(()=>{
            setIsHovered(true)
        })}
        onMouseLeave={(()=>{
            setIsHovered(false)
        })}
        elevation={isHovered?10:0}
        sx={{
            borderRadius:'50%',
            width:'10em',
            height:'10em',
            display:'flex',
            transition:'0.5s all',
            alignItems:"center",
            justifyContent:'center'
        }}>
           
            
  {  feature.icon =='PaymentIcon'?< PaymentIcon color={isHovered?'primary':'inherit'}
            sx={{
            fontSize:'8em'
            }}
            />:feature.icon==='AccountBalanceIcon'?<AccountBalanceIcon color={isHovered?'primary':'inherit'}
            sx={{
            fontSize:'8em'
            }}/>:<ReceiptIcon color={isHovered?'primary':'inherit'}
            sx={{
            fontSize:'8em'
            }}
            />
  
  }
        </Paper>
            <Typography variant='body2' color='textSecondary'>
         {
            feature.name
         }


            </Typography>
    </Grid>  )
}

export default Feature