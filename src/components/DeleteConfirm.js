import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import "../styles/DeleteConfirm.css";
import "../styles/BookForm.css";
import { BiX } from "react-icons/bi";

export default function DeleteConfirm({ toggleValue, book }) {
  const { deleteBook } = useContext(BooksContext);

  return (
    <div className="confirm-container">
      <h3>Do you want to delete this book? </h3>
      <h5>Warning: This action cannot be undone!</h5>
      <div>
        <button
          onClick={() => toggleValue(false)}
          className="confirm-btn reject"
        >
          cancel
        </button>
        <button
          onClick={() => deleteBook(book.id)}
          className="confirm-btn confirm"
        >
          yes, delete it
        </button>
      </div>
      <button onClick={() => toggleValue(false)} className="close-btn">
        <BiX />
      </button>
    </div>
  );
}
