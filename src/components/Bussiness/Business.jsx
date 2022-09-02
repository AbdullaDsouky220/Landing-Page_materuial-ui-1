import { Button, Grid, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import image from '../../images/1.svg'


function Business() {
  return (
<Stack sx={{
    background:'#eee'
}}>
    <Container sx={{
        padding:"4em",
        display: "flex",
        alignItems:'start ',
        flexDirection: "column",
        gap: "2em",
    }}>
    <Stack
          sx={{
            width: {
              xs:'100%',
              sm:'95%',
              md:'50%',
              lg:'50%',
              xl:'50%'
            },
            display: "flex",
            alignItems:'start ',
            flexDirection: "column",
            gap: "2em",
            marginTop:'2em',
            breakWord:'all'  

          }}
        >
          <Typography variant="h5" 
          color="inherit">
          Every business matters. We give you tools to succeed.          </Typography>
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
            width:'10em',
            borderRadius:'2em',
          }}>
            Try Free
          </Button>
        </Stack>
       <Stack sx={{
        width:{
            xs:"20em",
            sm:'30em'
        }
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
            }}src={image}/>
        </Stack>
        </Grid>
    </Grid>
       </Stack>
    </Container>
</Stack>
    )
}

export default Business