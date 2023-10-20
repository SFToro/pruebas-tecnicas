import type { AuthorInput, BookInput } from "../model/model.js";
import type { LibraryStore } from "../model/sqlite/sqlite.js";
import libraryStore from "../model/sqlite/sqlite.js";

class LibraryServices {
  #libraryStore;

  constructor(libraryStore: LibraryStore) {
    this.#libraryStore = libraryStore;
  }
  async createBook({ title, chapters, pages, authors }: BookInput) {
    const id = await this.#libraryStore.createBook({
      title,
      chapters,
      pages,
      authors,
    });
    return id;
  }
  async createAuthor({ name }: AuthorInput) {
    const id = await this.#libraryStore.createAuthor({ name });
    return id;
  }
  async getBooks() {
    return this.#libraryStore.getAllBooks();
  }
}

const services = new LibraryServices(libraryStore);
export default services;
