-- +goose Up
CREATE TABLE IF NOT EXISTS author  (
    id text,
    name text NOT NULL,
    PRIMARY KEY(id)
);

-- +goose Down
DROP TABLE author;