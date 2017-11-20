import React from 'react';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <pre>
          # {this.props.projectName}
          <br/><br/>
          {this.props.projectDescription}
          <br/><br/>
          ## {this.props.purposeHeader}
          <br/><br/>
          {this.props.purposeDescription}
        </pre>
      </div>
    );
  }
}

export default Markdown;
