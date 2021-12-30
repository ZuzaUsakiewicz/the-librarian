import { useState, useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import SelectGenre from "./SelectGenre";

export default function BookForm({ toggleValue }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("fantasy");
  const [isRead, setIsRead] = useState(false);
  const { addBook } = useContext(BooksContext);

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setGenre("fantasy");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: title !== "" ? title : "*",
      author: author !== "" ? author : "&",
      isRead: isRead,
      genre: genre,
      id: Math.floor(Math.random() * 1000),
    };
    addBook(newBook);
    toggleValue(false);
    resetForm();
  };

  return (
    <div className="bg">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="the title of the book"
            aria-label="title"
          />
        </label>
        <label>
          <span>Author:</span>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="the name of the author"
            aria-label="author"
          />
        </label>
        <SelectGenre setGenre={setGenre} />
        {/* <label>
          <span>Genre:</span>
          <select onChange={(e) => setGenre(e.target.value)}>
            <option value="fantasy">Fantasy</option>
            <option value="thriller">Thriller</option>
            <option value="horror">Horror</option>
            <option value="other">Other</option>
          </select>
        </label> */}
        <input
          type="radio"
          value="unread"
          id="unread"
          onChange={(e) => setIsRead(false)}
          name="isRead"
          checked
        />
        <label htmlFor="unread">unread</label>
        <input
          type="radio"
          value="read"
          id="read"
          onChange={(e) => setIsRead(true)}
          name="isRead"
        />
        <label htmlFor="read">read</label>
        <button>Submit</button>
      </form>
      <button onClick={() => toggleValue(false)}>Close</button>
    </div>
  );
}
