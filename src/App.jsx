import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import FullWidthTabs from './components/Tabs';
import TextFields from './components/Fields';
import Header from './components/Header';

const styles = (theme) => ({
  root: {
    marginRight: 100,
    marginLeft: 100
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      projectName: 'README',
      projectDescription: 'A React site to help generate repo READMEs.',
      purposeHeader: 'What is this?',
      purposeDescription: 'Longer repo purpose here.'
    };
  }

  handleChange(name, value) {
    this.setState({[name]: value});
  }

  render() {
    const { classes } = this.props;
    const projectName = this.state.projectName;
    const projectDescription = this.state.projectDescription;
    const purposeHeader = this.state.purposeHeader;
    const purposeDescription = this.state.purposeDescription;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={5}>
            <TextFields
              projectName={projectName}
              projectDescription={projectDescription}
              purposeHeader={purposeHeader}
              purposeDescription={purposeDescription}
              onChange={this.handleChange} />
          </Grid>
          <Grid item xs={7}>
            <FullWidthTabs
              projectName={projectName}
              projectDescription={projectDescription}
              purposeHeader={purposeHeader}
              purposeDescription={purposeDescription}
              onChange={this.handleChange} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
