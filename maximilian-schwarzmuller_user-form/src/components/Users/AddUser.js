import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

function AddUser({ setUsers }) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const enterdName = nameInputRef.current.value;
    const enterdAge = ageInputRef.current.value;
    // 無值
    if (enterdName.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (none-empty values).',
      });
      return;
    }
    // 年齡不足1
    if (+enterdAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    setUsers({ name: enterdName, age: enterdAge });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='username'>Username</label>
          <input ref={nameInputRef} id='username' type='text' />
          <label htmlFor='age'>Age(Years)</label>
          <input ref={ageInputRef} id='age' type='number' />
          <Button type={'submit'} onClick={handleFormSubmit}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
