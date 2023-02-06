import React, { useState } from 'react';

export default function Custom() {
  const [begin, isClicked] = useState(0);

  return (
    <>
      <button className={begin < 3 ? 'button-after-0' : 'hidden'} onClick={() => {
        isClicked(begin + 1);
      }}>Hot Button</button>
      <button className={begin >= 3 && begin < 6 ? 'button-after-3' : 'hidden'} onClick={() => {
        isClicked(begin + 1);
      }}>Hot Button</button>
      <button className={begin >= 6 && begin < 9 ? 'button-after-6' : 'hidden'} onClick={() => {
        isClicked(begin + 1);
      }}>Hot Button</button>
      <button className={begin >= 9 && begin < 12 ? 'button-after-9' : 'hidden'} onClick={() => {
        isClicked(begin + 1);
      }}>Hot Button</button>
      <button className={begin >= 12 && begin < 15 ? 'button-after-12' : 'hidden'} onClick={() => {
        isClicked(begin + 1);
      }}>Hot Button</button>
      <button className={begin >= 15 && begin < 18 ? 'button-after-15' : 'hidden'} onClick={() => {
        isClicked(begin + 1);
      }}>Hot Button</button>
      <button className={begin >= 18 ? 'button-after-18' : 'hidden'} onClick={() => {
        isClicked(begin + 1);
      }}>Hot Button</button>
      <h1>clicked {begin}</h1>
      <button onClick={() => {
        isClicked(0);
      }}>reset</button>
    </>
  );

}
