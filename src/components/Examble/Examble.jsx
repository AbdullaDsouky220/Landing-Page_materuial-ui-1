import { Button, ButtonGroup, Container, Grid, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useState } from 'react'

function Examble() {
    const exambles=[
        {
        name:'LOGIN',
        image:'http://evelynn-react.ui-lib.com/assets/images/screenshots/login.jpg'
    },
        {
        name:'DASHBOARD',
        image:'http://evelynn-react.ui-lib.com/assets/images/screenshots/dashboard.jpg'
    },
        {
        name:'CALENDAR',
        image:'http://evelynn-react.ui-lib.com/assets/images/screenshots/calendar.jpg'
    },
]
const [srcImage,setImageSrc]=useState(exambles[0].image)
  return (
    <Stack 
    sx={{
        
        background:'#eee'
    }}>
<Container 

sx={{
    padding:'4em',
}}>
<Stack

  variant="outlined"
  sx={{
    display:'flex',
    gap:'1em'
  }}
  onClick={((e)=>setImageSrc(e.target.value))}
>
 {
    exambles.map((examble)=>{

        return <Button   
        key={examble.name}value={examble.image}>{examble.name}</Button>
    })
 }
</Stack>
<Stack sx={{
    marginTop:'1em'
}}>
    <Grid container elevation={5}>
        <Grid item elevation={5} xl={12} xs={12} sm={12} md={12}>
        <Stack
        elevation={5}
        >
            <img 
            sx={{
            Width:'100%',
            Height:'100%'
            }}src={srcImage}/>
        </Stack>
        </Grid>
    </Grid>
</Stack>
<Stack 
spacing={2}sx={{
    margin:'4em 0'
}}>
    <Typography variant='h5'>
    Manage your tasks & project efficiently

    </Typography>
    <Typography variant='body2' color='textSecondary'>
    Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.

    </Typography>
    <Typography variant='body2' color='textSecondary'>
    Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per.
    </Typography>
    <Button sx={{
    width:'10em'
    }}variant='contained'>
        View details 
    </Button>
</Stack>
</Container>
    </Stack>

    )
}

export default Examble