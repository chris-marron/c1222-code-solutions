import React, { useContext } from 'react';
import AppContext from '../lib/app-context';

export default function Navbar() {
  const { user, handleSignOut } = useContext(AppContext);
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="fas fa-bolt me-2" />
          Awesome App
        </a>
        <div>
          {user &&
            <button className="btn btn-dark" onClick={handleSignOut}>
              Sign out
              <i className="ms-2 fas fa-sign-out-alt" />
            </button>
          }
          {!user &&
            <>
              <a href="#sign-in" className="btn btn-primary">
                Sign In
              </a>
              <a href="#sign-up" className="btn btn-dark">
                Sign Up
              </a>
            </>
          }
        </div>
      </div>
    </nav>
  );
}
