import React from 'react';
import ReactDOM from 'react-dom';
import FullWidthTabs from './Tabs';

describe('The FullWidthTabs component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FullWidthTabs />, div);
  });
});
