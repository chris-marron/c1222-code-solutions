import React, { useState } from 'react';

export default function Accordion({ data }) {
  const [active, setActive] = useState(null);

  const toggle = key => {
    if (active === key) {
      return setActive(null);
    }
    setActive(key);
  };

  return (
    <div className='row justify-align'>
      <div className='accor'>
        {data.map(language => {
          return (
            <div key={language.key} className='item'>
              <div className="acc" onClick={() => toggle(language.key)}><h2>{language.title}</h2></div>
              <div className={active === language.key ? 'show' : 'hide'}> {language.info.toUpperCase()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );

}
