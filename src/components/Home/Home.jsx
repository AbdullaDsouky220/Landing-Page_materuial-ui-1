import { Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function Home() {
  return (
    <main id='Home'>
    <Container>
      <Stack direction='row' sx={{
        display:'flex',
        alignItems:'center',
        flexDirection:{
            xs:'column',
            sm:'column',
            md:'row',
            lg:'row',
            xl:'row'
        }
      }}> 
       <LeftSide/> 
       <RightSide/>    
      </Stack>
    </Container>
    </main>
  )
}

export default Home
