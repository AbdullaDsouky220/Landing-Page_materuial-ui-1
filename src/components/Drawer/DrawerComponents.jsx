import {
  Box,
  Button,
  Drawer,
  IconButton,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerComponents() {
  const [isOpening, setIsOpening] = useState(false);
  const pages = ["Home",  "Service", "Features", "Pricing", "Contact"];


  return (
    <Stack
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >

<IconButton sx={
  {
    borderRadius:'50%',
    padding:'1px',
    position:'fixed',
    width:'2em',
    zIndex:'100',
    height:'2em',
    border:'1px solid #eee',
  boxShadow:'0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'}
} onClick={() => setIsOpening(true)} color="inherit">
    
  <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        role="presentation"
        open={isOpening}
        onClose={() => setIsOpening(false)}
      >
        <Stack direction="column" color="inherit" spacing={6}>
          <Stack direction="row" 
          spacing={20}
           padding="5px 20px "
           sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
           }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "block", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              logo
            </Typography>
            <IconButton onClick={() => setIsOpening(false)} color="inherit">
              <ClearIcon />
            </IconButton>
          </Stack>
          <Stack direction="column" spacing={3} padding="5px 20px ">
            <MenuList spacing={3}>
              {pages.map((page) => {
                return (
                  <MenuItem
                  key={page}
                  onClick={()=>window.location.href='#'+page}
                    sx={{
                      mr: 2,
                      display: { xs: "block", md: "none" },
                      fontFamily: "monospace",
                      fontWeight: 600,
                      color: "inherit",
                      textDecoration: "none",
                      letterSpacing: "0.1em",
                    }}
                    variant="outlined"
                  >
                   
                    {page}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Stack>
          <Stack width="250px" spacing={3} padding="15px">
            <Button
              width="150px"
              variant="outlined"
              color="inherit"
              startIcon={<LoginIcon />}
            >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </Stack>
  );
}

export default DrawerComponents;
