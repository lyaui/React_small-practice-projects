import React, { createContext, useState, useEffect, useContext } from 'react';

const authContext = createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <authContext.Provider value={{ isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthVal = () => useContext(authContext);
