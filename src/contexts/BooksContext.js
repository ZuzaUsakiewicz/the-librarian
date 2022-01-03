import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [popup, setPopup] = useState({ isOn: false, type: null });
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
    const timer = setTimeout(() => {
      setPopup({ isOn: false, type: null });
    }, 3000);
    return () => clearTimeout(timer);
  }, [popup]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setPopupDelete(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [popupDelete]);

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
    setPopup({ isOn: true, type: "added!" });
  };
  const deleteBook = (id) => {
    setAllBooks((prevBooks) => {
      return prevBooks.filter((book) => {
        return id !== book.id;
      });
    });
    setPopup({ isOn: true, type: "deleted!" });
  };

  const updateBook = (id, updatedBook) => {
    setAllBooks((prevBooks) => {
      return prevBooks.map((book) => (book.id === id ? updatedBook : book));
    });
    setPopup({ isOn: true, type: "edited!" });
  };

  return (
    <BooksContext.Provider
      value={{
        allBooks,
        addBook,
        deleteBook,
        updateBook,
        popup,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
