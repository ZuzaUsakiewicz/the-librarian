import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import BooksContextProvider from "./contexts/BooksContext";
import Modal from "./components/Modal";
import BookList from "./components/BooksList";
import BookForm from "./components/BookForm";
import useToggle from "./hooks/useToggle";
import { BiBookAdd } from "react-icons/bi";

function App() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>The Librarian</h1>
      </header>

      <BooksContextProvider>
        <button className="add-btn" onClick={toggleValue}>
          add book <BiBookAdd />
        </button>
        {value && (
          <Modal toggleValue={toggleValue}>
            <BookForm toggleValue={toggleValue} />
          </Modal>
        )}
        <section className="booklist-container">
          <BookList />
        </section>
      </BooksContextProvider>
    </div>
  );
}

export default App;
