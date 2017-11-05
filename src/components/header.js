import React from 'react';
import Typography from 'material-ui/Typography';

function Header() {
  return (
    <div>
      <Typography type="display3" gutterBottom>
        README
      </Typography>
      <Typography type="body2">
        <strong>README</strong> is a <em>common documentation generator.</em> Its purpose is to quickly generate documentation for a project so you can jump right into development knowing the core of your project is already documented for you.
      </Typography>
      <Typography type="body2">
        It primarily supports <em>quick, simple projects</em> for epically bootstrapped documentation.
      </Typography>
    </div>
  );
}

export default Header;
