import React from 'react';

import ReactDOM from 'react-dom/client';

function RegistrationForm() {
  return (
    <form action="">
      <label htmlFor="">
        Username: <input type="text" />
      </label>
      <label htmlFor="">
        Email:<input type="password" />
      </label>
      <button>Submit</button>
    </form>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
