import React, { useState } from 'react';

export default function ToggleSwitch() {

  const [off, on] = useState(false);

  return (
    <>
      <label htmlFor="switch" className='toggle'>
        <input type="checkbox" id="switch"
        className="toggle-checkbox" onClick={() => {
          on(!off);
        }} />
        <div className='toggle-switch'></div>
        <span className='toggle-label'>{off ? 'ON' : 'OFF'}</span></label>
    </>
  );

}
