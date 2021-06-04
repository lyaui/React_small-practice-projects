import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <BrowserRouter>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'></Redirect>
          </Route>
          <Route path='/welcome' exact>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId' exact>
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
