import React, { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [notification, setNotification] = useState({ isOn: false, type: null });
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({ isOn: false, type: null });
    }, 3000);
    return () => clearTimeout(timer);
  }, [notification]);

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
    setNotification({ isOn: true, type: "added!" });
  };
  const deleteBook = (id) => {
    setAllBooks((prevBooks) => {
      return prevBooks.filter((book) => {
        return id !== book.id;
      });
    });
    setNotification({ isOn: true, type: "deleted!" });
  };

  const updateBook = (id, updatedBook) => {
    setAllBooks((prevBooks) => {
      return prevBooks.map((book) => (book.id === id ? updatedBook : book));
    });
    setNotification({ isOn: true, type: "edited!" });
  };

  return (
    <BooksContext.Provider
      value={{
        allBooks,
        addBook,
        deleteBook,
        updateBook,
        notification,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
