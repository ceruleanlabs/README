import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './Markdown';

describe('The Markdown component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Markdown />, div);
  });
});
