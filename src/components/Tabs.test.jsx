import React from 'react';
import ReactDOM from 'react-dom';
import FullWidthTabs from './Tabs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FullWidthTabs />, div);
});
