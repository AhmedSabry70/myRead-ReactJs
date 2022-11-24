import "./App.css";
import { useEffect, useState } from "react";
// IMPORT ROUTES & ROUTE FROM react-router-dom
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Search from "./components/Search";

import * as BooksAPI from "./BooksAPI";

function App() {
  // MY STATE TO STORE OURE BOOK TO USE EM IN HOME PAGE
  const [books, setBooks] = useState([]);
  // MY STATE TO STORE OURE BOOKS THAT WAS RESULT FROM SEARCH PAGE PROCESS & USE EM IN UPDATE SEARCH PAGE UI
  const [searchBooks, setSearchBooks] = useState([]);
  // MY STATE TO STORE STRING VALUE OF SEARCH INPUT THEN PASS EM TO BACKEND SERVER TO BRING OUR BOOKS THAT MATCHES INPUT VALUE
  const [SearchString, setSearchString] = useState("");

  // BRING OUR BOOKS FROM THE SERVER WITH componentDidMount THEN PASS OUR DATA TO setBooks() STATE
  useEffect(() => {
    BooksAPI.getAll().then((books) => setBooks(books));
  }, []);

  // BRING OUR BOOKS FROM THE SERVER WITH {componentDidUpdate FOR SearchString STATE} WITH EVERY CHANG IN INPUTE VALUE
  useEffect(() => {
    if (SearchString) {
      // PASS SEARCH INPUT VALUE TO SEARCH QUERY IN BACKEND
      BooksAPI.search(SearchString).then((books) => {
        if (books.error) {
          // IF THERE NO DATA OR ERRROR RETURN EMPTY SearchBooks STATE TO SHOW BLANK SEARCH PAGE UI
          setSearchBooks([]);
        } else {
          // IF THERE IS DATA WE WILL MAP THAT DATA AND MAP BOOKS IN{ BOOKS STATE}
          // THEN COMPARE AND MERGE THE BOOKS ARE MATCHES BETWEEN EACH OTHER  AND UPDATE THE HOME PAGE AND SEARCH PAGE UI DIRECTLY WITH THEIR SHELVES
          const updatedSearchingBooks = books.map((book) => {
            books.map((b) => {
              if (b.id === book.id) book.shelf = b.shelf;
              return b;
            });
            return book;
          });
          // SET NEW DATA IN SearchBooks TO UPDATE SEARCH PAGE UI
          books && setSearchBooks(updatedSearchingBooks);
        }
      });
    }
    return () => setSearchBooks([]);
  }, [SearchString]);

  // METHODE THAT MOVING BOOK FROM SHELF TO ANOTHER
  const shelfChanger = (book, targetShelf) => {
    // HERE WE WANT TO RETURN THE SAME CATEGORY SHELF FOR THE BOOKS IN MAIN PAGE AND SEARCH PAGE
    // SO WE WILL PASS HERE THE BOTH BOOKS IN MAIN PAGE AND RESULTS BOOKS IN SEARCH PAGE AND WE WILL FILTER
    // BOOKS AND ADD SHELF TO BOOKS THAT HAVN'T SHELF THEN UPDATE UI IN BookChanger.js COMPONENT IN BOTH PAGES AND SHELVESIN HOME PAGE
    let updatedBooksByShelves = books.filter((b) => b.id !== book.id);
    if (targetShelf !== "none") {
      book.shelf = targetShelf;
      updatedBooksByShelves = [...updatedBooksByShelves, book];
    }
    setBooks(updatedBooksByShelves);
    BooksAPI.update(book, targetShelf);
  };

  // METHODE THAT REST SEARCH INPUT VALUE
  const resetSearchInput = () => {
    return () => setSearchString([]);
  };

  return (
    <div className="app">
      {/* use React Router */}
      {/* HOM PAGE component ROUTER */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              books={books}
              shelfChanger={shelfChanger}
              resetSearchInput={resetSearchInput}
            />
          }
        />

        {/* SEARCH PAGE component ROUTER */}
        <Route
          exact
          path="/search"
          element={
            <Search
              query={SearchString}
              setSearchString={setSearchString}
              searchBooks={searchBooks}
              shelfChanger={shelfChanger}
              books={books}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// npm config set proxy http://your-proxy-url:8080
// npm config set https - proxy https://your-proxy-url:8080
// npm config set strict-ssl false
