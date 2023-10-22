import { Database } from "bun:sqlite";
import type {
  Author,
  AuthorInput,
  Book,
  BookInput,
  BooksWithAuthors,
  StoreIface,
} from "../model.js";
class Store implements StoreIface {
  #db: Database;
  #getAllBooksQuery;
  #createBookQuery;
  #findBookByTitleQuery;
  #getAllAuthorsQuery;
  #createAuthorQuery;
  #createBookAuthorQuery;

  constructor(filename: string) {
    this.#db = new Database(filename);
    this.#db.exec("PRAGMA journal_mode = WAL;");
    this.#db.exec("PRAGMA foreign_keys = ON;");

    this.#getAllBooksQuery = this.#db.prepare(
      `SELECT book.id as book_id, GROUP_CONCAT(author.name) as authors FROM book JOIN author_book ON book.id = author_book.book_id JOIN author ON author_book.author_id = author.id GROUP BY book.id;`
    );
    this.#createBookQuery = this.#db.query(
      `INSERT INTO book (id, title, pages,chapters) VALUES ($id, $title, $pages, $chapters) RETURNING id, title, pages, chapters;`
    );

    this.#findBookByTitleQuery = this.#db.query(
      `SELECT * FROM book WHERE title LIKE (?1);`
    );
    this.#getAllAuthorsQuery = this.#db.prepare(`SELECT * FROM author;`);
    this.#createAuthorQuery = this.#db.query(
      `INSERT INTO author (id, name) VALUES ($id, $name) RETURNING id, name;`
    );
    this.#createBookAuthorQuery = this.#db.query(
      `INSERT INTO author_book (author_id, book_id) VALUES ($author_id, $book_id);`
    );
  }
  async getAllBooks() {
    const booksWithAuthors = this.#getAllBooksQuery.all() as BooksWithAuthors;

    return booksWithAuthors;
  }
  async getBookByTitle() {
    return this.#findBookByTitleQuery.get();
  }
  async createBook({ title, pages, chapters, authors }: BookInput) {
    const book_uuid = crypto.randomUUID();
    const transaction = this.#db.transaction(() => {
      const book = this.#createBookQuery.get({
        $id: book_uuid,
        $title: title,
        $pages: pages,
        $chapters: chapters,
      }) as Book;
      authors.forEach((author) => {
        this.#createBookAuthorQuery.run({
          $book_id: book_uuid,
          $author_id: author,
        });
      });
      return book;
    });
    const result = transaction();
    return result;
  }
  async getAllAuthors() {
    return this.#getAllAuthorsQuery.all();
  }

  async createAuthor({ name }: AuthorInput) {
    const uuid = crypto.randomUUID();
    const author = this.#createAuthorQuery.get({
      $id: uuid,
      $name: name,
    }) as Author;
    return author;
  }
}
const store = new Store("src/model/sqlite/db.sqlite");

export type LibraryStore = typeof store;
export default store;
