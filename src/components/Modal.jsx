import React, { useEffect } from "react";

const Modal = ({ onRequestClose, correct }) => {
  console.log(correct);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    };

    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });
  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        <h3 className="modal__title">I'm a modal!</h3>
        {correct && <p style={{ color: "black" }}>Correct</p>}

        {!correct && <p style={{ color: "black" }}>Wrong</p>}
        <button
          type="button"
          onClick={onRequestClose}
          style={{ width: "300px" }}
        >
          Close
        </button>
        <div className="placeholder" />
        <div className="placeholder" />
        <div className="placeholder medium" />
        <div className="placeholder" />
      </div>
    </div>
  );
};

export default Modal;
