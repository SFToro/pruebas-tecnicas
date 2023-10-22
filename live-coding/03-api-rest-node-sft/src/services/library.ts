import type {
  AuthorInput,
  BookInput,
  LibraryServicesIface,
} from "#src/model/model.js";
import type { LibraryStore } from "#src/model/sqlite/sqlite.js";
import libraryStore from "#src/model/sqlite/sqlite.js";

class LibraryServices implements LibraryServicesIface {
  #libraryStore: LibraryStore;

  constructor(libraryStore: LibraryStore) {
    this.#libraryStore = libraryStore;
  }
  async createBook({ title, chapters, pages, authors }: BookInput) {
    const book = await this.#libraryStore.createBook({
      title,
      chapters,
      pages,
      authors,
    });
    return book;
  }
  async createAuthor({ name }: AuthorInput) {
    const author = await this.#libraryStore.createAuthor({ name });
    return author;
  }
  async getAllBooks() {
    return this.#libraryStore.getAllBooks();
  }
}

const services = new LibraryServices(libraryStore);
export default services;
