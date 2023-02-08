import React, { useState } from 'react';

export default function AppDrawer() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const clicked = !open ? 'hidden' : 'modal';
  const menu = !open ? '' : 'menu-open';
  const menuLi = !open ? 'hidden' : 'menu-li';

  return (
    <>
      <div className=''>
        <i className="fa-solid fa-bars" onClick={handleClick}></i>
      </div>
      <div className='plank'><img src="https://pbs.twimg.com/media/E5zK7rXXMAUdku_.jpg" alt="doge" /></div>
      <div className={clicked} onClick={() => {
        setOpen(false);
      }}>
      </div>
      <div className={`menu ${menu}`} onClick={() => {
        setOpen(false);
      }}>
        <ul className={menuLi}>
          <h1>Movie Quotes</h1>
          <li>May the Force be with you.</li>
          <li>Theres no place like home.</li>
          <li>Im the king of the world!</li>
          <li>Bond. James Bond</li>
        </ul>
      </div>

    </>
  );
}
