import React, { useState } from 'react';

export default function Custom() {
  const [begin, isClicked] = useState(0);

  function color() {
    if (begin < 4) return 0;
    if (begin < 7) return 3;
    if (begin < 10) return 6;
    if (begin < 13) return 9;
    if (begin < 16) return 12;
    return 18;
  }
  const number = color();
  return (
    <>
      <button className={`button-after-${number}`} onClick={() => {
        isClicked(begin + 1);
      }}>Hot Button</button>
      <h1>clicked {begin}</h1>
      <button className='reset-me' onClick={() => {
        isClicked(0);
      }}>reset</button>
    </>
  );

}
