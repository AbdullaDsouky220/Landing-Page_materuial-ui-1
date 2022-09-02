import { Paper, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
function FooterContact() {
  return (
    <Paper sx={
        {
            display:'flex',
            alignItems:'start',
            justifyContent:'center',
            flexDirection:'column',
            gap:'1em',
            padding:'1em',
            
        }}>
            <Typography variant='h5'>
                Contact Us
            </Typography>
            <Stack sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                gap:'1em',

            }}>
                <MailIcon color='primary'/>
                <Stack>
                <Typography variant='h6'>
                    Email
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                    Abdodsouky0@gmail.com
                </Typography>
                </Stack>
            </Stack>
            <Stack sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'row',
                gap:'1em',

            }}>
                <LocationOnIcon color='primary'/>
                <Stack>
                <Typography variant='h6'>
                    Adress
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  BeniSuif,Egypt
                </Typography>
                </Stack>
            </Stack>
       
        </Paper>
  )
}

export default FooterContact