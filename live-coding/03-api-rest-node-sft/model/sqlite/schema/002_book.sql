-- +goose Up
CREATE TABLE IF NOT EXISTS book (
    id text,
    title text NOT NULL,
    chapters int NOT NULL,
    pages int NOT NULL,
    PRIMARY KEY(id)
);

-- +goose Down
DROP TABLE book;