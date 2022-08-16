import React, { useState, useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import SelectGenre from "./SelectGenre";
import "../styles/BookForm.css";
import { BiX } from "react-icons/bi";

export default function EditBookForm({ toggleValue, editionBook }) {
  const id = editionBook.id;
  const [title, setTitle] = useState(editionBook.title);
  const [author, setAuthor] = useState(editionBook.author);
  const [genre, setGenre] = useState(editionBook.genre);
  const [isRead, setIsRead] = useState(editionBook.isRead);
  const { updateBook } = useContext(BooksContext);
  const updatedBook = { id, title, author, genre, isRead };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(id, updatedBook);
    toggleValue(false);
  };

  return (
    <div className="bg">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input
            autoFocus={true}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="the title of the book"
            aria-label="title"
          />
        </label>
        <label>
          <span>Author</span>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="the name of the author"
            aria-label="author"
          />
        </label>
        <SelectGenre setGenre={setGenre} firstOption={editionBook.genre} />
        <div className="radio-buttons">
          <input
            className="radio-input"
            type="radio"
            value="unread"
            id="unread"
            onChange={(e) => setIsRead(false)}
            name="isRead"
            checked={isRead ? false : true}
          />
          <label htmlFor="unread" className="radio-label">
            not read
          </label>

          <input
            className="radio-input"
            type="radio"
            value="read"
            id="read"
            onChange={(e) => setIsRead(true)}
            name="isRead"
            checked={isRead ? true : false}
          />
          <label htmlFor="read" className="radio-label">
            read
          </label>
        </div>
        <button className="submit-btn">Update</button>
      </form>
      <button onClick={() => toggleValue(false)} className="close-btn">
        <BiX />
      </button>
    </div>
  );
}
