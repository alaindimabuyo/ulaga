import React, { useEffect } from "react";
import check from "../assets/check.png";
import wrong from "../assets/wrong.png";

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
        {correct && (
          <h5 style={{ color: "black", textAlign: "center", fontSize: "30px" }}>
            <div className="img_container">
              <img
                src={check}
                alt=""
                width={200}
              />
            </div>
            ISTU YA!
          </h5>
        )}

        {!correct && (
          <h5 style={{ color: "black", textAlign: "center", fontSize: "30px" }}>
            <div className="img_container">
              <img
                src={wrong}
                alt=""
                width={200}
              />
            </div>
            MALI YA!
          </h5>
        )}
        <button
          type="button"
          onClick={onRequestClose}
          style={{ width: "300px" }}>
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
