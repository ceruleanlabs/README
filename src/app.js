import React from 'react';
import { render } from 'react-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import FullWidthTabs from './components/tabs';
import TextFields from './components/fields';
import Header from './components/header';

const styles = theme => ({
  root: {
    display: 'flex',
    marginRight: 100,
    marginLeft: 100
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={6}>
          <TextFields />
        </Grid>
        <Grid item xs={6}>
          <FullWidthTabs />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
