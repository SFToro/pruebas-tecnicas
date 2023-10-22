import { Database } from "bun:sqlite";
import type {
  Author,
  AuthorInput,
  Book,
  BookInput,
  StoreIface,
} from "../model.js";

class Store implements StoreIface {
  #db: {};

  constructor(jsonObj: {}) {
    this.#db ;
    
  async getAllBooks() {

  }
  async getBookByTitle() {
  }
  async createBook({ title, pages, chapters, authors }: BookInput) {


  }
  async getAllAuthors() {
    
  }

  async createAuthor({ name }: AuthorInput) {

    return author;
  }
}
}

const store = new Store({});

export type LibraryStore = typeof store;
export default store;
