import React from 'react';
import ReactDOM from 'react-dom/client';

export default function CustomButton(props) {
  return <button>{props.text}</button>;
}
// const Test = {
//   firstName: 'garry',
//   lastName: 'berry'
// };
const element = (
  <div>
    <CustomButton Test={2 + 2} />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
