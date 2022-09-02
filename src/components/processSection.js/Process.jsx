import { Button, Card, CardContent, Container, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import PaperComponent from "./paper";

function Process() {
    const processes=['Choose Technology','Setup Workflows','Learn from Data','Scale Up'
]

  return (
    <Stack >
      <Container sx={{
        display:'flex',
        flexDirection:'column',
        gap:'1em',
        padding:{
          xs:'1em',
          sm:'4em'
        },
      }} >
        <Typography variant="h4" color="inherit">
          Integrate Your Process
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Access integrations and new features in a matter of seconds
        </Typography>
        <Stack spacing={4}>
         {
            processes.map((process)=>(
                <PaperComponent  key={process}text={process} />
            ))
         }
        
          <Stack  sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Button sx={{
              width:'14.5em'
            }} variant='contained' >
              Start Your Free Trial</Button></Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Process;
