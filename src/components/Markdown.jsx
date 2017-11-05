import React from 'react';

class Markdown extends React.Component {
  state = {
    projectName: 'README',
    projectDescription: 'A React site to help generate repo READMEs.',
    purposeHeader: 'What is this?',
    purposeDescription: 'Longer repo purpose here.'
  };

  render() {
    return (
      <div>
        <pre>
          # {this.state.projectName}
          <br/><br/>
          {this.state.projectDescription}
          <br/><br/>
          ## {this.state.purposeHeader}
          <br/><br/>
          {this.state.purposeDescription}
        </pre>
      </div>
    );
  }
}

export default Markdown;
