import { library } from "../consts/books.js";

export type Library = typeof library;
export type Book = (typeof library)[number]["book"];

export const getAllBooks = async () => {
  return library;
};

export const getAllBooksIds = (library: Library) => {
  return library.map(({ book }) => {
    return book.ISBN;
  });
};

export const getBooksByIds = ({
  ids,
  library,
}: {
  ids: string[];
  library: Library;
}) => {
  // const books = await getAllBooks();
  let availableBooks = [];
  let foundBook;
  for (const id of ids) {
    foundBook = library.find(({ book }) => {
      return book.ISBN === id;
    });
    if (foundBook) {
      availableBooks.push(foundBook);
    }
  }
  return availableBooks;
};

export const getAllGenres = () => {
  return Array(
    "",
    ...new Set(
      library.map(({ book }) => {
        return book.genre.toLowerCase();
      }),
    ).values(),
  );
};
