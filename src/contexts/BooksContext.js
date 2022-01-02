import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [allBooks, setAllBooks] = useState([
    {
      id: uuidv4(),
      title: "Lord of the Rings",
      author: "Tolkien",
      isRead: "read",
      genre: "fantasy",
    },
  ]);

  useEffect(() => {
    setAllBooks(JSON.parse(localStorage.getItem("allBooks")));
  }, []);

  useEffect(() => {
    localStorage.setItem("allBooks", JSON.stringify(allBooks));
  });
  const addBook = (newBook) => {
    setAllBooks((prevBooks) => {
      return [newBook, ...prevBooks];
    });
  };
  const deleteBook = (id) => {
    setAllBooks((prevBooks) => {
      return prevBooks.filter((book) => {
        return id !== book.id;
      });
    });
  };

  const updateBook = (id, updatedBook) => {
    setAllBooks((prevBooks) => {
      return prevBooks.map((book) => (book.id === id ? updatedBook : book));
    });
  };

  return (
    <BooksContext.Provider
      value={{ allBooks, addBook, deleteBook, updateBook }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
