import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import useToggle from "../hooks/useToggle";
import Modal from "./Modal";
import EditBookForm from "./EditBookForm";
import { BiTrash, BiEdit } from "react-icons/bi";
import { BsBookmarkCheck, BsBookmarkX } from "react-icons/bs";
import "../styles/GenreIcons.css";
import "../styles/Book.css";
import "../styles/ActionButtons.css";
import DeleteConfirm from "./DeleteConfirm";

export default function Book({ book }) {
  const { allBooks, genreValues } = useContext(BooksContext);
  const [value, toggleValue] = useToggle(false);
  const [deleteItem, toggleDeleteItem] = useToggle(false);

  return (
    <React.Fragment>
      <div className="single-book">
        <div className="read-badge">
          {book.isRead === true ? (
            <div className="read-status read">
              <BsBookmarkCheck />
              <h6>read</h6>
            </div>
          ) : (
            <div className="read-status unread">
              <BsBookmarkX />
              <h6>unread</h6>
            </div>
          )}
          {genreValues.map((item) =>
            item.name === book.genre ? (
              <div className="icon-container" key={item.id}>
                <span className={item.name}>
                  <i>{item.icon}</i>
                </span>
              </div>
            ) : null
          )}
        </div>
        <div className="row">
          <p>{book.author}</p> <p>{book.title}</p>
          <h6>{book.genre}</h6>
        </div>

        <div className="action-buttons">
          <button
            className="book-btn delete"
            onClick={() => toggleDeleteItem(true)}
          >
            <BiTrash />
          </button>
          <button className="book-btn edit" onClick={() => toggleValue(true)}>
            <BiEdit />
          </button>
          {deleteItem && (
            <Modal toggleValue={toggleDeleteItem}>
              <DeleteConfirm toggleValue={toggleDeleteItem} book={book} />
            </Modal>
          )}
        </div>
      </div>
      {value && (
        <Modal toggleValue={toggleValue}>
          <EditBookForm
            toggleValue={toggleValue}
            editionBook={book}
            allBooks={allBooks}
            genreValues={genreValues}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}
