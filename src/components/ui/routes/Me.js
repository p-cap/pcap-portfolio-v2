import React from 'react'
import linkedIn from '../../assets/linkedin.svg'
import Github from '../../assets/Github.svg'
import Twitter from '../../assets/twitter.svg'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import MyPic from '../../assets/My Pic.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  titleText: {

   ...theme.titleText,
    [theme.breakpoints.down("lg")]: {
      fontSize: "4.75rem"
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "3.5rem"
      },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.25rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.0rem"
    },
  },
  
  gridImage: {
    ...theme.pcapImage
  },
  centeredText: {
    position: 'absolute',
    [theme.breakpoints.down("xl")]: {
      top: '4rem',
    },
    [theme.breakpoints.down("xs")]: {
      top: '20px',
    },
    left: '0px',
    width: '100%',
    fontWeight: '500',
    fontSize: '2rem',
  },
  personalLinks: {
    [theme.breakpoints.down("md")]: {
      width: '130px',
      height: '130px',
    },
    [theme.breakpoints.down("sm")]: {
      width: '100px',
      height: '100px',
    },
    [theme.breakpoints.down("xs")]: {
      width: '70px',
      height: '70px',
    },
  }
}));


export default function Me() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br/>
      <br/>
      <br/>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={10}
        >
          <Grid item> 
            <Typography variant="h2" className={classes.titleText}>
                      Life Long Learner of Cyber & Coding
            </Typography>
          </Grid>
          <Grid item className={classes.gridImage}>
              <img alt="test" src={MyPic} />
              <Typography className={classes.centeredText}>
                Striving to bridge the gap 
                <br/>
                between    
                <br/>
                software development and security
                <br/>
                .....1 bit at a time
              </Typography>
          </Grid>
          <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={5}
              >         
                <Grid item>
                  <a href="https://www.linkedin.com/in/paul-capili-a56b2315b">
                    <img alt="pcap linkedIn" src={linkedIn} className={classes.personalLinks} ></img>
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://twitter.com/pcapili22">
                    <img alt="pcap twitter" src={Twitter} className={classes.personalLinks} ></img>
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://github.com/p-cap">
                    <img alt="pcap github" src={Github} className={classes.personalLinks}></img>
                  </a>
                </Grid>
            </Grid> 
        </Grid>
        </div>  
    )
}


