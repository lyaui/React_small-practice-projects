import { useEffect, useCallback } from 'react';
import { createContext, useContext, useState } from 'react';

let logoutTimer;

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login(token) {},
  logout() {},
});

const calcRemaingTime = (expirationTime) => {
  // timestamps
  // 現在時間點(timestamp)
  const currentTime = new Date().getTime();
  // 未來時間點(timestamp)
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calcRemaingTime(storedExpirationDate);
  // 剩餘時間小於一分鐘
  if (remainingTime < 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }
  return { token: storedToken, duration: remainingTime };
};

export const AuthProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) initialToken = tokenData.token;
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const login = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calcRemaingTime(expirationTime);
    logoutTimer = setTimeout(logout, remainingTime);
  };

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    if (logoutTimer) clearTimeout(logoutTimer);
  }, []);

  useEffect(() => {
    if (tokenData) logoutTimer = setTimeout(logout, tokenData.duration);
  }, [tokenData, logout]);

  const contextValue = { token, isLoggedIn: userIsLoggedIn, login, logout };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthValue = () => useContext(AuthContext);
