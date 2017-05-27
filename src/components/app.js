import React from 'react';

import Header from './header';

export default function App(props) {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
}
