import React from "react";
// IMPORT bOOK COMPONENT
import Book from "./Book";

// SHELF COMPONENT THAT CONTAIN IT BOOKS
const Shelf = ({ shelfTitle, books, shelfChanger }) => {
  //console.log(books);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} shelfChanger={shelfChanger} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
