import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import "../styles/BookForm.css";

export default function SelectGenre({ setGenre, firstOption }) {
  const { genreValues } = useContext(BooksContext);

  const filteredGenreValues = genreValues.filter((element) => {
    return element.name !== firstOption;
  });
  return (
    <label>
      <span>Genre</span>

      {firstOption === undefined ? (
        <select onChange={(e) => setGenre(e.target.value)}>
          {genreValues.map((genre, index) => {
            return (
              <option value={genre.name} key={index}>
                {genre.name}
              </option>
            );
          })}
        </select>
      ) : (
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value={firstOption} key={firstOption}>
            {firstOption}
          </option>

          {filteredGenreValues.map((genre, index) => {
            return (
              <option value={genre.name} key={index}>
                {genre.name}
              </option>
            );
          })}
        </select>
      )}
    </label>
  );
}
