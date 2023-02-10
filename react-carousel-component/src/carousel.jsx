import React, { useState, useEffect } from 'react';
export default function Carousel({ data }) {
  const [active, setActive] = useState(0);

  const prev = () => {
    const newItem = active === 0 ? data.length - 1 : active - 1;
    setActive(newItem);
  };
  const next = () => {
    const newItem = active === data.length - 1 ? 0 : active + 1;
    setActive(newItem);
  };
  const clic = key => {
    setActive(key);
  };
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="row justify">
      <i className="fa-solid fa-angle-left" onClick={prev}></i>
      <i className="fa-solid fa-angle-right" onClick={next}></i>
      <img src={`${data[active].photo}`} alt="" />
      <div className='test'>
        {data.map((dots, i) => (
          <i className={`fa-solid fa-circle ${active === i ? 'dark' : undefined}`} key={data.key} onClick={() => {
            clic(i);
          }}></i>
        ))}
      </div>
    </div>
  );
}
