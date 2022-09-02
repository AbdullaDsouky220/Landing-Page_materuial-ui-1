import { Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import Review from './Review'

function Reviews() {
  const reviews=[
    {
      name:'Dan Shwartz',
      text:'Amazed by the product  ',
      job:'Software engineer'
    },
    {
      name:'Hellen Miller',
      text:'Very nice support',
      job:'Accountant'
    },
    {
      name:'Jane Guzmann',
      text:'My tasks are now painless',
      job:'CEO'
    },
    {
      name:'Anthony Leblanc',
      text:'Amazed by the product ',
      job:'ounder at Hereby'
    },
  ]
  return (
    <Stack>
      <Container sx={{
        padding:{
          xs:'1em',
          sm:'4em'
        },
        display:'flex',
        alignItems:'start',
        justifyContent:'center',
        flexDirection:'column',
        gap:'2em'
      }}>
        <Stack>
            <Typography variant='h5'>
            We Are Trusted

            </Typography>
            <Typography variant='body2' color='textSecondary'>
            Access integrations and new features in a matter of seconds


            </Typography>
        </Stack>
      {
        reviews.map((review)=>{
          return   <Review  key={review.name} review={review}/>
        })
      }
      </Container>
    </Stack>
  )
}

export default Reviews
