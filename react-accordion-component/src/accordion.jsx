import React, { useState } from 'react';

export default function Accordion({ data }) {
  const [active, setActive] = useState(null);

  const toggle = i => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };

  return (
    <div className='wrapper'>
      <div className='accor'>
        {data.map((tes, i) => {
          return (
            <div key={data.key} className='item'>
              <div className="acc" onClick={() => toggle(i)}><h2>{tes.title}</h2></div>
              <div className={active === i ? 'show' : 'hide'}> {tes.info.toUpperCase()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );

}
