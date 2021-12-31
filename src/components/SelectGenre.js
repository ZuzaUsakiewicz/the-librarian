import React from "react";

export default function SelectGenre({ setGenre, firstOption }) {
  const genreValues = [
    { name: "fantasy" },
    { name: "thriller" },
    { name: "horror" },
    { name: "history" },
    { name: "other" },
  ];
  const filteredGenreValues = genreValues.filter((element) => {
    return element.name !== firstOption;
  });
  return (
    <label>
      <span>Genre:</span>

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
