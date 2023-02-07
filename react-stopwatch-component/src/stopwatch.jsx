import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
export default function Stopwatch({ into }) {
  const [begin, ok] = useState(0);
  const [timerOn, setTime] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [test1, test2] = useState();
  function onStart() {
    setTime(true);
    test2(setInterval(() => {
      ok(begin => begin + 1);
    }, 1000));
  }

  function handlePause() {
    clearInterval(test2);
    setTime(false);
  }
  function resume() {
    setIsPaused(true);
    into = setInterval(() => {
      ok(begin => begin + 1);
    }, 1000);
  }
  return (
    <>
      <div className='play-on'>
        <h1 className='num'>{begin}</h1>
        <FontAwesomeIcon icon={faCircle} className="circle" onClick={() => {
          ok(0);
        }}/>
        {!timerOn && !isPaused
          ? <FontAwesomeIcon onClick={onStart} icon={faPlay} className='play'/>
          : (
            <FontAwesomeIcon icon={faPause} onClick={handlePause} className='pause'/>)
        }
      </div>
    </>
  );
}
