import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
export default function Stopwatch({ into }) {
  const [begin, setBegin] = useState(0);
  const [timerOn, setTime] = useState(false);
  const [clearIntervalID, setIntervalID] = useState();

  function onStart() {
    setTime(true);
    const interval = setInterval(() => {
      setBegin(begin => begin + 1);
    }, 1000);
    setIntervalID(interval);
  }

  function handlePause() {
    clearInterval(clearIntervalID);
    setTime(false);
    setIntervalID(undefined);
  }
  function resetOnPause() {
    if (!timerOn) return setBegin(0);
  }

  // const isPlaying = !timerOn ? faPlay : faPause;

  return (
    <>
      <div className='play-on'>
        <h1 className='num'>{begin}</h1>
        <FontAwesomeIcon icon={faCircle} className="circle" onClick={resetOnPause} />

        {!timerOn
          ? <FontAwesomeIcon onClick={onStart} icon={faPlay} className='play'/>
          : (
            <FontAwesomeIcon icon={faPause} onClick={handlePause} className='pause'/>)
        }
      </div>
    </>
  );
}
