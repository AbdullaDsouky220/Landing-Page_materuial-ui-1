import { FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import Plan from './Plan'

function Plans() {
    const[checked,setChecked]=useState(false)
    const handleChange=()=>{
        setChecked(!checked)
    }
    const plans=[
        {
            priceY:'free',
          pricem:'free',
          header:'Developer',
          subHeader:'For New Developer ',
          Pro:false
},
        {
          pricem:'$ 30 /Mo',
          priceY:'$ 324 /Yr ',
          header:'Starter',
          subHeader:'For Professional Developer',
          Pro:true
},
        {
            pricem:'$ 60 /Mo',
            priceY:'$ 648 /Yr ',
            header:'Business',
            subHeader:'For Small Businesses',
            Pro:false
},
        {
            pricem:'$ 160 /Mo',
            priceY:'$ 1728 /Yr ',
            header:'Enterprise',
            subHeader:'For Large companies',
            Pro:false
},
     
    ]
  return (
    <Stack id='Pricing'>
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
        <Typography variant='h5'>
            Choose a plan
        </Typography>
        <FormGroup>
  <FormControlLabel control={ <Switch
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>} label="Get up to 10% discount annually" />
</FormGroup>

<Grid container spacing={1}>
{
    plans.map((plan)=>{
        return <Grid key={plan.priceY} 
        item xs={12} sm={6} md={3} xl={3} lg={3}>
        <Plan plan={plan} checked={checked}/>
        </Grid>
    })
}


    </Grid>       
        </Container>
        </Stack>
  )
}

export default Plans
