import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuthValue } from './store/auth-context';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const { isLoggedIn } = useAuthValue();
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}

        <Route path='/profile'>
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && <Redirect to='/' />}
        </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
