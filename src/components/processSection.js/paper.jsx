import { CardContent, makeStyles, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import AlarmIcon from "@mui/icons-material/Alarm";
import SettingsIcon from "@mui/icons-material/Settings";
import TopicIcon from "@mui/icons-material/Topic";
import BackupIcon from "@mui/icons-material/Backup";
function PaperComponent({text}) {
    
    const [shadow, setShadow] = useState(false)

  return (
    <Paper
    elevation={shadow?4:1}
    onMouseEnter={(()=>{
        setShadow(true)
    })}
    onMouseLeave={(()=>{
        setShadow(false)
    })}
    sx={{
      height: "fit-content",
      overflow: "hidden",
      transition:'300ms all ',
      '&:hover':{
        transform:'translatey(-4%)',
        boxShadow:'0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
      }

    }}
  >
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Stack
        sx={{
          maxWidth:{
            xs:"50%",
            sm:'20%',
            md:'15%',
            lg:'15%',
            xl:'15%'
          },
          transform: " translatex(-50%) translatey(25%) rotate(40deg)",
        }}
      >
        <AlarmIcon
        color={shadow?'primary':'inherit'}
          sx={{
            fontSize:  `${shadow ? '11em' :'10em'}`,
            transition:'all 0.5s '
            
                   
          }}
        />
      </Stack>
      <Stack spacing={2} sx={{
        maxWidth:{
            xs:'55%',
            sm:'40%',
            md:'40%',
            lg:'40%',
            xl:'20%'
        }
      }}>
        <Typography variant="h5">{text}</Typography>
        <Typography color="textSecondary" variant="body2">
          Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no,
          has eu lorem convenire incorrupte
        </Typography>
      </Stack>
    </CardContent>
  </Paper>  )
}

export default PaperComponent