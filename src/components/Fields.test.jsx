import React from 'react';
import ReactDOM from 'react-dom';
import TextFields from './Fields';

describe('The TextFields component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextFields />, div);
  });
});
