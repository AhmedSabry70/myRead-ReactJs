import React from "react";
import { Link } from "react-router-dom";
// IMPORT bOOK COMPONENT
import Book from "./Book";

const Search = ({ query, setSearchString, searchBooks, shelfChanger }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        {/* <a
            className="close-search"
           // onClick={() => setShowSearchpage(!showSearchPage)}
          >
            Close
                </a> */}
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setSearchString(e.target.value)}
          />
          {/* {console.log(query)} */}
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {/* {console.log(query)} */}

          {searchBooks.map((book) => (
            <li key={book.id}>
              <Book book={book} shelfChanger={shelfChanger} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
