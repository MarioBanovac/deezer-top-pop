import React from "react";
import formatTime from "utils";

const Modal = (props) => {
  const { className, activeSong, setShowModal } = props;
  const { position, title, artist, duration } = activeSong;

  const handleClick = () => {
    setShowModal();
  };

  return (
    <div className={className}>
      <div className="modal-container">
        <div>Redni broj: {position}</div>
        <div>Naziv pjesme: {title}</div>
        <div>Ime glazbenika: {artist.name}</div>
        <div>Trajanje pjesme: {formatTime(duration)}</div>
        <button onClick={handleClick}>Close modal</button>
      </div>
    </div>
  );
};

export default Modal;
