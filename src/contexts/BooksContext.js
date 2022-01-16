import React, { createContext, useState, useEffect } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { GiSherlockHolmes, GiDoubleDragon, GiCastle } from "react-icons/gi";
import { RiKnifeBloodLine } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [notification, setNotification] = useState({
    isOn: null,
    type: null,
    icon: null,
  });
  const [allBooks, setAllBooks] = useState([]);

  const genreValues = [
    { id: 1, name: "fantasy", icon: <GiDoubleDragon /> },
    { id: 2, name: "thriller", icon: <GiSherlockHolmes /> },
    { id: 3, name: "horror", icon: <RiKnifeBloodLine /> },
    { id: 4, name: "history", icon: <GiCastle /> },
    { id: 5, name: "other", icon: <BsQuestionCircle /> },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({ isOn: null, type: null, icon: null });
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
    setNotification({
      isOn: true,
      type: "Book added!",
      icon: <BiCheckCircle />,
    });
  };
  const deleteBook = (id) => {
    setAllBooks((prevBooks) => {
      return prevBooks.filter((book) => {
        return id !== book.id;
      });
    });
    setNotification({
      isOn: true,
      type: "Book deleted!",
      icon: <BiCheckCircle />,
    });
  };

  // const deleteAllBooks = () => {
  //   localStorage.removeItem("allBooks");
  // };

  const updateBook = (id, updatedBook) => {
    setAllBooks((prevBooks) => {
      return prevBooks.map((book) => (book.id === id ? updatedBook : book));
    });
    setNotification({
      isOn: true,
      type: "Book updated!",
      icon: <BiCheckCircle />,
    });
  };

  return (
    <BooksContext.Provider
      value={{
        allBooks,
        genreValues,
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
