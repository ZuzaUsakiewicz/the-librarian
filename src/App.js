import "./App.css";
import Navbar from "./components/Navbar";
import BooksContextProvider from "./contexts/BooksContext";
import Modal from "./components/Modal";
import BookList from "./components/BooksList";
import BookForm from "./components/BookForm";
import useToggle from "./hooks/useToggle";
import { BiPlus } from "react-icons/bi";
import "./styles/AddBookButton.css";

function App() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div className="app">
      <Navbar />

      <BooksContextProvider>
        {value && (
          <Modal toggleValue={toggleValue} value={value}>
            <BookForm toggleValue={toggleValue} />
          </Modal>
        )}
        <section className="booklist-container">
          <button className="add-btn" onClick={toggleValue}>
            <BiPlus />
          </button>
          <BookList toggleValue={toggleValue} />
        </section>
      </BooksContextProvider>
    </div>
  );
}

export default App;
