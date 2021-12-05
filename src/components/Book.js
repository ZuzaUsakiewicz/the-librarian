import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import useToggle from "../hooks/useToggle";
import Modal from "./Modal";
import EditBookForm from "./EditBookForm";
import { BiTrash, BiEdit } from "react-icons/bi";
import { GiSherlockHolmes, GiDoubleDragon, GiCastle } from "react-icons/gi";
import { RiKnifeBloodLine } from "react-icons/ri";
import { BsBookmarkCheck, BsBookmarkX, BsQuestionCircle } from "react-icons/bs";

export default function Book({ book }) {
  const { allBooks, deleteBook } = useContext(BooksContext);
  const [value, toggleValue] = useToggle(false);
  const genreValues = [
    { name: "fantasy", icon: <GiDoubleDragon /> },
    {
      name: "thriller",
      icon: <GiSherlockHolmes />,
    },
    {
      name: "horror",
      icon: <RiKnifeBloodLine />,
    },
    { name: "history", icon: <GiCastle /> },
    { name: "other", icon: <BsQuestionCircle /> },
  ];

  return (
    <React.Fragment>
      <div className="single-book">
        <div className="row">
          <h4>{book.title}</h4>
        </div>
        <div className="row">
          <p>{book.author}</p>
        </div>
        <div className="row">
          {genreValues.map((item) =>
            item.name === book.genre ? (
              <div className="icon-container">
                <span className={item.name}>{item.icon}</span>
              </div>
            ) : null
          )}
        </div>
        <div className="row">
          <p>
            {book.isRead === true ? (
              <span className="read-status read">
                <BsBookmarkCheck />
              </span>
            ) : (
              <span className="read-status unread">
                <BsBookmarkX />
              </span>
            )}
          </p>
        </div>

        <div className="buttons">
          <button
            className="book-btn delete"
            onClick={() => deleteBook(book.id)}
          >
            <BiTrash />
          </button>
          <button className="book-btn edit" onClick={() => toggleValue(true)}>
            <BiEdit />
          </button>
        </div>
      </div>
      {value && (
        <Modal toggleValue={toggleValue}>
          <EditBookForm
            toggleValue={toggleValue}
            editionBook={book}
            allBooks={allBooks}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}
