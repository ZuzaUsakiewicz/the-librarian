import React from "react";
import "../styles/Pagination.css";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

export default function Pagination({
  booksPerPage,
  totalBooks,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }
  let paginationLimit_1 = currentPage > 1 ? currentPage - 2 : currentPage - 1;
  let paginationLimit_2 = currentPage + 1;

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        {currentPage > 1 ? (
          <button className="arrow" onClick={() => paginate(currentPage - 1)}>
            <BiLeftArrowAlt />
          </button>
        ) : (
          <button className="arrow" disabled={true} style={{ cursor: "auto" }}>
            <BiLeftArrowAlt />
          </button>
        )}
        {pageNumbers
          .slice(paginationLimit_1, paginationLimit_2)
          .map((number) => (
            <a
              onClick={() => paginate(number)}
              href="!#"
              key={number}
              className={`${
                number === currentPage
                  ? "pagination-el active"
                  : "pagination-el"
              }`}
            >
              <li>{number}</li>{" "}
            </a>
          ))}
        {currentPage < pageNumbers.length ? (
          <button className="arrow" onClick={() => paginate(currentPage + 1)}>
            <BiRightArrowAlt />
          </button>
        ) : (
          <button className="arrow" disabled={true} style={{ cursor: "auto" }}>
            <BiRightArrowAlt />
          </button>
        )}
      </ul>
    </div>
  );
}
