import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SingleService from "./SingleService";

const Services = [
  {
    name: "INVOICING ",
    icon: "ReceiptIcon",
  },
  {
    name: "PAYMENT GATEWAY",
    icon: "PaymentIcon",
  },
  {
    name: "CUSTOMER RECORDS",
    icon: "AccountBalanceIcon",
  },
  {
    name: "CLOUD SYNC",
    icon: "PaymentIcon",
  },
];

function Service() {
  return (
    <Stack
    id='Service'
      sx={{
        backgroundColor: "#eee",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          alignItems: "center",
          justifyContent:'center',
          padding:{
            xs:'1em',
            sm:'4em'
          },

        }}
      >
        <Stack
          sx={{
            width: {
              xs:'100%',
              sm:'100%',
              md:'50%',
              lg:'50%',
              xl:'50%'
            },
            display: "flex",
            alignItems:'center',
            flexDirection: "column",

          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              padding: "1em",
            }}
          >
            {Services.map((service) => {
              return (
                <Grid key={service.name} item xs={12}
                 sm={6} md={6}
                    elevation={6}
                  lg={6}>
                    <SingleService service={service}/>
                  
                </Grid>
              );
            })}
          </Grid>
        </Stack>
        <Stack
          sx={{
            width: {
              xs:'22em',
              sm:'95%',
              md:'50%',
              lg:'50%',
              xl:'50%'
            },
            display: "flex",
            alignItems:'start ',
            flexDirection: "column",
            gap: "2em",
            marginTop:'2em'
          }}
        >
          <Typography variant="h4" color="inherit">
            Made by business people for business people
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu
            lorem convenire incorrupte. Lorem ipsum dolor sit amet,
          </Typography>
          <Typography variant="body2" color="textSecondary">
            vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
            Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus
            appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per.
          </Typography>
          <Button variant="contained" sx={{
            width:'30%',
            borderRadius:'2em',
          }}>
            Try Free
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Service;
