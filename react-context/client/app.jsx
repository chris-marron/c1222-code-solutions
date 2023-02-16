import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import AppContext from './lib/app-context';
import parseRoute from './lib/parse-route';
import Auth from './pages/auth';
import Home from './pages/home';
import NotFound from './pages/not-found';
import Navbar from './components/navbar';
import PageContainer from './components/page-container';

export default function App() {
  const [user, setUser] = useState();
  const [isAuthorizing, setIsAuthorizing] = useState(true);
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  useEffect(() => {
    window.addEventListener('hashchange', () => setRoute(parseRoute(window.location.hash)));
    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? jwtDecode(token) : null;
    setUser(user);
    setIsAuthorizing(false);
  }, []);

  function handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    setUser(user);
  }

  function handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    setUser(undefined);
  }

  function renderPage() {
    const { path } = route;
    if (path === '') {
      return <Home />;
    }
    if (path === 'sign-in' || path === 'sign-up') {
      return <Auth />;
    }
    return <NotFound />;
  }

  if (isAuthorizing) return null;

  const contextValue = { user, route, handleSignIn, handleSignOut };
  return (
    <AppContext.Provider value={contextValue}>
      <Navbar />
      <PageContainer>
        {renderPage()}
      </PageContainer>
    </AppContext.Provider>
  );
}
