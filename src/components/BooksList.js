import React, { useState, useContext } from "react";
import Book from "./Book";
import Notification from "./Notification";
import Pagination from "./Pagination";
import { BooksContext } from "../contexts/BooksContext";

export default function BooksList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  const { allBooks, notification } = useContext(BooksContext);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = allBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="main-container">
      {notification.isOn ? (
        <Notification>
          {notification.icon} {notification.type}
        </Notification>
      ) : null}
      {currentBooks <= 0 ? null : (
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={allBooks.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}

      {currentBooks.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </div>
  );
}
