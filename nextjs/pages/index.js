import React from 'react';
import { Container, Button, Typography, Link, Grid, CssBaseline } from '@material-ui/core';
import { AppBar, Toolbar, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/user`)
  const data = await res.json()
  return {
    props: { data }
  }
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://with.sg/">
        The Company With
      </Link>{' '}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 1),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 1),
  },
  cardButtons: {
    marginLeft: theme.spacing(3.5),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 5),
    marginLeft: theme.spacing(5),
  },
}));

export default function Index({data}) {
  const classes = useStyles();
  return (
    <React.Fragment>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          The Company With
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.heroContent}>
    <Container maxWidth="md">
      <Typography variant="h3" component="h4" color="textPrimary" gutterBottom>
      The Company With
      </Typography>
      <Typography>
      The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs.
      </Typography>
      <div className={classes.heroButtons}>
        <Grid item>
          <Button variant="outlined" color="primary">
            FIND OUT MORE
          </Button>
        </Grid>
      </div>
      </Container>
    </div>

    <div className={classes.cardContent}>
    <Container maxWidth="sm" align="center">
      <Typography variant="h3" component="h4" color="textPrimary" gutterBottom>
      Feature Gig Worker
      </Typography>
      <Typography>
      The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs.
      </Typography>
      <Typography>
      ----------
      </Typography>
      </Container>
    </div>

    <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={5}>
            {data.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                  <Image src={"/"+card.mainImage} width={250} height={250}></Image>
                  <CardContent className={classes.cardContent} align="center">
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.about.name}
                    </Typography>
                    <Typography>
                      {card.about.introduction}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={"/profile/"+ card.id} passHref>
                  <Button variant="outlined" color="primary" className={classes.cardButtons}>
                    View Profile
                  </Button>
                  </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      <footer className={classes.footer}>
        {/* <Grid item xs={12} sm={4} md={3}>
        <Typography variant="h6" gutterBottom>
          The Company With
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
        The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs.
        </Typography>
        </Grid> */}
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
