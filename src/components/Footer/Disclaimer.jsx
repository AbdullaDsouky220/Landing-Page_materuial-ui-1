import { Paper, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';import MailIcon from '@mui/icons-material/Mail';
function Disclaimer() {
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
                Disclaimer 
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?
            </Typography>
           
       <Stack direction='row' spacing={2}>
<LinkedInIcon color='primary'/>
<TwitterIcon color='primary'/>
<FacebookIcon color='primary'/>
       </Stack>
        </Paper>
  )
}

export default Disclaimer