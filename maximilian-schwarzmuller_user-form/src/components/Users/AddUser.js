import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

function AddUser({ setUsers }) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // 無值
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (none-empty values).',
      });
      return;
    }
    // 年齡不足1
    if (+userAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    setUsers({ name: userName, age: userAge });
    setUserName('');
    setUserAge('');
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
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id='username'
            type='text'
          />
          <label htmlFor='age'>Age(Years)</label>
          <input
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
            id='age'
            type='number'
          />
          <Button type={'submit'} onClick={handleFormSubmit}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
