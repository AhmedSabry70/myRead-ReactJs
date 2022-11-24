import React from "react";
//  IMPORT LINK & ROUTE FROM react-router-dom
import { Link } from "react-router-dom";
//import { useState } from "react";

// IMPORT SHELF COMPONENT
import Shelf from "./Shelf";

const Home = ({ books, shelfChanger, resetSearchInput }) => {
  // WILL FILTER OUR BOOKS TO CUSTOMIZE EVERY BOOK WITH IT SHELVES PROP
  // EXTRACT THE BOOKS THAT OWN THE SHELF : ==> {{CurrentlyReading}} IN NEW ARR
  const CurrentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  // EXTRACT THE BOOKS THAT OWN THE SHELF : ==> {{WantToRead}} IN NEW ARR
  const WantToRead = books.filter((book) => book.shelf === "wantToRead");
  // EXTRACT THE BOOKS THAT OWN THE SHELF : ==> {{Read}} IN NEW ARR
  const Read = books.filter((book) => book.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/* OUR SHELVES WITH IT CATEGORIES  WITH OUR METHOD THAT CHANGE BOOK FROM BOOK SHELF TO ANOTHER ONE*/}
          <Shelf
            shelfTitle="Currently Reading"
            books={CurrentlyReading}
            shelfChanger={shelfChanger}
          />
          {/* OUR SHELVES WITH IT CATEGORIES  WITH OUR METHOD THAT CHANGE BOOK FROM BOOK SHELF TO ANOTHER ONE*/}
          <Shelf
            shelfTitle="Want to Read"
            books={WantToRead}
            shelfChanger={shelfChanger}
          />
          {/* OUR SHELVES WITH IT CATEGORIES  WITH OUR METHOD THAT CHANGE BOOK FROM BOOK SHELF TO ANOTHER ONE*/}
          <Shelf shelfTitle="Read" books={Read} shelfChanger={shelfChanger} />
        </div>
      </div>
      <div className="open-search">
        {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}

        {/* // USE LINK ROUTE TO NAVIGATE SHEARCH PAGE
        USE OUR resetSearchInput() TO RESET ALL PREVIOUS VALUE OF SEARCH INPUT EVERY TIME WE CLICK ON SEARCH BTN TO START SEARCH*/}
        <Link
          to="search"
          className="open-search-btn"
          onClick={resetSearchInput()}
        >
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default Home;
