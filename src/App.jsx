import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import FullWidthTabs from './components/Tabs';
import TextFields from './components/Fields';
import Header from './components/Header';

const styles = theme => ({
  root: {
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
        <Grid item xs={5}>
          <TextFields />
        </Grid>
        <Grid item xs={7}>
          <FullWidthTabs />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
