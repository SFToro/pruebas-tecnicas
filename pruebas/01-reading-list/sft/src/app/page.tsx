import { getAllBooks, getAllBooksIds } from "@/model/books";

import ListOfBooks from "./components/ListOfBooks";
import ListOfLectura from "./components/ListOfLectura";
import BookProvider from "./components/BookProvider";
import FilterProvider from "./components/FilterProvider";
import Filters from "./components/Filters";

export default async function Home() {
  const initialLibrary = await getAllBooks();
  const initialLibraryIds = getAllBooksIds(initialLibrary);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BookProvider
        initialLibraryIds={initialLibraryIds}
        initialLibrary={initialLibrary}
      >
        <FilterProvider>
          <Filters />
          <ListOfBooks />
          <ListOfLectura />
        </FilterProvider>
      </BookProvider>
    </main>
  );
}
