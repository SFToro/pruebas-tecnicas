"use client";
import { useLibrary } from "@/hooks/useLibrary";

function ListOfBooks() {
  const { library, moveBookToLectura, saveListas } = useLibrary();

  return (
    <div>
      <h1>Lista de libros</h1>
      <ul>
        {library.map(({ book }) => {
          return (
            <li
              key={book.ISBN}
              onClick={() => {
                moveBookToLectura(book.ISBN);
                saveListas();
              }}
            >
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfBooks;
