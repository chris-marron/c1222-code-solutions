import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Catalog from './pages/catalog';
import NotFound from './pages/not-found';
import ProductDetails from './pages/product-details';
import { parseRoute } from './lib';

export default function App() {
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  useEffect(() => {
    /**
     * Listen for hash change events on the window object
     * Each time the window.location.hash changes, parse
     * it with the parseRoute() function and update state
     * Clean up when the component unmounts.
     */
    function hash() {
      const route = parseRoute(window.location.hash);
      setRoute(route);
    }

    window.addEventListener('hashchange', hash);
    return () => window.removeEventListener('hashchange', hash);
  }, [route]);

  function renderPage() {
    if (route.path === '') {
      return <Catalog />;
    }
    if (route.path === 'products') {
      const productId = route.params.get('productId');
      return <ProductDetails productId={productId} />;
    }
    return <NotFound />;
  }

  return (
    <>
      <Header />
      { renderPage() }
    </>
  );
}
