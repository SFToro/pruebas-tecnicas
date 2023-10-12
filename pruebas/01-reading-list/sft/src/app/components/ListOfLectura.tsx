"use client";

import { useListaLectura } from "@/hooks/useListaLectura";

function ListOfBooks() {
  const { lectura } = useListaLectura();

  if (lectura.length === 0) {
    return null;
  }
  return (
    <div>
      <h1>Lista de lectura</h1>
      <ul>
        {lectura.map(({ book }) => {
          return <li key={book.ISBN}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default ListOfBooks;
