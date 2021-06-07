import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuthValue } from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();
  const { login } = useAuthValue();
  const emailInputRef = useRef();
  const passwordInputRed = useRef();
  const API_KEY = 'AIzaSyDU29VO5WJU6HLreVmgx4YCYkm8hC4NgWI';

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRed.current.value;

    setIsLoading(true);
    let url = '';
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }
    try {
      const res = await fetch(url, {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      });

      if (!res.ok) {
        let errorMessage = 'Authentication failed!';
        throw new Error(errorMessage);
      }
      const data = await res.json();
      // 一個未來的到期時間點
      const expirationTime = new Date(new Date().getTime() + data.expiresIn * 1000);
      login(data.idToken, expirationTime);
      history.replace('/');
    } catch (error) {
      alert(error.message);
    } finally {
    }

    setIsLoading(false);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRed} />
        </div>

        <div className={classes.actions}>
          {!isLoading && <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>{' '}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
