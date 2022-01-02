import React, { useContext } from "react";
import Book from "./Book";
import { BooksContext } from "../contexts/BooksContext";

export default function BooksList() {
  const { allBooks } = useContext(BooksContext);
  return (
    <div className="main-container">
      {allBooks.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </div>
  );
}
