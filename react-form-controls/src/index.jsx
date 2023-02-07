import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function RegistrationForm() {
  const [changeUser, setChangeUser] = useState('');
  const [changePassword, setChangePassword] = useState('');

  function handleUserNameChange(e) {
    setChangeUser(e.target.value);
  }
  function handlePasswordChange(eve) {
    setChangePassword(eve.target.value);
  }
  function handleSubmit(eon) {
    eon.preventDefault();
    const form = eon.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        Username:<input type="username" name='username' value={changeUser} onChange={handleUserNameChange} />
      </label>
      <label htmlFor="">
        Password:<input type="password" name='password' value={changePassword} onChange={handlePasswordChange} />
      </label>
      <button >Sign Up</button>
    </form>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
