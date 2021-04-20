import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

function ErrorModal({ title, message, errorHandler }) {
  return (
    <>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={errorHandler}>Okay</Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorModal;
