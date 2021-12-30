import ReactDOM from "react-dom";
import React from "react";

export default function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal">{children}</div>
    </div>,
    document.getElementById("modal-portal")
  );
}
