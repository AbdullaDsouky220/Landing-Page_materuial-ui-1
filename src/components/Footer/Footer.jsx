import { Grid } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import About from "./About";
import Disclaimer from "./Disclaimer";
import FooterContact from "./FooterContact";

function Footer() {
  return (
    <Stack>
      <Container
        sx={{
          padding: {
            xs: "1em",
            sm: "4em",
          },
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "row",
          gap: "2em",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <About />
          </Grid>
          <Grid item xs={12} sm={12} md={3.5} lg={3} xl={3}>
          <FooterContact />
          </Grid>
          <Grid item xs={12} sm={12} md={2.5} lg={3} xl={3}>
          <Disclaimer />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Footer;
