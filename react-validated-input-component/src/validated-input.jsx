import React, { useState } from 'react';

export default function ValidatedInput() {
  const [isPassword, setIsPassword] = useState('');
  const [tooShort, setTooShort] = useState(false);

  function isEight(e) {
    setIsPassword(e.target.value);
    if (e.target.value === '') {
      setTooShort(false);
    }
    if (e.target.value.length <= 8) {
      setTooShort(false);
    } else {
      (
        setTooShort(true)
      );
    }

  }
  const markOrCheck = !tooShort ? 'xmark' : 'check';

  return (
    <div className='row'>
      <form action="">
        <h1 className='pass'>Password</h1>
        <label htmlFor="">
          <input name='password' type="password" value={isPassword} required onChange={isEight} className='bar'/>
          <i className={`fa-solid fa-${markOrCheck}`}></i>
          {isPassword === '' ? <p className='error'>A password is required.</p> : ''}
          {isPassword.length <= 8 && isPassword !== '' ? <p className='error'>Your password is too short</p> : ''}
        </label>
      </form>
    </div>
  );
}
