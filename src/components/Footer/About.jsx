import { Button, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function About() {
  return (
    <Paper sx={
        {
            display:'flex',
            alignItems:'start',
            justifyContent:'center',
            flexDirection:'column',
            gap:'1em',
            padding:'1em',
            
        }
    }>
        <Typography variant='h5'>
            About US
        </Typography>
        <Typography variant='body2' color='textSecondary'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Officiis perferendis rem, aut aliquam.
        </Typography>
        <Button variant='contained'>
            Contact Us
        </Button>
    </Paper>
  )
}

export default About