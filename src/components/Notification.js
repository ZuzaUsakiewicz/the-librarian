import React from "react";
import "../styles/Notification.css";

export default function Notification({ children }) {
  return <div className="notification-container">{children}</div>;
}
