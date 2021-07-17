import React from 'react';
import { Route } from 'react-router-dom';
import configureProductsStore from './hooks-store/products-store';
import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

configureProductsStore();
const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path='/' component={ProductsPage} exact />
        <Route path='/favorites' component={FavoritesPage} />
      </main>
    </React.Fragment>
  );
};

export default App;
