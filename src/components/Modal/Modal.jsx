import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import ImageSlider from "./../ImageSlider/ImageSlider";
import { SliderData } from "./../../assets/SliderData";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="upper-section">
          <p onClick={closeModal} className="close">
            &times;
          </p>
        </div>
        <div className="middle-section">
          <ImageSlider slides={SliderData} />
        </div>
        <div className="lower-section">
          <a onClick={closeModal} className="modal-btn btn-red">
            Close
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
