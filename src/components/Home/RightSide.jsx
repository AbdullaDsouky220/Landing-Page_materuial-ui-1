import { Stack } from '@mui/system'
import React from 'react'
import image1 from '../Home/images/image1.png'
function RightSide() {
  return (
    <Stack sx={{
        width:{
            xs: "100%",
            sm: "80%",
            md: "50%",
            lg: "50%",
            xl: "50%",
        }
    }}>
        <Stack >
            <img  src={image1} alt='statemangment'/>
        </Stack>
    </Stack>
  )
}

export default RightSide