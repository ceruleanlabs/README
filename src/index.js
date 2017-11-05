import React from 'react';
import { render } from 'react-dom';
import FullWidthTabs from './tabs';
import TextFields from './fields';
import Header from './header';

function App() {
  return (
    <div>
      <Header />
      <div>
        <TextFields />
      </div>
      <div>
        <FullWidthTabs />
      </div>
    </div>
  );
}

render(<App />, document.querySelector('#root'));
