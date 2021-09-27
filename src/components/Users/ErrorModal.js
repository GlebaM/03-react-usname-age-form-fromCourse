import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";
import Button from "../UI/Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const backdrop = document.querySelector("#backdrop-root");
  const modal = document.querySelector("#overlay-root");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        backdrop
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        modal
      )}
    </Fragment>
  );
};

export default ErrorModal;
