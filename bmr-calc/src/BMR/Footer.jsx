import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    borderTop: '2px solid',
    borderColor: 'white',
    height: '5%',
    textAlign: 'center',
    fontFamily: 'Architects Daughter, cursive',
    fontSize: '20px'
  },
  links: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Architects Daughter, cursive',
    fontSize: '20px',
    '&:hover': {
      cursor: 'select'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={2}>
          About This Website
        </Grid>
        <Grid item xs={2}>
          About The Developer
        </Grid>
        <Grid item xs={2}>
          <a className={classes.links} href="https://github.com/danielko14/">Github</a>
        </Grid>
        <Grid item xs={2}>
          <a className={classes.links} href="https://www.linkedin.com/in/danielbko/">LinkedIn</a>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;