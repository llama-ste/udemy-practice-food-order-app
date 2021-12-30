import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

import Card from "./Card";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Card>
      <div className={styles.modal}>
        <div>{props.children}</div>
      </div>
    </Card>
  );
};

const overlayRoot = document.getElementById("overlay-root");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, overlayRoot)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayRoot
      )}
    </>
  );
};

export default Modal;
