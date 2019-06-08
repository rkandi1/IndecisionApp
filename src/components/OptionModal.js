import React from 'react';
import Modal from 'react-modal';

const OptionalModal = (props) => (
  <Modal
    isOpen={!!props.optionSelected}
    onRequestClose={props.closeModal}
    closeTimeoutMS={200}
    ariaHideApp={false}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.optionSelected && <p className="modal__body">{props.optionSelected}</p>}
    <button onClick={props.closeModal}> Okay! </button>
  </Modal>
);

export default OptionalModal;
