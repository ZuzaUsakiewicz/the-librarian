import ReactDOM from "react-dom";
import React, { useLayoutEffect } from "react";
import "../styles/Modal.css";
// useLockBodyScroll function from: https://usehooks.com/useLockBodyScroll/

export default function Modal({ children }) {
  function useLockBodyScroll() {
    useLayoutEffect(() => {
      // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
      // Re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
  }
  useLockBodyScroll();
  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal">{children}</div>
    </div>,
    document.getElementById("modal-portal")
  );
}
