import React from 'react';
import * as ReactDOM from 'react-dom/client';

const createH1 = React.createElement(
  'h1',
  null,
  'Hello React!'
);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(createH1);
console.log(createH1);
