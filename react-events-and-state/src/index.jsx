import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  const [state, isClicked] = useState(false);

  function handleClick() {
    isClicked(true);
  }
  if (state) {
    return <button >Thanks</button>;
  }
  return <button onClick={handleClick}>Click Me!</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(
  <CustomButton />
);
