import React from 'react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: 'README',
      projectDescription: 'A React site to help generate repo READMEs.',
      purposeHeader: 'What is this?',
      purposeDescription: 'Longer repo purpose here.'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.projectName}</h1>
        <p>{this.state.projectDescription}</p>
        <h2>{this.state.purposeHeader}</h2>
        <p>{this.state.purposeDescription}</p>
      </div>
    );
  }
}

export default Preview;
