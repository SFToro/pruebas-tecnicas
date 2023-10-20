-- +goose Up
CREATE TABLE IF NOT EXISTS author_book  (
    author_id text,
    book_id text,
    FOREIGN KEY(author_id) REFERENCES author(id) ON DELETE CASCADE,
    FOREIGN KEY(book_id) REFERENCES book(id) ON DELETE CASCADE,
    PRIMARY KEY(author_id, book_id)
);

-- +goose Down
DROP TABLE author_book;