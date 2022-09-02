import { Grid, Paper, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { useState } from 'react'
import Feature from './Feature';
function Features() {
    const features = [
        {
          name: "SELL EVERYWHERE  ",
          icon: "ReceiptIcon",
        },
        {
          name: "SECURED PAYMENTS ",
          icon: "PaymentIcon",
        },
        {
          name: "SMART PRICING ",
          icon: "AccountBalanceIcon",
        },
        {
          name: "CLOUD SYNCGO BEYOND",
          icon: "PaymentIcon",
        },
      ];
    return (
    <Stack id='Features'>
        <Container sx={{
            padding:'4em',
            display:'flex',
            flexDirection:'column',
                        alignItems:"center",
                        justifyContent:'center'
        }}>
            <Stack>
            <Typography variant='h5'>
                Grow Your Business
            </Typography>
            <Typography color='textSecondary' variant='body2'>
            Access integrations and new features in a matter of seconds


            </Typography>
            </Stack>
            <Grid container sx={{
                display:'flex',
                flexDirection:'column',
                margin:'1em 0em',
                            alignItems:"center",
                            justifyContent:'center'
            }}>
{
    features.map((feature)=>{
       return  <Feature feature={feature} key={feature.name}/>

    })
}               
            </Grid>
        </Container>
    </Stack>
  )
}

export default Features