import { BookContext } from "@/app/components/BookProvider";
import { getBooksByIds } from "@/model/books";
import React, { useContext, useEffect } from "react";

export const useListaLectura = () => {
  const context = useContext(BookContext);
  useEffect(() => {
    loadLectura();
    window.addEventListener("storage", loadLectura);
    return () => {
      window.removeEventListener("storage", loadLectura);
    };
  }, []);

  if (!context) {
    return { lectura: [], loadLectura: () => {} };
  }
  const { lectura, loadLectura, initialLibrary } = context;

  const listaDeLectura = getBooksByIds({
    ids: lectura,
    library: initialLibrary,
  });

  return { lectura: listaDeLectura, loadLectura };
};
