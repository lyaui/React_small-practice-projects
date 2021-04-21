import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = ({ errorHandler }) => {
  return <div className={classes.backdrop} onClick={errorHandler}></div>;
};

const ModalOverlay = ({ title, message, errorHandler }) => {
  <>
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
  </>;
};
function ErrorModal({ title, message, errorHandler }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={errorHandler}></Backdrop>,
        document.querySelector('#backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onClick={errorHandler}></ModalOverlay>,
        document.querySelector('#overlay-root'),
      )}
    </>
  );
}

export default ErrorModal;
