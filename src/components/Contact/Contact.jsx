import { IconButton, Paper, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
function Contact() {
  return (
    <Stack
    id='Contact'
      sx={{
        background: "#eee",
      }}
    >
      <Container
        sx={{
          padding: {
            xs: "1em",
            sm: "4em",
          },
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          gap: "3em",
        }}
      >
        <Typography variant="h4">Send Us an Email</Typography>
        <Typography variant="body2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          error.
        </Typography>
        <Stack
          sx={{
            width: "100%",
            display: "flex",

            flexDirection: "column",
            gap: "1em",
          }}
        >
          <TextField   label="Name" variant="standard" />
          <TextField   label="Email" variant="standard" />
          <TextField   label="Subject" variant="standard" />
          <TextField   label="Message" variant="standard" />
        <Paper  
        sx={{
            width:'2em',
            cursor:'pointer',
            height:'2em',
            display: "flex",
          alignItems: "start",
          justifyContent: "center",
            borderRadius:'50%',
            padding:'0.5em'
        }}>
            <SendIcon color='primary'/>
        </Paper>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Contact;
