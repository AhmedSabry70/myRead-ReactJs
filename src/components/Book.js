import React from "react";
// IMPORT BookshelfChanger
import BookshelfChanger from "./BookChanger";

const Book = ({ book, shelfChanger }) => {
  // console.log(book);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks && book.imageLinks.thumbnail
            })`,
          }}
        ></div>
        {/* BookshelfChanger COMPONENT THAT USE  */}
        <BookshelfChanger book={book} shelfChanger={shelfChanger} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
