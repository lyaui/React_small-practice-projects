import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Notfound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'></Redirect>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote' exact>
            <NewQuote />
          </Route>
          <Route path='*'>
            <Notfound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
