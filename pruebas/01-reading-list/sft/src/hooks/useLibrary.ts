import { BookContext } from "@/app/components/BookProvider";
import { FilterContext } from "@/app/components/FilterProvider";
import { getBooksByIds } from "@/model/books";
import { useContext, useEffect } from "react";

export const useLibrary = () => {
  const bookContext = useContext(BookContext);

  const filterContext = useContext(FilterContext);

  useEffect(() => {
    console.log("Loading library from local storage");
    loadLibrary();
    window.addEventListener("storage", loadLibrary);
    return () => {
      window.removeEventListener("storage", loadLibrary);
    };
  }, []);

  if (!bookContext) {
    console.log("No BookContext for useLibrary");
    return { library: [], moveBookToLectura: () => {}, saveListas: () => {} };
  }
  if (!filterContext) {
    console.log("No FilterContext for useLibrary");
    return { library: [], moveBookToLectura: () => {}, saveListas: () => {} };
  }
  const { state: filterState } = filterContext;

  const {
    library,
    initialLibrary,
    moveBookToLectura: addBookToLectura,
    saveListas,
    loadLibrary,
  } = bookContext;

  const libraryBooks = getBooksByIds({ ids: library, library: initialLibrary });

  let filteredLibrary = libraryBooks.filter(({ book }) => {
    if (filterState.genreFilter === "") {
      return true;
    }
    if (filterState.genreFilter.toLowerCase() === book.genre.toLowerCase()) {
      return true;
    }

    return false;
  });

  filteredLibrary = filteredLibrary.filter(({ book }) => {
    return book.pages > filterState.pagesFilter;
  });

  return {
    library: filteredLibrary,
    moveBookToLectura: addBookToLectura,
    saveListas,
  };
};
