import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onHideCart }) => {
  return <div className={classes.backdrop} onClick={onHideCart}></div>;
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Modal = ({ children, onHideCart }) => (
  <>
    {ReactDom.createPortal(<Backdrop onHideCart={onHideCart} />, portalElement)}
    {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
  </>
);

export default Modal;
