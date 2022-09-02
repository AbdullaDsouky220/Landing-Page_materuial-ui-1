import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

function Plan({plan,checked}) {
    const [shadow, setShadow] = useState(false);

    const features=['10GB of Bandwidth','Max 50 connection','512MB RAM','Unlimited access','Unlimited User','Data analytics']
  return (
    <Card  elevation={shadow ? 8 : 4}
    onMouseEnter={() => {
      setShadow(true);
    }}
    onMouseLeave={() => {
      setShadow(false);
    }}>
        <Stack sx={{
            backgroundColor:`${plan.Pro ? '#5393ff':'#eee'}`,
           
            padding:'1em',
            textAlign:'center'
        }}>
            <Typography variant='h6'  color={plan.Pro ? '#fff':'textSecondary'}>
            {plan.header}

            </Typography>
            <Typography variant='body2' color={plan.Pro ? '#fff':'textSecondary'}>
            {plan.subHeader}

            </Typography>
        </Stack>
        <CardContent>
                <Stack sx={{
                    display:'flex',
                    alignItems:'center',
                    padding:'1em',
                    gap:'0.5em'
                }}>
                    <Typography variant='h4' color='inherit'>
                        {checked?plan.priceY:plan.pricem}
                        </Typography>
                {
                    features.map((feature)=>{
                        return <Typography key={feature}variant='body2' color='textSecondary'>
                        {feature}
                        </Typography>
                    })
                }
                <CardActions>
            <Button variant='contained'>
                Choose
            </Button>
            </CardActions>

                </Stack>
        </CardContent>
       
    </Card>
  )
}

export default Plan
