import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class TextFields extends React.Component {
  state = {
    projectName: 'README',
    projectDescription: 'A React site to help generate repo READMEs.',
    purposeHeader: 'What is this?',
    purposeDescription: 'Longer repo purpose here.'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form fullWidth className={classes.container} noValidate autoComplete="off">
        <TextField
          id="project-name"
          label="Project Name"
          className={classes.textField}
          value={this.state.projectName}
          onChange={this.handleChange('projectName')}
          margin="normal"
        />
        <TextField
          id="short-description"
          label="Short Description"
          placeholder="Short Description"
          className={classes.textField}
          value={this.state.projectDescription}
          onChange={this.handleChange('projectDescription')}
          margin="normal"
        />
        <TextField
          id="purpose-header"
          label="Purpose Header"
          className={classes.textField}
          value={this.state.purposeHeader}
          onChange={this.handleChange('purposeHeader')}
          margin="normal"
        />
        <TextField
          id="purpose-description"
          label="Purpose Description"
          className={classes.textField}
          value={this.state.purposeDescription}
          multiline
          onChange={this.handleChange('purposeDescription')}
          margin="normal"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
