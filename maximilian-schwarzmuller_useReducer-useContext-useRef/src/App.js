import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { AuthProvider, useAuthVal } from './components/contexts/authContext';

function App() {
  const { isLoggedIn } = useAuthVal();
  return (
    <AuthProvider>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </AuthProvider>
  );
}

export default App;
