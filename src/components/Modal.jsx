import React, { useEffect } from "react";

const Modal = ({ onRequestClose, correct, setNextQuestion }) => {
  console.log(correct);

  const closeModal = () => {
    onRequestClose();
    setNextQuestion();
  };
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
        setNextQuestion();
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
        {correct.correct && (
          <div>
            <h2 style={{ color: "black" }}>Correct answer</h2>
            <h2 style={{ color: "black" }}>{correct.answer}</h2>
          </div>
        )}

        {!correct.correct && <h2 style={{ color: "black" }}>Wrong</h2>}
        <button type="button" onClick={closeModal} style={{ width: "300px" }}>
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
