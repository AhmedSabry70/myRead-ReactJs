# MyReads Website application ==> Udacity Project

MyReads: A Book Lending App The application was created with create-react-app.

## Table of Contents

- [General Info](#general-information)
- [Features](#Features)
- [Screenshots](#screenshots)
- [List Of Files](#List-of-files)
- [Setup](#Setup)
- [Environment & Requirements](#Environment-&-Requirements)
- [Installation](#Installation)
- [Running the project](#Running-the-project)
- [Sources & Acknowledgements](#-Sources-&-Acknowledgements)
- [Contact & Authors](#contact-&-Authors)
- [Feedback](#Feedback)
- [Support](#Support)
- [License](#License)
- [Copyright](#Copyright)

## General Information

- This project aims to give you a real-world scenario in using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application..

- In the MyReads project, we'll create a bookshelf app that allows to select and categorize books you have read, are currently reading, or want to read. The project emphasizes

## Features

- **The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.**
- **The main page shows a control that allows users to move books between shelves.**

- **When the browser is refreshed, the same information is displayed on the page.**

- **As the user types into the search field, books that match the query are displayed on the page,**

- **Search results are not shown when all of the text is deleted out of the search input box.**\
  ┣ c) Invalid queries are handled and prior search results are not shown.\
  ┣ d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").(It's fine to filter out books with missing thumbnails.)\
  ┗ e) The user is able to search for multiple words, such as “artificial intelligence.”\

- **search results allow a user to categorize a book as “currently reading”, “want to read”, or “read”**

- **When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.**
- **Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.**

## Screenshots

![Example screenshot](/Screenshot.gif)

## List of files

```bash
📦vvvvvvvvvvvv\
 ┣ 📂public\
 ┃ ┣ 📜favicon.ico\
 ┃ ┗ 📜index.html\
 ┣ 📂src\
 ┃ ┣ 📂component\
 ┃ ┃ ┣ 📜Book.js\
 ┃ ┃ ┣ 📜BookChanger.js\
 ┃ ┃ ┣ 📜Home.js\
 ┃ ┃ ┣ 📜Search.js\
 ┃ ┃ ┗ 📜Shelf.js\
 ┃ ┣ 📂icons\
 ┃ ┃ ┣ 📜add.svg\
 ┃ ┃ ┣ 📜arrow-ba\
 ┃ ┃ ┗ 📜arrow-dr\
 ┃ ┣ 📜App.css\
 ┃ ┣ 📜App.js\
 ┃ ┣ 📜BooksAPI.j\
 ┃ ┣ 📜index.css\
 ┃ ┗ 📜index.js\
 ┣ 📜LICENSE\
 ┣ 📜package.json\
 ┣ 📜README.md\
 ┗ 📜yarn.lock\
```

## Setup

## Environment & Requirements

For development, you will only need Node.js and a node global package, and NPM

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    ex: v8.11.3

    $ npm --version

ex: 6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Installation

Install my-project with npm
Run Locally

Go to the project directory and open your terminal there then write:

1. Install dependencies

```bash
  npm install
```

Or

```bash
  yarn
```

2. Build

```
    npm run build
```

3. Start the server

## Running the project

Start the server

```bash
  npm start
```

```bash
  yarn start
```

or

```bash
  npm run start
```

## Running the project and other

**Run unit tests**

```
    npm run test
```

After you successfully run the server, open this URL in your browser and you will see documntaion to use the project

> Go to your browser: [http://localhost:3000](http://localhost:3000)

```
    http://localhost:3000


```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Sources & Acknowledgements

- [React Router](https://reactrouter.com/docs/en/v6)
- [React](https://reactjs.org/docs/getting-started.html)
- [ReactDOM](https://reactjs.org/docs/react-dom.html)

## Contact & Authors

Created by [@Ahmed Sabry](mrsabry134@gmail.com) - feel free to contact me!

- Github [@AhmedSabry70](https://github.com/AhmedSabry70/)
- Linkedin [@Ahmed Sabry](https://www.linkedin.com/in/%D9%90ahmedsabry/)

# Feedback

If you have any feedback, please reach out to us at mrsabry134@gmail.com

## Support

For support, email mrsabry134@gmail.com

## License

Distributed under the MIT License. See LICENSE for more information.[MIT](/LICENSE)

## Copyright

&copy; [Ahmed SAbry](mrsabry134@gmail.com), Inc. All rights reserved.
