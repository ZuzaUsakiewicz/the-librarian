import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

export default function DeleteConfirm({ toggleValue, book }) {
  const { deleteBook } = useContext(BooksContext);

  return (
    <div>
      Do you want to confirm?
      <button onClick={() => deleteBook(book.id)}>yes</button>
      <button onClick={() => toggleValue(false)}>no</button>
    </div>
  );
}
