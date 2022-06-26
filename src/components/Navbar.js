import React from "react";
import { FiGithub } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav>
      <h1>The Librarian</h1>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ZuzaUsakiewicz/the-librarian"
      >
        <FiGithub />
      </a>
    </nav>
  );
}
