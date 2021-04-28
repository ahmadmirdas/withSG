/**
 * @candidate - Implement your profile card design here using MaterialUI
 * library and follow the provided AdobeXD or JPG file. 
 * Feel free to change the code structure and templatee as you see fit - 
 * ultimately, we just want to see how you will create APIs and frontend widgets
 * to interface with these APIs!
 */

import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, Link, Grid, Container} from '@material-ui/core';
import { Typography, Paper, Card, CardContent, CardActions } from '@material-ui/core';
import Image from 'next/image';

interface ProfileCardProps {
  username: string;
  resData: object;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
  },
  title: {
    paddingLeft: theme.spacing(10),
    paddingTop: theme.spacing(10)
  },
  titleName: {
    paddingLeft: theme.spacing(10),
    paddingTop: theme.spacing(10),
  },
  textAbout: {
    paddingRight: theme.spacing(15),
    paddingTop: theme.spacing(1)
  },
  paper: {
    height: 250,
    width: 200,
  },
  paperAccr: {
    height: 150,
    width: 250,
  },
  paperTesti: {
    height: 250,
    width: 250,
  },
  cardContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 1),
  },
  cardAccr: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

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

function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h3" className={classes.title}>
            Title<br/>name
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Image src="/andyt.jpg" width={350} height={350}/>
        </Grid>
      </Grid>
    </div>
  );
}

function ContentAbout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h3" component="h4" color="textPrimary" gutterBottom>
        About
        </Typography>
        <Typography>
        The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs.
        </Typography>
        <Typography>
        ----------
        </Typography>
      </Container>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={6} align="center">
          <Image src="/andyt.jpg" width={350} height={350}/>
        </Grid>
        <Grid item xs={6}>
          <Typography align="justify" className={classes.textAbout}>
          The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs.
          </Typography>
          <Typography align="justify" className={classes.textAbout}>
          <b>Years Of Experience: </b> X No. Of Years
          </Typography>
          <Typography align="justify" className={classes.textAbout}>
          <b>Company </b> X No. Of Years
          </Typography>
          <Typography align="justify" className={classes.textAbout}>
          <b>Age: </b> X No. Of Years
          </Typography>
          <Typography align="justify" className={classes.textAbout}>
          <b>Spoken Language: </b> X No. Of Years
          </Typography>
        </Grid>
        </Grid>
    </div>
  );
}

function ContentServices() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h3" component="h4" color="textPrimary" gutterBottom>
        Services
        </Typography>
        <Typography>
        The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs.
        </Typography>
        <Typography>
        ----------
        </Typography>
      </Container>
      <Container className={classes.root} maxWidth="md">
          <Grid container spacing={5}>
            {[0,1,2,3,4,5].map((i, val) => (
              <Grid item key={val} xs={12} sm={4} md={4}>
                <Card className={classes.cardAccr}>
                  {/* <Image src={"/"+card.mainImage} width={250} height={250}></Image> */}
                  <CardContent className={classes.cardContent} align="center">
                    <Typography gutterBottom>
                      tekssdasdsadasd fsdfdsf
                    </Typography>
                    <Typography>
                      Mirdas
                    </Typography>
                    <Typography>
                      rating
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
}

function ContentAccr() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h3" component="h4" color="textPrimary" gutterBottom>
        Accreditations
        </Typography>
        <Typography>
        The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs.
        </Typography>
        <Typography>
        ----------
        </Typography>
      </Container>
      <Container className={classes.root} maxWidth="md">
          <Grid container spacing={5}>
            {[0,1,2,3,4,5].map((i, val) => (
              <Grid item key={val} xs={12} sm={4} md={4}>
                <Card className={classes.cardAccr}>
                  {/* <Image src={"/"+card.mainImage} width={250} height={250}></Image> */}
                  <CardContent className={classes.cardContent} align="center">
                    <Typography gutterBottom>
                      tekssdasdsadasd fsdfdsf
                    </Typography>
                    <Typography>
                      Mirdas
                    </Typography>
                    <Typography>
                      rating
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
}

function ContentTesti() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h3" component="h4" color="textPrimary" gutterBottom>
        Testimonial
        </Typography>
        <Typography>
        The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs. The simple, intuitive and powerful platforns that helps you get gigs.
        </Typography>
        <Typography>
        ----------
        </Typography>
      </Container>
      <Container className={classes.root} maxWidth="md">
          <Grid container spacing={5}>
            {[0,1,2,3,4,5].map((i, val) => (
              <Grid item key={val} xs={12} sm={4} md={4}>
                <Card className={classes.card}>
                  {/* <Image src={"/"+card.mainImage} width={250} height={250}></Image> */}
                  <CardContent className={classes.cardContent} align="center">
                    <Typography gutterBottom>
                      tekssdasdsadasd fsdfdsf
                    </Typography>
                    <Typography>
                      Mirdas
                    </Typography>
                    <Typography>
                      rating
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
}

export default class ProfileCard extends React.Component<ProfileCardProps, {}> {
  constructor(props: ProfileCardProps) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            The Company With
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
            ABOUT
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
            SERVICES
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
            ACCREDITATIONS
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
            TESTIMONIAL {this.props.resData.id}
          </Typography>
        </Toolbar>
      </AppBar>
      <CenteredGrid/>
      <ContentAbout/>
      <ContentServices/>
      <ContentAccr/>
      <ContentTesti/>
      <Copyright/>
      </React.Fragment>
      // <Card style={{ minWidth: 275 }}>
      //   <CardContent>
      //     <Typography component="h1" variant="h2" gutterBottom>
      //       Hi! My name is {this.props.username}!
      //     </Typography>
      //     <Typography variant="h5" component="h3" color="textSecondary">
      //       Author | Freelancer | Coach
      //     </Typography>
      //     <Typography style={{marginBottom : 12}} color="textSecondary">
      //       Available for Hire
      //     </Typography>
      //     <Typography variant="body2" component="p">
      //       I have taught 8 students before and have received 5 stars review!
      //     </Typography>
      //   </CardContent>
      //   <CardActions>
      //     <Button size="small">Learn More</Button>
      //   </CardActions>
      // </Card>
    );
  }
}
