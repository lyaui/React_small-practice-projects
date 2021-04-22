import React, { useState, useEffect, useReducer, useRef } from 'react';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Login.module.css';
import { useAuthVal } from '../contexts/authContext';

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { ...state, value: action.payload, isValid: action.payload.includes('@') };
    case 'INPUT_BLUR':
      return { ...state, isValid: state.value.includes('@') };
    default:
      return { value: '', isValid: false };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { ...state, value: action.payload, isValid: action.payload.trim().length > 6 };
    case 'INPUT_BLUR':
      return { ...state, isValid: state.value.trim().length > 6 };
    default:
      return { value: '', isValid: false };
  }
};

const Login = (props) => {
  const { onLogin } = useAuthVal();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // 只對是否驗證成功而非輸入的內容有興趣因此提取出來，避免只要輸入內容改變就觸發 useEffect
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const validForm = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(validForm);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', payload: event.target.value });
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', payload: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // 有錯誤時 focus 在第一個有錯的 input 上
    if (formIsValid) {
      onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          label='E-Mail'
          type='email'
          id='email'
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          ref={passwordInputRef}
          label='Password'
          type='password'
          id='password'
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
