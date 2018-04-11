import React from 'react';
import marked from 'marked';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * createMarkup() returns an html string
   * to use the dangerouslySetInnerHTML attribute
   */
  createMarkup() {
    return {__html: marked(
      `
# ${this.props.projectName}
${this.props.projectDescription}
## ${this.props.purposeHeader}
${this.props.purposeDescription}`
    )};
  }

  render() {
    return <div dangerouslySetInnerHTML={this.createMarkup()}/>;
  }
}

export default Preview;
