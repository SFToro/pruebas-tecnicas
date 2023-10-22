export interface BookInput {
  pages: number;
  chapters: number;
  title: string;
  authors: string[];
}

export interface AuthorInput {
  name: string;
}
export type BooksWithAuthors = [{ book_id: string; author: [string] }];

export interface Book extends BookInput {
  id: string;
}

export interface Author extends AuthorInput {
  id: string;
}

export interface StoreIface {
  getAllBooks(): Promise<BooksWithAuthors>;

  createBook(bookInput: BookInput): Promise<Book>;

  createAuthor(authorInput: AuthorInput): Promise<Author>;
}

export interface LibraryServicesIface {
  getAllBooks(): Promise<BooksWithAuthors>;

  createBook(bookInput: BookInput): Promise<Book>;

  createAuthor(authorInput: AuthorInput): Promise<Author>;
}
