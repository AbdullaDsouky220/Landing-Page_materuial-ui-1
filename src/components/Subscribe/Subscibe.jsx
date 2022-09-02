import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import SignUp from '../Home/SignUp'

function Subscibe() {
  return (
    <Stack sx={{
        background:'#eee'
    }}>
        <Container sx={{
        padding:{
          xs:'4em',
          sm:'4em'
        },
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        gap:'2em',
       
      }}>
            <Typography variant='h5'>
            Subscribe & Request a Landing page

            </Typography>
            <SignUp/>
        </Container>
      
    </Stack>
  )
}

export default Subscibe
