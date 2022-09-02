import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ButtonCommon from "../commonElements/ButtonCommon";
const pages = ["Home",  "Service", "Features", "Pricing", "Contact"];
function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        },
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2em",
        top:'0px',
        position:'sticky',
        zIndex:'1000'
     
      }}
    >
      <AppBar position="static" color="inherit">
        <Container>
          <Toolbar>
            <Stack
              direction="row"
              spacing={6}
              sx={{
                display: "flex",
                alignItems: "center",

                justifyContent: "center",
                padding:'0 5em'
              }}
            >
              <Stack direction="row" xs={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 600,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Landing page
                </Typography>
                {pages.map((page) => {
                  return (
                    <Button key={page} color="inherit" size="small" onClick={()=>window.location.href='#'+page}>
                     
                     <Typography
                        sx={{
                          mr: 2,
                          display: { xs: "none", md: "flex" },
                          // fontFamily: "monospace",
                          fontWeight: 700,
                          color: "inherit",
                          textDecoration: "none",
                        }}
                        variant="body"
                      >
                        {page}
                      </Typography>
                  
                    </Button>
                  );
                })}
              </Stack>
              <Stack>
                
                  <Button variant='contained' sx={{
                    width:'10em',
                    borderRadius:'10em',
                  }}>Sign Up</Button>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Stack>
  );
}

export default Header;
