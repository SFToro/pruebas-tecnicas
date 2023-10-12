"use client";
import { bookReducerAction, bookReducer, booksActions } from "@/reducers/books";
import React, { createContext, useReducer } from "react";
import { FilterState } from "./FilterProvider";
import { Library } from "@/model/books";

type BookContext = {
  lectura: string[];
  library: string[];
  initialLibrary: Library;
  moveBookToLectura: (ISBN: string) => void;
  loadLibrary: () => void;
  loadLectura: () => void;
  saveListas: () => void;
};
export const BookContext = createContext<BookContext | null>(null);

export type AppState = {
  lectura: string[];
  library: string[];
};

export type BookAction = {
  type: bookReducerAction;
  payload?: string | FilterState;
};

function BookProvider({
  children,
  initialLibraryIds,
  initialLibrary,
}: {
  children: React.ReactNode;
  initialLibraryIds: string[];
  initialLibrary: Library;
}) {
  const addBookToLectura = (ISBN: string) => {
    dispatch({ type: booksActions.MOVE_TO_LECTURA, payload: ISBN });
  };

  const loadLibrary = () => {
    dispatch({ type: booksActions.LOAD_LIBRARY });
  };

  const loadLectura = () => {
    dispatch({ type: booksActions.LOAD_LECTURA });
  };
  const saveListas = () => {
    dispatch({ type: booksActions.SAVE_LISTAS });
  };
  const initialState: AppState = {
    lectura: [],
    library: initialLibraryIds,
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);
  return (
    <BookContext.Provider
      value={{
        initialLibrary,
        loadLectura,
        loadLibrary,
        moveBookToLectura: addBookToLectura,
        library: state.library,
        lectura: state.lectura,
        saveListas,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;
