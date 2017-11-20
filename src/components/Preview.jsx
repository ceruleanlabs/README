import React from 'react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="markdown-body">
        <h1>{this.props.projectName}</h1>
        <p>{this.props.projectDescription}</p>
        <h2>{this.props.purposeHeader}</h2>
        <p>{this.props.purposeDescription}</p>
      </div>
    );
  }
}

export default Preview;
