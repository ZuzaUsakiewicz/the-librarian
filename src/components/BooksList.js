import React, { useContext } from "react";
import Book from "./Book";
import { BooksContext } from "../contexts/BooksContext";
import { BiPlus } from "react-icons/bi";
import "../styles/TableTitle.css";

export default function BooksList({ toggleValue }) {
  const { allBooks } = useContext(BooksContext);
  return (
    <div className="main-container">
      <div className="single-book">
        <div className="single-book-header">
          <div className="table-title">
            <h4>Title</h4>
          </div>
          <div className="table-title">
            <p>Author</p>
          </div>
          <div className="table-title">
            <p>Genre</p>
          </div>
          <div className="table-title">
            <p>Read status</p>
          </div>
        </div>
        <div>
          <span>add book</span>
          <button className="add-btn" onClick={toggleValue}>
            <BiPlus />
          </button>
        </div>
      </div>

      {allBooks.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </div>
  );
}
