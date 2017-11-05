import React from 'react';
import { render } from 'react-dom';
import FullWidthTabs from './components/tabs';
import TextFields from './components/fields';
import Header from './components/header';

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

export default App;
