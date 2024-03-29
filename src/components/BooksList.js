import React, { useState, useContext } from "react";
import Book from "./Book";
import Notification from "./Notification";
import Pagination from "./Pagination";
import { BooksContext } from "../contexts/BooksContext";

export default function BooksList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const { allBooks, notification } = useContext(BooksContext);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let currentBooks = allBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="main-container">
      {notification.isOn ? (
        <Notification>
          {notification.icon} {notification.type}
        </Notification>
      ) : null}
      {currentBooks <= 0 ? (
        allBooks
      ) : (
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={allBooks ? allBooks.length : 1}
          paginate={paginate}
          currentPage={currentPage ? currentPage : 1}
        />
      )}
      <div className="flex-container">
        {currentBooks.map((book) => {
          return <Book book={book} key={book.id} />;
        })}
      </div>
      <h6 className="total-books">
        You have {allBooks ? allBooks.length : 0}
        {allBooks?.length >= 2 ? " books" : " book"} in your library
      </h6>
    </div>
  );
}
