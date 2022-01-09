import { useState, useContext, useRef, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";
import SelectGenre from "./SelectGenre";
import "../styles/BookForm.css";
import { BiX } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export default function BookForm({ toggleValue }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("fantasy");
  const [isRead, setIsRead] = useState(false);
  const inputRef = useRef();
  const { addBook } = useContext(BooksContext);

  useEffect(() => {
    if (toggleValue) {
      inputRef.current.focus();
    }
  }, [toggleValue]);

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setGenre("fantasy");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: title !== "" ? title : "title: undefined",
      author: author !== "" ? author : "author: undefined",
      isRead: isRead,
      genre: genre,
      id: uuidv4(),
    };
    addBook(newBook);
    toggleValue(false);
    resetForm();
  };

  return (
    <div className="bg">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input
            type="text"
            ref={inputRef}
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
        <SelectGenre setGenre={setGenre} />
        <div className="radio-buttons">
          <div className="read-radio">
            <input
              type="radio"
              value="unread"
              id="unread"
              onChange={(e) => setIsRead(false)}
              name="isRead"
              checked={isRead ? false : true}
            />
            <label htmlFor="unread">unread</label>
          </div>
          <div className="read-radio">
            <input
              type="radio"
              value="read"
              id="read"
              onChange={(e) => setIsRead(true)}
              name="isRead"
              checked={isRead ? true : false}
            />
            <label htmlFor="read">read</label>
          </div>
        </div>
        <button>Submit</button>
      </form>

      <button onClick={() => toggleValue(false)} className="close-btn">
        <BiX />
      </button>
    </div>
  );
}
